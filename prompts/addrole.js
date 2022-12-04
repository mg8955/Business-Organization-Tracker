const addRolePrompt = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the role title?'
      },
      {
        type: 'input',
        name: 'salary',
        message: 'What role salary? (must be an INT)'
      },
      {
        type: 'list',
        name: 'department',
        message: 'Please select which department the role belongs to:',
        choices: [
            'Sales',
            'Engineering',
            "Customer Support"
        ]
      }
]

module.exports = addRolePrompt;