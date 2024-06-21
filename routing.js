const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  console.log("URL", req.url);
  res.setHeader("Content-Type", "text/html");

  let path = "./html/";
  switch (req.url) {
    case "/about":
      path += "index.html";
      res.statusCode = 200;
      break;

    case "/home":
      path += "home.html";
      res.statusCode = 200;
      break;

    case "/":
      res.setHeader("Location", "/about");
      res.statusCode = 301;
      break;

    default:
      path += "error.html";
      res.statusCode = 404;
      break;
  }

  fs.readFile(path, (err, data) => {
    if (err) {
      console.log(err);
      res.end();
    } else {
      res.end(data);
    }
  });

  // res.write('<h1>HELLO NIGGAS</h1>')
  // res.end();
});

const port = process.env.PORT || 3000;
server.listen(port, "0.0.0.0", () => {
  console.log("listning on ", port);
});

console.log("pc fucked");
