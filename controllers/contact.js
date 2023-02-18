const { db } = require("../db");

const getContacts = (req, res) => {
  const q = "SELECT * FROM contacts";

  db.query(q, (err, data) => {
    if (err) {
      console.log(err);
      return res.json(err);
    }
    return res.json(data);
  });
};

const addContact = (req, res) => {
  const q = "INSERT INTO contacts(`name`, `email`, `comment`) VALUES (?)";

  const values = [req.body.name, req.body.email, req.body.comment];

  db.query(q, [values], (err, data) => {
    if (err) return res.status(500).send(err);
    return res.json("We will contact you back shortly");
  });
};

module.exports = { getContacts, addContact };
