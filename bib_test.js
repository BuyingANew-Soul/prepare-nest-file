const fs = require('fs');
const { createSVGWindow } = require('svgdom')
const window = createSVGWindow()
const document = window.document
const { SVG, registerWindow } = require('@svgdotjs/svg.js')
//const {svgFromFile, readAllSvgs, writeSvg} = require('./readingSvg');


const svgFromFile = (path) => {
    try {
        const svgString = fs.readFileSync(path, 'utf8');
        return svgString;
    } catch (err) {
        console.error(err);
    }
    
};


// register window and document
registerWindow(window, document);

const svgFromString = (string) => {
    
    const draw = SVG(document.documentElement);
    var svg = draw.svg(string);
    return svg;
        
};


const writeSvg = (svg, name) => {
   
    fs.writeFile(name, svg, err => {
    if (err) {
        console.error(err);
    }
    // file written successfully
    });
};



var svgString = svgFromFile("svgs/test svgs/simple.svg");
var svg = svgFromString(svgString);
//console.log(svg.svg())

// getting the specific element
let selector = `[id*="P8_5_"]`;
const element = svg.find(selector);
element.move(10,10);

writeSvg(svg.svg(), 'svgs/new.svg');

