const config = {};

config.mongoURI = {
  development: 'mongodb://127.0.0.1:27017/cinema',
  test: 'mongodb://127.0.0.1:27017/node-test'
};

module.exports = config;