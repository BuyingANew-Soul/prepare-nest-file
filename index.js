const {svgFromFile, readAllSvgs, writeSvg} = require('./readingSvg');
const { svgFromString } = require('./svgFromString');
const { getElements } = require('./utils');


// elements and quantity info
// this is specific to every size
var bin_size = [4000, 5000];   // [width, height]
var elementAndQuantity = {"Elastic_Band_1_":5, "Collar_1_":10, "Pocket_1_":7, "Right_sleeve_1_":5}

// read all the svg from file as string and put them in a list
var svgstring = svgFromFile('svgs/single.svg') 
//console.log(svgstring.length)

// create SVG document from the strings
var svg = svgFromString(svgstring);
//console.log(svg.svg())

// separate the elements for nesting
// the elementAndQuantity list have the dictionaries of element and corresponding quantity
var elements = getElements(elementAndQuantity, svg, bin_size);
//console.log(elements);

//var dr = SVG(document.documentElement);
svg.clear()

var newsvg = svgFromString(elements)
newsvg.width(bin_size[0]);
newsvg.height(bin_size[1]);
newsvg.viewbox(0,0,bin_size[0],bin_size[1]);


writeSvg(newsvg.svg(), "svgs/single_output.svg");




