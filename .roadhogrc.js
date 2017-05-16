import pxtorem from 'postcss-pxtorem';

export default {
  "entry": "src/index.js",
  "disableCSSModules": false,
  "theme": {
    "@brand-primary": "#FF6A00"
  },
  "autoprefixer": {
    "browsers": [
      "iOS >= 8",
      "Android >= 4"
    ]
  },
  "proxy": null,
  "extraBabelPlugins": [
    "transform-runtime",
    ["import", { "libraryName": "antd-mobile", "style": true }]
  ],
  
  "env": {
    "development": {
      "extraBabelPlugins": [
        "dva-hmr"
      ]
    }
  },
  "extraPostCSSPlugins": [
    pxtorem({
      rootValue: 100,
      propWhiteList: [],
    }),
  ]
};
