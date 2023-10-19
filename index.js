const inquirer = require('inquirer');
const fs = require('fs');
// const generate = require('./generateMarkdown');
const generateMarkdown = require('./generateMarkdown');
// TODO: Include packages needed for this application

// TODO: Create an array of questions for user input
const questions = [];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName,generateMarkdown(data), (err) =>
    err ? console.error(err) : console.log("Your README has been generated"));
}

// TODO: Create a function to initialize app
function init() {
    promptUser();

}

// Function call to initialize app


function promptUser() {
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
    console.log(response);
    writeToFile("README.md.new",response)
    // console.log(response.title);
    // console.log("after");
    // console.log(generate.generateMarkdown);
  }
  );
}
//   var cb = cb =>  generate.generateMarkdown(data)
// generate


init();