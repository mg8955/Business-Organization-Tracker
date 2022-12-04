const inquirer = require('inquirer');
const db = require('../config/connection');
const cTable = require('console.table');
const initMenu = require('../server.js');

const {
    addDepartmentPrompt,
    addEmployeePrompt,
    addRolePrompt,
    updateEmployeePrompt
} = require('../prompts');

const showRoles = async() => {
    db.query('SELECT * FROM roles', (err, results) => {
        console.log('\n');
        console.table(results);
      });
}

const showAllDepartments = async() => {
    db.query('SELECT * FROM departments', (err, results) => {
        console.log('\n');
        console.table(results);
    });
}

const showAllEmployees = async() => {
    db.query('SELECT * FROM employees', (err, results) => {
        console.log('\n');
        console.table(results);
    });
}
const addRole = async() => {
    const response = await inquirer.prompt(addRolePrompt)
    const sql = `INSERT INTO roles (title, salary)
    VALUES (?,?,?)`;
    const params = [response.title, response.salary];
    console.log(params);
    db.query(sql, params, (err, response) => {
        console.log('\n');
        console.table(response);
    });
    initMenu;
  }
  
const addDepartment = async() => {
    const response = await inquirer.prompt(addDepartmentPrompt)
    const sql = `INSERT INTO departments (name)
    VALUES (?)`;
    const params = [response.name];
  
    db.query(sql, params, (err, response) => {
        console.log('\n');
        console.table(response);
    });
    initMenu;
  }
  
const addEmployee = async() => {
    const response = await inquirer.prompt(addEmployeePrompt)
    const sql = `INSERT INTO employees (first_name, last_name, role_id, manager_id)
    VALUES (?,?,?,?)`;
    const params = [response.first_name, response.last_name, response.role_id, response.manager_id];
  
    db.query(sql, params, (err, response) => {
        console.log('\n');
        console.table(response);
    });
    initMenu;
  }

  const updateEmployee = async() => {
    const response = await inquirer.prompt(updateEmployeePrompt)
    const sql = `UPDATE employee SET role_id = ${response.role_id}
    WHERE id = ${employeeID}`;
  
    db.query(sql, (err, response) => {
        console.log('\n');
        console.table(response);
    });
    initMenu;
  }

module.exports = {
    showRoles,
    showAllDepartments,
    showAllEmployees,
    addRole,
    addDepartment,
    addEmployee,
    updateEmployee
};