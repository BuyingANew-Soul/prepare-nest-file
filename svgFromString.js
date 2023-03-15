// returns a window with a document and an svg root node
const { createSVGWindow } = require('svgdom')
const window = createSVGWindow()
const document = window.document
const { SVG, registerWindow } = require('@svgdotjs/svg.js')
const setSizeInfoToID = require('./utils');
const {svgFromFile, readAllSvgs, writeSvg} = require('./readingSvg');

// Alternatively you can import the functions itself and use them
const {setFontDir, setFontFamilyMappings, preloadFonts} = require('svgdom')
setFontDir('./fonts')
setFontFamilyMappings({'Arial': 'arial.ttf'},{'Times New Roman': 'times new roman.ttf'},{'Calibri': 'calibri.ttf'},{'Roboto': 'roboto.ttf'},{'Poppins': 'poppins.ttf'})
preloadFonts()

// register window and document
registerWindow(window, document);


// remove svgjs:data attribute fromt he text tags
const removeSVGJSdata = (svgNode)=>{
    if(svgNode.tagName == 'text'){
        console.log("found text element")
        svgNode.removeAttributeNS(SVG.svgjs, 'svgjs:data')
        svgNode.removeAttribute('svgjs:data')
        console.log("Yes, it has svgjs:data");
        console.log(svgNode.getAttribute("svgjs:data"))
        console.log(svgNode)
        return;
        
    }

    if(svgNode.childNodes.length >0){
        svgNode.childNodes.forEach(child => {
            return removeSVGJSdata(child)
        });
    }
}


const svgFromString = (string) => {
    
    const draw = SVG(document.documentElement);
    var svg = draw.svg(string);
    // removing svgjs:data attributes
    removeSVGJSdata(svg.node);
    return [svg,draw];
        
};

module.exports = { svgFromString, SVG, document, removeSVGJSdata };