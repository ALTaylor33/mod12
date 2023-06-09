CREATE DATABASE employee_db;

USE employee_db;

CREATE TABLE employees (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  first_name VARCHAR(30) NOT NULL,
  last_name VARCHAR(30) NOT NULL,
  department VARCHAR(30) NOT NULL,
  title VARCHAR(30) NOT NULL,
  salary DECIMAL(10,2),
  manager_first_name VARCHAR(30),
  manager_last_name VARCHAR(30)
);

CREATE TABLE departments (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(30) NOT NULL
);
