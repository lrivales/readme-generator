// const generateMitLicense = require('./utils/generateMitLicense.js');
// const generateGnuLicense = require('./utils/generateGnuLicense.js');

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  switch (license) {
    case 'MIT':
      licenseBadge = '[![License: MIT]';
      return licenseBadge;
    case 'GNU':
      licenseBadge = '[![License: GPL v3]';
      return licenseBadge;
    default:
      licenseBadge = '';
      return licenseBadge;
  }
};

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  switch (license) {
    case 'MIT':
      licenseLink = '(https://img.shields.io/badge/License-MIT-yellow.svg)]';
      return licenseLink;
    case 'GNU':
      licenseLink = '(https://img.shields.io/badge/License-GPLv3-blue.svg)]';
      return licenseLink;
    default:
      licenseLink = '';
      return licenseLink;
  }
};

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  switch (license) {
    case 'MIT':
      licenseSection = '(https://opensource.org/licenses/MIT)';
      return licenseSection;
    case 'GNU':
      licenseSection = '(https://www.gnu.org/licenses/gpl-3.0)';
      return licenseSection;
    default:
      licenseSection = 'None';
      return licenseSection;
  }
};

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.title} ${renderLicenseBadge(data.license)}${renderLicenseLink(data.license)}

  ## Description
  ${data.description}

  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage}

  ## Contributing
  ${data.contributing}

  ## Tests
  ${data.tests}

  ## License
  ${renderLicenseSection(data.license)}
  
  ## Questions
  https://github.com/${data.github}

  Please email ${data.email} for questions.
`;
}

module.exports = generateMarkdown;
