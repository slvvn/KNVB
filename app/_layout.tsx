import { SplashScreen, Stack } from "expo-router";
import React from "react";

SplashScreen.preventAutoHideAsync();

const RootLayout = () => {
  React.useEffect(() => {
    SplashScreen.hideAsync();
  }, []);

  return (
    <Stack>
      <Stack.Screen name="index" />
      <Stack.Screen name="articles/[id]" />
    </Stack>
  );
};

export { ErrorBoundary } from "expo-router";

export default RootLayout;
