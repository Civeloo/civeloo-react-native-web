# civeloo-react-native-web
Web developed in react native

# Create
```bash
npx yarn create expo-app
npx yarn add react-native-web@~0.19.6 react-dom@18.2.0 @expo/webpack-config
npx yarn expo install expo-router react-native-safe-area-context react-native-screens expo-linking expo-constants expo-status-bar react-native-gesture-handler
npx yarn expo customize metro.config.js
```

# Expo Router

package.json
```json
{
  "main": "expo-router/entry",
  ...
  "resolutions": {
    "react-refresh": "~0.14.0"
  }
}
```

app.json
```json
{
  ...
  "scheme": "your-app-scheme",
  ...
  "web": {
    ...
    "bundler": "metro",
    "output": "static"
  }
  ...
}
```

metro.config.js
```javascript
const { getDefaultConfig } = require('expo/metro-config');

/** @type {import('expo/metro-config').MetroConfig} */
const config = getDefaultConfig(__dirname, {
  // Additional features...
});

module.exports = config;
```

babel.config.js
```javascript
module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: ['expo-router/babel'],
  };
};
```

# Install
```bash
npx yarn install
```
# Debug
```bash
npx yarn expo start -c
```
# Build
```bash
npx yarn expo export --platform web
```
# Run
```bash
npx serve dist
```
# Deploy
```bash
# Deploy to staging
npx netlify deploy --dir dist
# Deploy to production
npx netlify deploy --prod --dir dist

```
#
# Author 

[**DeGsoft**](https://github.com/DeGsoft)

[Youtube](https://www.youtube.com/@degsoft)

[LinkedIn](https://www.linkedin.com/in/diegoezequielguillen)

[Twitter](https://twitter.com/DeGsoft)

[TikTok](https://www.tiktok.com/@degsoft)

[Instagram](https://www.instagram.com/degsoft)