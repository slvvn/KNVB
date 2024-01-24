const { getSentryExpoConfig } = require("@sentry/react-native/metro");

const defaultConfig = getSentryExpoConfig(__dirname);

module.exports = {
  ...defaultConfig,
  transformer: {
    ...defaultConfig.transformer,
    getTransformOptions: () => ({
      transform: {
        experimentalImportSupport: false,
        inlineRequires: false,
      },
    }),
    babelTransformerPath: require.resolve("react-native-svg-transformer"),
  },
  resolver: {
    ...defaultConfig.resolver,
    assetExts: defaultConfig.resolver.assetExts.filter((ext) => ext !== "svg"),
    sourceExts: [...defaultConfig.resolver.sourceExts, "mjs", "cjs", "svg"],
    resolverMainFields: defaultConfig.resolver.resolverMainFields,
  },
};
