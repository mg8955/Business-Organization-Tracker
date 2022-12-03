const inquirer = require('inquirer');
const cTable = require('console.table');
const db = require('./config/connection');
const menuPrompt = require('./prompts');

const initMenu = async() => {
 const response = await inquirer.prompt(menuPrompt)
    // .then((response) => {
    //     switch (response.menuPrompt)
    // });
}

const initApp = async() => {
    console.log('Welcome to the Business Organization Tracker app!');
    console.log('Please select an option below.');

    initMenu();
}

initApp();