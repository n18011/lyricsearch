exports.handler = function (event, context, callback) {
  console.log('Hello Netlify Functions.')
  callback(null, {
    statusCode: 200,
    body: 'Hello, World'
  })
}
