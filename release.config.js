const makeCommonConfig = require('@cycjimmy/config-lib/semanticRelease/15.x/makeCommonConfig');

module.exports = makeCommonConfig({
  githubOptions: {
    "assets": [
      "build/weixin-share.min.js"
    ]
  },
  exec: true,
  execOptions: {
    publishCmd: 'npm run build'
  }
});