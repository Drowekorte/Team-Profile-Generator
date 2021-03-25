// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string

const badges = {
  "APACHE": `![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)`,
  "IBM": '![License: IPL 1.0](https://img.shields.io/badge/License-IPL%201.0-blue.svg)',
  "MIT": '![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)',
  "Mozilla": '![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)'
}

function renderLicenseBadge(license) {

  return badges[license];

};

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
const links = {
  "APACHE": `https://opensource.org/licenses/Apache-2.0`,
  "IBM": `https://opensource.org/licenses/IPL-1.0`,
  "MIT": `https://opensource.org/licenses/MIT`,
  "Mozilla": `https://opensource.org/licenses/MPL-2.0`

}



function renderLicenseLink(license) {

  return links[license];

};


// TODO: Create a function to generate markdown for README
function generateHTML(data) {
  return `
# ${data.title}

${renderLicenseBadge(data.type)}

## Description 

${data.description}


## Table of Contents 
* [Installation](#installation)
​
* [Usage](#usage)
​
* [License](#license)
​
* [Contributions](#contributions)
​
* [Tests](#tests)
​
* [Questions](#questions)

<br>

## License 

This project uses the ${data.license} license.

<br>

## <a name="installation"></a> Installation

To install necessary dependencies, run the following command:

\`\`\`
${data.installation}
\`\`\`

<br>

## <a name="license"></a>License

${renderLicenseLink(data.license)}

<br>

## <a name="contributions"></a>Contributions

${data.contributions}

<br>

## <a name="tests"></a>Tests

To run tests, run the following command:

\`\`\`
${data.tests}
\`\`\`

<br>

## <a name="questions"></a>Questions

If you have any questions about the repo, open an issue or contact me directly at ${data.email} You can find more of my work at ${data.username}.


`};


module.exports = generateMarkdown
module.exports = generateHTML