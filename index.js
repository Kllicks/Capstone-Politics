// this is the index.js

const app = require('./server/server');

app.listen(4000, () => {
  console.log('Listening');
});
