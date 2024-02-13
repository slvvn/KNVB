import {
  CenteredControlBar,
  CenteredDelayedActivityIndicator,
  ControlBar,
  DEFAULT_THEOPLAYER_THEME,
  FullscreenButton,
  PlayButton,
  SeekBar,
  UiContainer,
} from "@theoplayer/react-native-ui";
import { useLocalSearchParams } from "expo-router";
import React, { useState } from "react";
import { View } from "react-native";
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
          src: "https://knvb-oranjeapp-t-azwe-wa-cms-1.azurewebsites.net/media/grrbqtth/tree.mp4",
        },
      ],
    };

    setPlayer(_player);
  };

  return (
    <View style={{ height: 300 }}>
      <THEOplayerView config={PLAYER_CONFIG} onPlayerReady={handleReady}>
        {player !== undefined && (
          <UiContainer
            theme={{ ...DEFAULT_THEOPLAYER_THEME }}
            player={player}
            behind={<CenteredDelayedActivityIndicator size={50} />}
            center={<CenteredControlBar middle={<PlayButton />} />}
            bottom={
              <>
                <ControlBar>
                  <SeekBar />
                </ControlBar>
                <ControlBar>
                  <FullscreenButton />
                </ControlBar>
              </>
            }
          />
        )}
      </THEOplayerView>
    </View>
  );
};

export default ArticleRoute;
