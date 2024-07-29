const newrelic = require('newrelic');

module.exports.handler = newrelic.setLambdaHandler((event, context, callback) => {
    newrelic.recordCustomEvent('MyEventType', { foo: 'bar' });
    console.log('Lambda executed');
    callback();
  });