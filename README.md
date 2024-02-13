# Reproduction repo for React Native Theoplayer crash

## Steps

1. Install dependencies
   ```sh
   yarn install
   ```

2. Copy `.env.example` to `.env` and provide the Theoplayer license

3. Run Android debug build
   ```sh
   yarn android
   ```

4. When the app launched in the Android simulator, press on the button to open the screen containing the Theoplayer.

5. After the screen with the video has been rendered, play the content.

## Expected result

Given the devices have a stable internet connection, both Android and iOS will play the stream with minimal delay.

## Actual result

Performance issue occurs:
```
Playout on Android takes more than 5 seconds to start.
```