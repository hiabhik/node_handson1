
const http = require('http');
const server1 = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'application/json');

  const data = { message: 'Hello, World! I am Node js' };
  res.end(JSON.stringify(data));
});

server1.listen(8080, () => {
  
});
