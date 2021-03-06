const http = require("http");

http
  .createServer(function (req, res) {
    // the replace function removes any query strings and slashes
    // the toLowerCase functions makes it lower case
    path = req.url.replace(/\/?(?:\?.*)?$/, "").toLowerCase();
    switch (path) {
      case "":
        res.writeHead(200, { "Content-Type": "text/plain" });
        res.end("Homepage");
        break;
      case "/about":
        res.writeHead(200, { "Content-Type": "text/plain" });
        res.end("About");
        break;
      default:
        res.writeHead(404, { "Content-Type": "text/plain" });
        res.end("Not Found");
        break;
    }
  })
  .listen(3000);
console.log("Server Started on localhost:3000");
console.log("press Ctrl^C to terminate...");
