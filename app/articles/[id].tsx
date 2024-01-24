import {
  CenteredControlBar,
  CenteredDelayedActivityIndicator,
  ControlBar,
  DEFAULT_THEOPLAYER_THEME,
  PlayButton,
  SeekBar,
  UiContainer,
} from "@theoplayer/react-native-ui";
import { useLocalSearchParams } from "expo-router";
import React, { useState } from "react";
import {
  PlayerConfiguration,
  THEOplayer,
  THEOplayerView,
} from "react-native-theoplayer";

type Params = {
  id: string;
};

const PLAYER_CONFIG: PlayerConfiguration = {
  license: process.env.EXPO_PUBLIC_THEOPLAYER_LICENSE,
};

const ArticleRoute = () => {
  const { id } = useLocalSearchParams<Params>();

  const [player, setPlayer] = useState<THEOplayer | undefined>(undefined);

  const handleReady = (_player: THEOplayer) => {
    // eslint-disable-next-line no-param-reassign
    _player.source = {
      sources: [
        {
          src: "https://live-par-2-abr.livepush.io/vod/bigbuckbunnyclip.mp4",
        },
      ],
    };

    setPlayer(_player);
  };

  return (
    <THEOplayerView config={PLAYER_CONFIG} onPlayerReady={handleReady}>
      {player !== undefined && (
        <UiContainer
          theme={{ ...DEFAULT_THEOPLAYER_THEME }}
          player={player}
          behind={<CenteredDelayedActivityIndicator size={50} />}
          center={<CenteredControlBar middle={<PlayButton />} />}
          bottom={
            <ControlBar>
              <SeekBar />
            </ControlBar>
          }
        />
      )}
    </THEOplayerView>
  );
};

export default ArticleRoute;
