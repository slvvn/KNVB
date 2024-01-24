import { router } from "expo-router";
import { Pressable, Text } from "react-native";

const IndexTabRoute = () => {
  return (
    <Pressable
      accessibilityRole="button"
      onPress={() =>
        router.push({ pathname: "/articles/[id]", params: { id: "1" } })
      }
    >
      <Text>Tap to open screen with Theoplayer</Text>
    </Pressable>
  );
};

export default IndexTabRoute;
