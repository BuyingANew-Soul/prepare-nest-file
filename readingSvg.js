const fs = require('fs');

const svgFromFile = (path) => {
    try {
        const svgString = fs.readFileSync(path, 'utf8');
        return svgString;
    } catch (err) {
        console.error(err);
    }
    
};


// we have 3 svg sizes to work with
// first need to read this three files
const readAllSvgs = (file_names) =>{
    var svgstrings = [];
    file_names.forEach(file => {
        svgstrings.push(svgFromFile(file));
    }); 
    return svgstrings;
}


const writeSvg = (svg, name) => {
   
    fs.writeFile(name, svg, err => {
    if (err) {
        console.error(err);
    }
    // file written successfully
    });
};


module.exports = {svgFromFile, readAllSvgs, writeSvg};




