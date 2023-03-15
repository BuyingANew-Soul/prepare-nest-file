const {svgFromFile, readAllSvgs, writeSvg} = require('./readingSvg');
const { svgFromString, SVG, document, removeSVGJSdata } = require('./svgFromString');
//const { getElements, printElementIDs, setSizeInfoToID } = require('./utils');
const { getElements, printElementIDs, setSizeInfoToID } = require('./master_utils');
const {creteGroups} = require('./groupElements');


// elements and quantity info
// this is specific to every size
var quantity = 5;
var bin_size = [1000, 2000];   // [width, height]
var elementAndQuantity = {"Elastic_Band":quantity}

// read all the svg from file as string and put them in a list
var svgstring = svgFromFile('svgs/testsvgs/Jersey/large.svg') 
//console.log(svgstring.length)

// create SVG document from the strings
var [svg,draw] = svgFromString(svgstring);
//console.log(svg.svg())
creteGroups(svg.node, draw);
removeSVGJSdata(svg.node);
// writeSvg(svg.svg(), "svgs/bib/svgjsdataremoved.svg");
//console.log(svg.svg())
// separate the elements for nesting
// the elementAndQuantity list have the dictionaries of element and corresponding quantity
//setSizeInfoToID(svg, "XL");
var elements = getElements(elementAndQuantity, svg, bin_size);
//console.log(elements);

//var dr = SVG(document.documentElement);

svg.clear()
//console.log(svg.svg())
//var newsvg = dr.svg(elements);
console.log("\n\n\n\n")

//elements = elements.replace( /svg.*(?=quot;}"><)/, "")
//console.log(elements);
var [newsvg,drw] = svgFromString(elements)
newsvg.width(bin_size[0]);
newsvg.height(bin_size[1])
newsvg.viewbox(0,0,bin_size[0],bin_size[1])


writeSvg(newsvg.svg(), "svgs/bib/grouped.svg");




