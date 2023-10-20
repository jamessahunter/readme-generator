// Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./generateMarkdown');


// an array of questions for user input
const questions = [
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
      choices: ['MIT','The Unlicense','BSD 2-Clause License'],   
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
];

// function to write README file
function writeToFile(fileName, data) {
    // writes to the and calls the generate markdown function
    fs.writeFile(fileName,generateMarkdown(data), (err) =>
    // checks for an error if an error is found it gets logged to the console
    // else it console logs the that the readme has been generated
    err ? console.error(err) : console.log("Your README has been generated"));
}

//function to initialize app
function init() {
  // calls the prompt user function
    promptUser();

}

// Function call to initialize app
function promptUser() {
  //uses the library inquirer to prompt the user
inquirer
  .prompt(questions)
  .then((response) => {
    //calls the write to file function
    writeToFile("READMEnew.md",response)
  }
  );
}



init();