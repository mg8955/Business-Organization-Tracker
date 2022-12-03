const menuPrompt = [
    {
        type: 'list',
        name: 'startMenuQuestion',
        message: 'What would you like to do?',
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