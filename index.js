const express = require("express");
const mustache = require("mustache-express");
const path = require("path");
const app = express();
const public = path.join(__dirname, "public");

app.engine("mustache", mustache());
app.set("view engine", "mustache");

app.use(express.static(public));

const router = require("./routes/guestbookRoutes");
app.use("/", router);

app.get("/about", function (req, res) {
  res.sendFile(path.join(public, "about.html"));
});

app.listen(3000, () => {
  console.log("Server started on port 3000. Ctrl^c to quit.");
});
