function shapeSelection(shape) {
    if(shape === "Circle")
        return `<circle cx="150" cy="100" r="80"`
    else if (shape === "Square")
        return `<rect x="50" y="10" width="200" height="200"`
    else if (shape === "Triangle")
        return `<polygon points="150, 0 0, 200 300, 200"`
}


function generateSvg({text, color, background, shape}) {
    return `<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="300" height="200">

    ${shapeSelection(shape)} fill="${background}"/>
  
    <text x="150" y="120" font-size="60" text-anchor="middle" fill="${color}">${text}</text>
  
  </svg>`
}

module.exports = generateSvg