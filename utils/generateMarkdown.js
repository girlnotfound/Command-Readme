// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  // checks if the license chosen is not 'None'
  if (license !== 'None') {
    // returns a markdown string for the license badge image
    return `![License: ${license}](https://img.shields.io/badge/License-${license}-blue.svg)`;
  }
  // returns an empty string if there is no license
  return '';
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license !== 'None') {
    // returns a markdown string with a link to the license section
    return `\n* [License](#license)\n`;
  }
  return '';
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
   if (license !== 'None') {
    // returns a string if there is no license
    return `## License\n\nThis project is licensed under the ${license} license.`;
  }
  return '';
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  // returns a markdown string using the data provided
  return `# ${data.title}

${renderLicenseBadge(data.license)}

## Description
${data.description}

## Table of Contents

* [Installation](#installation)
* [Usage](#usage)
* [Contributing](#contributing)
* [Tests](#tests)
* [Questions](#questions)
${renderLicenseLink(data.license)}

## Installation
${data.installation}

## Usage
${data.usage}

## Credits
${data.credits}

## License
This project is licensed under the ${data.license} license.

## Features
${data.features}

## Contributions
${data.contributions}

## Tests
${data.tests}

## Questions
For any questions, please contact me via:

- GitHub: [${data.github}](https://github.com/${data.github})
- Email: ${data.email}
`;
}

// exports the generateMarkdown function so it can be used in other files
module.exports = generateMarkdown;
