const express = require("express");
const path = require("path");
const app = express();
const nedb = require("nedb");

const db = new nedb({ filename: "student.db", autoload: true });
console.log("db created");

db.insert(
  {
    student: "Peter",
    grant: false,
    modules: [
      {
        name: "Programming",
        grade: 70,
      },
      {
        name: "Databases",
        grade: 70,
      },
      {
        name: "Networking",
        grade: 80,
      },
    ],
  },
  function (err, newDoc) {
    if (err) {
      console.log("error", err);
    } else {
      console.log("document inserted: ", newDoc);
    }
  }
);
db.find({ student: "Peter" }, function (err, docs) {
  if (err) {
    console.log("error");
  } else {
    console.log("documents retrieved:", docs);
  }
});

db.update(
  { student: "Peter", "modules.name": "Networking" },
  { $set: { "modules.grade": 80 } },
  {},
  function (err, numUp) {
    if (err) {
      console.log("error updating documents", err);
    } else {
      console.log(numUp, "document(s) updated");
    }
  }
);
/*
db.remove({ student: "Peter" }, {}, function (err, docsRem) {
  if (err) {
    console.log("error deleting document Peter");
  } else {
    console.log(docsRem, "document(s) removed from database");
  }
});

const public = path.join(__dirname, "public");
app.use(express.static(public));

app.get("/", function (req, res) {
  res.send("Hello! Welcome to my application.");
});

app.get("/guestbook", function (req, res) {
  res.send("<h1>Guestbook Messages</h1>");
});

app.get("/about", function (req, res) {
  res.sendFile(path.join(public, "about.html"));
});

app.use(function (req, res) {
  res.status(404);
  res.send("Oops! We didn't find what you are looking for.");
});

app.listen(3000, () => {
  console.log("Server started on port 3000. Ctrl^c to quit.");
});
/*
app.listen(3000, function() {
 console.log('Server started on port 3000. Ctrl^c to quit.');
})
*/
