const addEmployeePrompt = [
    {
        type: 'input',
        name: 'first_name',
        message: 'Please enter the employee\'s first name.'
      },
      {
        type: 'input',
        name: 'last_name',
        message: 'Please enter the employee\'s last name.'
      },
      {
        type: 'list',
        name: 'role',
        message: 'Please select the employee\'s role.',
        choices: [
            "SDR",
            "Sales Manager",
            "Engineer",
            "Lead Engineer",
            "CSR",
            "CSR Manager"
        ]
      },
      {
        type: 'input',
        name: 'manager',
        message: 'Who is the manager for the new employee? Please type the number only of the "id" section shown above! (i.e. "4")'
      }
]

module.exports = addEmployeePrompt;