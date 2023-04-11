// returns a window with a document and an svg root node
const { createSVGWindow } = require('svgdom')
const window = createSVGWindow()
const document = window.document
const { SVG, registerWindow } = require('@svgdotjs/svg.js')
const setSizeInfoToID = require('./utils');
const {svgFromFile, readAllSvgs, writeSvg} = require('./readingSvg');

// register window and document
registerWindow(window, document);

const svgFromString = (string) => {
    
    const draw = SVG(document.documentElement);
    var svg = draw.svg(string);
    return svg;
        
};

module.exports = { svgFromString };