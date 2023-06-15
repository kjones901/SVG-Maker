const { prompt } = require("inquirer");
const { writeFile } = require("fs/promises");

async function init() {
    generateSVG();
}

init();
