const inquirer = require('inquirer');
const db = require('./config/connection');
const prompt = require('./prompts');
const {
    showRoles,
    showAllDepartments,
    addRole,
    addDepartment,
    addEmployee,
    updateEmployee,
    showAllEmployees
    } = require('./db/query');

const initMenu = async() => {
    const response = await inquirer.prompt(prompt.menuPrompt)
    .then((response) => {
        console.log(response.mainMenuSelection);
        switch (response.mainMenuSelection) {
            case "Add Role" :
                addRole();
                break;

            case "Add Department" :
                addDepartment();
                break;

            case "Show all Roles" :
                showRoles();
                initMenu();
                break;

            case "Show all Departments" :
                showAllDepartments();
                initMenu();
                break;

            case "Show all Employees" :
                showAllEmployees();
                initMenu();
                break;

            case "Add Employee" :
                addEmployee();
                break;

            case "Update Employee" :
                updateEmployee();
                break;
        }
    });
}

const initApp = async() => {
    console.log('Welcome to the Business Organization Tracker app!');
    console.log('Please select an option below.');

    initMenu();
}

initApp();

module.exports = initMenu;