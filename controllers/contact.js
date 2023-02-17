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

const getContact = (req, res) => {
  const q =
    "SELECT p.id, `username`, `title`, `desc`, p.img, u.img AS userImg, `cat`,`date` FROM users u JOIN posts p ON u.id = p.uid WHERE p.id = ? ";

  db.query(q, [req.params.id], (err, data) => {
    if (err) return res.status(500).json(err);

    return res.status(200).json(data[0]);
  });
};

const addContact = (req, res) => {
  const q = "INSERT INTO contacts(`name`, `email`, `comment`) VALUES (?)";

  const values = [req.body.name, req.body.email, req.body.comment];

  db.query(q, [values], (err, data) => {
    if (err) return res.send(err);
    return res.json(data);
  });
};

module.exports = { getContacts, getContact, addContact };
