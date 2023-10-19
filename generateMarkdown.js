// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  switch(license){
    case "MIT":
      return "![GitHub License]";
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  switch(license){
    case "MIT":
      return "(link to license)"
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  switch(license){
    case "MIT":
      return "License info"
  }
}
console.log("outside");
// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  
  console.log("works");
  return `# ${data.title}
  ${renderLicenseBadge(data.license)}
## Description
 ${data.description}

 ## Table of Contents

* [Installation](#installation)
* [Usage](#usage)
* [Credits](#credits)
* [License](#license)
## Intallation

 ${data.install}

## Usage

  ${data.usage}
 
## Test Instructions
  ${data.test}

`;
}


module.exports = generateMarkdown;
