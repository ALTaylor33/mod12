const express = require('express');
const router = express.Router();
const { Employee, Title, Department } = require('./models');

router.get('/', async (req, res) => {
  try {
    const employees = await Employee.findAll({
      include: [{ model: Title }, { model: Department }]
    });
    res.status(200).json(employees);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.post('/', async (req, res) => {
  try {
    const employee = await Employee.create(req.body);
    res.status(200).json({ message: 'Employee created!', employee });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.put('/:id', async (req, res) => {
  try {
    const employee = await Employee.update(req.body, {
      where: { id: req.params.id }
    });
    if (!employee[0]) {
      res.status(404).json({ message: 'No employee found with this id!' });
      return;
    }
    res.status(200).json({ message: 'Employee updated!' });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const employee = await Employee.destroy({
      where: { id: req.params.id }
    });
    if (!employee) {
      res.status(404).json({ message: 'No employee found with this id!' });
      return;
    }
    res.status(200).json({ message: 'Employee deleted!' });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

module.exports = router;