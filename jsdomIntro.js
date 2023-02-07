const jsdom = require("jsdom");
const { JSDOM } = jsdom;
const {svgFromFile} = require('./readingSvg');

var svgstring = svgFromFile('./svgs/single.svg');

const svgEl = JSDOM.fragment(svgstring).firstElementChild;
// console.log(dom.window.document); // "Hello world"
var options = {contentType: 'image/svg+xml'};
let selector = `[id]`;
// JSDOM.fromFile("./svgs/single.svg", options).then(dom => {
//   console.log(dom.find(selector));
// });
// console.log(svgEl.childNodes.length)

// for (var i=0; i<svgEl.children[0].children.length; i++){
//     console.log(svgEl.children[0].children[i].tagName);
// }


const dom = new JSDOM(svgstring);
console.log(dom.window.document.find(selector)); // "Hello world"

//const element = svgEl.childNodes.find(selector);