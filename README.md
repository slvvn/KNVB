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

5. After the screen with the video has been rendered, go back to the previous screen.

## Expected result

Navigating back goes successfully, without an error.

## Actual result

Error occurs:
```
The specific child already has a parent. You must call removeView() on the child's parent first.
```