const {
    addDepartmentPrompt,
    addEmployeePrompt,
    addRolePrompt,
    updateEmployeePrompt
} = require('../prompts');

const addRole = async() => {
    const response = await inquirer.prompt(addRolePrompt)
    const sql = `INSERT INTO role (title, salary, department_id)
    VALUES (?,?,?)`;
    const params = [response.title, response.salary, response.department];
  
    db.query(sql, params, function (err, response) {
      console.log("");
      console.table(response);
    });
  }
  
const addDepartment = async() => {
    const response = await inquirer.prompt(addDepartmentPrompt)
    const sql = `INSERT INTO department (name)
    VALUES (?)`;
    const params = [response.name];
  
    db.query(sql, params, function (err, response) {
      console.log("");
      console.table(response);
    });
  }
  
const addEmployee = async() => {
    const response = await inquirer.prompt(addEmployeePrompt)
    const sql = `INSERT INTO employee (first_name, last_name, role_id, manager_id)
    VALUES (?,?,?,?)`;
    const params = [response.first_name, response.last_name, response.role_id, response.manager_id];
  
    db.query(sql, params, function (err, response) {
      console.log("");
      console.table(response);
    });
  }
  
  const selectEmployee = async() => {
    const response = await inquirer.prompt(chooseEmployeeQuestion);
  
    db.query('SELECT role.id, role.title FROM role', function (err, response) {
            console.log("");
            console.table(results);
          });
    
    updateEmployeeRole(response.employee_id);
  }
  
  const updateEmployeeRole = async(employeeID) => {
    const response = await inquirer.prompt(updateEmployeeRoleQuestion)
    const sql = `UPDATE employee SET role_id = ${response.role_id}
    WHERE id = ${employeeID}`;
  
    db.query(sql, function (err, response) {
      console.log("");
      console.table(response);
    });
  }
  