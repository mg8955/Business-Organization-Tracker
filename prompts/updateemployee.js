const updateEmployeePrompt = [
    {
        type: 'list',
        name: 'newRole',
        message: 'Please select your employee\'s new role.',
        choices: [
            'SDR',
            'Sales Manager',
            'Engineer',
            'Lead Engineer',
            'CSR',
            'CSR Manager'
        ]
    }
]

module.exports = updateEmployeePrompt;