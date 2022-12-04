const menuPrompt = [
    {
        type: 'list',
        name: 'mainMenuSelection',
        message: 'Main Menu - Available choices:',
        choices: [
            "Show all Roles",
            "Add Role",
            "Show all Departments",
            "Add Department",
            "Show all Employees",
            "Add Employee",
            "Update Employee role"
        ]
    }
]

module.exports = menuPrompt;