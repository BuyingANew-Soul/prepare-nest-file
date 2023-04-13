const {svgFromFile, readAllSvgs, writeSvg} = require('./readingSvg');
const { svgFromString } = require('./svgFromString');
const { getElements } = require('./utils');


// elements and quantity info
// this is specific to every size
var bin_size = [4000, 7000];   // [width, height]
var elementAndQuantity = {"P8_5_":7, "P7_5_": 7}

// read all the svg from file as string and put them in a list
var svgstring = svgFromFile('svgs/test svgs/bib1.svg') 
//console.log(svgstring.length)

// create SVG document from the strings
var svg = svgFromString(svgstring);
//console.log(svg.svg())

// separate the elements for nesting
// the elementAndQuantity contains the element id and corresponding quantity
var elements = getElements(elementAndQuantity, svg, bin_size);
//console.log(elements);

svg.clear()
svg.width(bin_size[0]);
svg.height(bin_size[1]);
svg.viewbox(0,0,bin_size[0],bin_size[1]);

elements.forEach(element => {
    console.log(element.node.getAttribute("id"))
    svg.add(element);
});


writeSvg(svg.svg(), "svgs/bib1_output.svg");




