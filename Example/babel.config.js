module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        alias: {
          '@react-native-twitter-signin/twitter-signin': '../src',
        },
      },
    ],
  ],
};
