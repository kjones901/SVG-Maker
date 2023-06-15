const questions = [
  { type: "input", name: "text", message: "What characters will your logo display? (Up to 3)"},
  { type: "input", name: "color", message: "What color will your logo text be?" },
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
  { type: "input", name: "background", message: "What color will your shape's background be?" },
];

module.exports = questions;
