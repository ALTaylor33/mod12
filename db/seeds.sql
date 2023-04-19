USE employee_db;

INSERT INTO departments (name) VALUES ('Sales');
INSERT INTO departments (name) VALUES ('Marketing');
INSERT INTO departments (name) VALUES ('Engineering');

INSERT INTO employees (first_name, last_name, department, title, salary, manager_first_name, manager_last_name) VALUES ('John', 'Doe', 'Sales', 'Sales Associate', 50000.00, 'Jane', 'Smith');
INSERT INTO employees (first_name, last_name, department, title, salary, manager_first_name, manager_last_name) VALUES ('Jane', 'Smith', 'Sales', 'Sales Manager', 80000.00, null, null);
INSERT INTO employees (first_name, last_name, department, title, salary, manager_first_name, manager_last_name) VALUES ('Mike', 'Johnson', 'Marketing', 'Marketing Coordinator', 45000.00, 'Lisa', 'Garcia');
INSERT INTO employees (first_name, last_name, department, title, salary, manager_first_name, manager_last_name) VALUES ('Lisa', 'Garcia', 'Marketing', 'Marketing Director', 90000.00, null, null);
INSERT INTO employees (first_name, last_name, department, title, salary, manager_first_name, manager_last_name) VALUES ('David', 'Lee', 'Engineering', 'Software Engineer', 75000.00, 'Sarah', 'Chen');
INSERT INTO employees (first_name, last_name, department, title, salary, manager_first_name, manager_last_name) VALUES ('Sarah', 'Chen', 'Engineering', 'Engineering Manager', 100000.00, null, null);
