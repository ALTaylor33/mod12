const express = require('express');
const router = express.Router();
const db = require("../../db");
const mysql2 = require('mysql2');
const axios = require('axios');
const inquirer = require('inquirer');
const sequelize = require('../config/connection');
0
router.get('/', (req, res) => {
  db.query('SELECT * FROM employees', (err, results) => {
    if (err) throw err;
    res.json(results);
  });
});

function start() {
  const questions = [
    {
      type: 'list',
      name: 'employee_database',
      message: 'What would you like to do?',
      choices: ['add employee', 'update employee title', 'view all titles', 'add a title', 'view all departments', 'add a department']
    },
  ];

  inquirer.prompt(questions).then(answers => {
    const action = answers.employee_database;

    switch (action) {
      case 'add employee':
        addEmployee();
        break;

      case 'update employee title':
        updateEmployeeTitle();
        break;

      case 'view all titles':
        connection.query('SELECT * FROM titles', function (error, results, fields) {
          if (error) throw error;
          console.log(results);
          start();
        });
        break;

      case 'add a title':
        addTitle();
        break;

      case 'view all departments':
        connection.query('SELECT * FROM departments', function (error, results, fields) {
          if (error) throw error;
          console.log(results);
          start();
        });
        break;

      case 'add a department':
        addDepartment();
        break;

      default:
        console.log('Invalid choice');
        start();
    }
  });
}

function addEmployee() {
  const questions = [
    {
      type: 'input',
      name: 'first_name',
      message: "Employee's first name:"
    },
    {
      type: 'input',
      name: 'last_name',
      message: "Employee's last name:"
    },
    {
      type: 'input',
      name: 'department',
      message: "Employee's department:"
    },
    {
      type: 'input',
      name: 'title',
      message: "Employee's title:"
    },
    {
      type: 'input',
      name: 'salary',
      message: "Employee's salary:"
    },
    {
      type: 'input',
      name: 'manager',
      message: "Employee's manager:"
    }
  ];

  inquirer.prompt(questions).then(answers => {
    axios.post('http://localhost:3001/api/employees', answers)
      .then(response => {
        console.log(response.data.message);
        start();
      })
      .catch(error => {
        console.error(error);
        start();
      });
  });
}

function addDepartment() {
  const questions = [
    {
      type: 'input',
      name: 'name',
      message: 'Department name:'
    }
  ];

  inquirer.prompt(questions).then(answers => {
    axios.post('http://localhost:3001/api/departments', answers)
      .then(response => {
        console.log(response.data.message);
        start();
      })
      .catch(error => {
        console.error(error);
        start();
      });
  });
}

function updateEmployeeTitle() { 
  const questions = [
    {
      type: 'input',
      name: 'first_name',
      message: "Employee's first name:"
    },
    {
      type: 'input',
      name: 'last_name',
      message: "Employee's last name:"
    },
    {
      type: 'input',
      name: 'title',
      message: "Employee's new title:"
    }
  ];

  inquirer.prompt(questions).then(answers => {
    const query = `UPDATE employees SET title = '${answers.title}' WHERE first_name = '${answers.first_name}' AND last_name = '${answers.last_name}'`;

    connection.query(query, function (error, results, fields) {
      if (error) throw error;
      start();
    });
  });
}

start();

module.exports = router;
