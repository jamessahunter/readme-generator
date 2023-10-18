const inquirer = require('inquirer');

inquirer
  .prompt([
    {
      type: 'input',
      message: 'What is the title for the README?',
      name: 'title',
    },
    {
      type: 'input',
      message: 'Write a description for your project',
      name: 'description',
    },
    {
      type: 'input',
      message: 'Add any installation instructions',
      name: 'install',
    },
    {
        type: 'input',
        message: 'Add any usage information',
        name: 'usage',
    },
    {
        type: 'input',
        message: 'Add any contribution guidlines',
        name: 'contribution',
    },
    {
        type: 'input',
        message: 'Add any test instructions',
        name: 'test',
    },
    {
        type: 'list',
        message: 'Select the license you would like to use',
        name: 'license',
        choices: ['MIT','ISC','Educational Community License v2.0'],   
    },
    {
        type: 'input',
        message: 'Please enter your GitHub username',
        name: 'username',
    },
    {
        type: 'input',
        message: 'Please enter your email',
        name: 'email',
    },
  ])
  .then((response) => {
    console.log(response)
  }
  );
