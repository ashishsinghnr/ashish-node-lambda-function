import newrelic from 'newrelic';

// Other module imports go under the import statement above
export const handler = newrelic.setLambdaHandler((event, context, callback) => {
  // This is your handler function code
  newrelic.recordCustomEvent('MyEventType', { foo: 'bar' });
  console.log('Lambda executed');
  const response = {
      statusCode: 200,
      body: JSON.stringify('Hello from Lambda!'),
  };
  return response;
});