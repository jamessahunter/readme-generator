// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  switch(license){
    case "MIT":
      Fs.writeFile("![GitHub License]")
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  switch(license){
    case "MIT":
      Fs.writeFile("(link to license)")
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  switch(license){
    case "MIT":
      Fs.writeFile("License info")
  }
}
console.log("outside");
// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  console.log("works");
  return `# ${data.title}
  ## ${data.description}
  ## ${data.install}
  ## ${data.usage}
  ## ${data.test}

`;
}


module.exports = generateMarkdown;
