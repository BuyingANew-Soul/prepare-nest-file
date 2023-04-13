const fs = require('fs');
const { createSVGWindow } = require('svgdom')
const window = createSVGWindow()
const document = window.document
const { SVG, registerWindow } = require('@svgdotjs/svg.js')
//const {svgFromFile, readAllSvgs, writeSvg} = require('./readingSvg');

// register window and document
registerWindow(window, document);

const svgFromFile = (path) => {
    try {
        const svgString = fs.readFileSync(path, 'utf8');
        return svgString;
    } catch (err) {
        console.error(err);
    }
    
};


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



var svgString = svgFromFile("svgs/test svgs/bib1.svg");
var svg = svgFromString(svgString);
//console.log(svg.svg())

// getting the specific element
let selector = `[id*="P8_5_"]`;
const element = svg.findOne(selector);

var el = element.clone()
el.move(100,100);

svg.clear()
svg.width(4000);
svg.height(4000);
svg.viewbox(0,0,4000,4000);
svg.add(el);

writeSvg(svg.svg(), 'svgs/new.svg');

