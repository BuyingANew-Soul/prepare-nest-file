const {svgFromFile, readAllSvgs, writeSvg} = require('./readingSvg');
const { svgFromString, SVG, document } = require('./svgFromString');



function findRoot(svg){
    if(svg){			
        for(var i=0; i<svg.childNodes.length; i++){
            // svg document may start with comments or text nodes
            var child = svg.childNodes[i];
            if(child.tagName && child.tagName == 'svg'){
                return child;
            }
			}
		} else {
			throw new Error("Failed to parse SVG string");
		}
};


function findGContainsALlDesignsAndLogoTexts(node){
    
    // <svg>    <--- we are here at the root
    //     <g id="someid">  <--- aiming to find this at the first variable
    //         <g style>
    //         </g>
    //     </g>                                 .
    //     <g id="someid">contains image</g>     .
    //     <g id="someid">contains image</g>      . <--- and this nodes, which contains LOgo and Texts added to the svg
    //     <g id="someid">contains Text</g>       .
    // </svg>                                    .
   
    // according to the avobe structure the first <g> with id is the node which contains all the designs and outlines
    // so other than that every other <g> in this level is either logo or text container

    var level = 0
    var firstDesignContainer;
    var logoOrTextNodes = []; 
    node.children.forEach(element => {
            
            console.log(element.tagName)
            console.log(element.getAttribute("id"))
            if (element.tagName === "g" && element.hasAttribute("id")){
                
                if (level === 0){
                    console.log("this is the g which contains the style")
                    console.log(element.getAttribute("id"));
                    firstDesignContainer = element;
                    level += 1
                }
                else if( level > 0){
                    console.log("this is the g which contains the Logo or Text")
                    console.log(element.getAttribute("id"));
                    logoOrTextNodes.push(element);
                }
            }
        });
    return [firstDesignContainer, logoOrTextNodes];

};


function creteGroups(svg, draw){

    // find the root i.e <svg> node
    var rootNode = findRoot(svg);
    
    // find <g style> node
    var [firstDesignContainer, logoOrTextNodes] = findGContainsALlDesignsAndLogoTexts(rootNode);
    // console.log("\nHere are the nodes I need:")
    // console.log(firstDesignContainer.getAttribute("id"));
    // logoOrTextNodes.forEach(element => {
    //     console.log(element.getAttribute("id"));
    // });
    var gStyle = firstDesignContainer.children[0];
    
    // gStyle contains all the outline and designs in a flat structure like this
    // <g style>
    //         <g id="element1_outline"></g>
    //         <g id="element1_base"></g>
    //         <g id="element1_other"></g>
    //         <g id="element2_outline"></g>
    //         <g id="element2_base"></g>
    //         <g id="element2_other"></g>
    //         <g id="element2_ootheree"></g>
    //     </g>
    
    
    // first create the groups with the outline ids
    var outlines = [];
    gStyle.children.forEach(element => {
        if(element.hasAttribute("id")){
            if(element.getAttribute("id").toLowerCase().includes("outline")){
                outlines.push(element.getAttribute("id").toLowerCase()+"group");
            }
        }
    });
    console.log(outlines)


    // create groups and add elements to respective groups
    outlines.forEach(outline => {
        
        var outline_changed = false;
        var newGroup = draw.group()
        newGroup.attr("id", outline);

        gStyle.children.forEach(child => {
            if(child.hasAttribute("id")){
                if(child.getAttribute("id").toLowerCase().includes("outline") && !outline.includes(child.getAttribute("id").toLowerCase())){
                    outline_changed = true;
                    return;
                }

                // if(child.getAttribute("id").toLowerCase().includes("outline") && outline.includes(child.getAttribute("id").toLowerCase())){
                    
                //     newGroup.attr("transform", child.getAttribute("transform"));

                // }
            }
            if(outline_changed){
                return;
            }else{
                child.setAttribute("transform", "");
                newGroup.add(child);
            }
            
            
        });
        if(outline_changed){
            return;
        }
    });

    // //grouping logo and text separately
    // var new_group1 = draw.group()
    // new_group1.attr("id", "design_and_log")
    // logoOrTextNodes.forEach(element => {
    //     //console.log(element.getAttribute("id"))
    //     new_group1.add(element);
        
    // });
   //console.log(svg)
};




// // read all the svg from file as string and put them in a list
// var svgstring = svgFromFile('svgs/testsvgs/Jersey/large.svg') 
// //console.log(svgstring.length)

// // create SVG document from the strings
// var [svg,draw] = svgFromString(svgstring);

// //console.log(svg.node)

// creteGroups(svg.node, draw);

// writeSvg(svg.svg(), './testing-group.svg');

module.exports = {creteGroups};
