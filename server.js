const express = require('express');
const app = express();
const router = express.Router();
const db = require("./db/schema.sql")
const sequelize = require('./config/connection');

router.get('/employees', (req, res) => {
  db.query('SELECT * FROM employees', (err, results) => {
    if (err) throw err;
    res.json(results);
  });
});

router.post('/employees', (req, res) => {
  const { first_name, last_name, department, title, salary, manager } = req.body;
  const query = `INSERT INTO employees (first_name, last_name, department, title, salary, manager) VALUES (?, ?, ?, ?, ?, ?)`;
  const values = [first_name, last_name, department, title, salary, manager];

  db.query(query, values, (err, results) => {
    if (err) throw err;
    res.json({ message: 'Employee added successfully!' });
  });
});

router.get('/departments', (req, res) => {
  db.query('SELECT * FROM departments', (err, results) => {
    if (err) throw err;
    res.json(results);
  });
});

router.post('/departments', (req, res) => {
  const { name } = req.body;
  const query = `INSERT INTO departments (name) VALUES (?)`;
  const values = [name];

  db.query(query, values, (err, results) => {
    if (err) throw err;
    res.json({ message: 'Department added successfully!' });
  });
});

app.use(express.json());
app.use('/api', router);

app.listen(3001, () => {
  console.log('Server started on port 3001');
});

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log('Now listening'));
});
