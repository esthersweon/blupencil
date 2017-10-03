module.exports = {
  connectToMongo: require('./connect-to-mongo'),
  routes: {
    userAccount: require('./routes/user-account'),
    essay: require('./routes/essay'),
    oauth: require('./routes/oauth'),
    thirdPartyApi: require('./routes/third-party-api')
  }
}