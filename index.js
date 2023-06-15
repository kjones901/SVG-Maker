const { prompt } = require("inquirer");
const fs = require("fs");
const generateSVG = require("./lib/generate");
const questions = require('./lib/questions')

function writeToFile(input) {
    fs.writeFile("./dist/logo.svg", generateSVG(input), (err) => 
    err ? console.log(err) : console.log("SVG Created")
    );
}

async function init() {
    const answers = await prompt(questions)
    writeToFile(answers);
}

init();
