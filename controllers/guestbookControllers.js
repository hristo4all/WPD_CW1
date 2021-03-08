const guestbookDAO = require("../models/guestbookModel");
const db = new guestbookDAO();

exports.entries_list = function (req, res) {
  res.send("<h1>Not yet implemented: show a list of guest bookentries.</h1>");
  db.init();
  db.getAllEntries();
};
exports.peters_entries = function (req, res) {
  res.send("<h1>Processing Peter's Entries, see terminal</h1>");
  db.getPetersEntries();
};
exports.landing_page = function (req, res) {
  res.send("<h1>Welcome to my Application.</h1>");
};
exports.new_entry = function (req, res) {
  res.redirect("/newEntry.html");
};
