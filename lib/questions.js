const questions = [
  { type: "input", name: "text", message: "What characters will your logo display? (Up to 3)"},
  { type: "input", name: "color", message: "What color will your logo text be?" },
  { type: "input", name: "background", message: "What color will your logo background be?" },
  {
    type: "list",
    name: "shape",
    message: "Select a shape for you logo:",
    choices: [
      "Circle",
      "Triangle",
      "Square",
    ],
  },
];

module.exports = questions;
