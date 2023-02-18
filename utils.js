const svgFromString = require('./svgFromString');
const {svgFromFile, readAllSvgs} = require('./readingSvg');


const getElements = (dictionary, svg, bin_size) => {
    
    
    var total_height_previous_elmnts = 0;
    var total_width_of_current_row = 0    
    var body = '';

    console.log(svg.width());
    console.log(svg.height());
    for (const [key, value] of Object.entries(dictionary)) {
        let selector = `[id*=${key} i]`;
        const element = svg.find(selector);

        // if there is a transform attribute in the element remove it
        element.attr("transform", null);
        console.log(element.nextSibling);

        //const element = element.findOne(`[id*="element" i]`)
        // console.log(element.svg());
        console.log(`Total priv height: ${total_height_previous_elmnts}`);
        console.log(`current element height: ${element.height()[0]}`)
        if (element){
            console.log(`Current Element: ${element[0].node.tagName} --- id: ${element[0].node.getAttribute("id")}`)
            if (value >1){
                
                var id = element.attr("id")[0];

                // children of the current element
                var children = element[0].node.children;
                console.log(`Child nodes: ${element[0].node.children.length}`);
               
                // set loop variable j which will control the new row creation
                var j = 1;
                
                for (var i=1; i<=value; i++){
                    
                    new_id = id+i.toString();
                    //new_element.attr("id", new_id);

                    element.attr("id", new_id);
                    // need to change the ids of the child nodes also
                    children.forEach(child => {
                        var existing_id = child.getAttribute("id");
                        if (!existing_id){
                            existing_id = new_id + "extra";
                        }
                        if (i === 1){
                            var nid = existing_id + "_" + i.toString();    
                        }else{
                            var nid = existing_id.slice(0,-2) + "_" + i.toString();    
                        } 
                        child.setAttribute("id", nid);
                    });     
                    
                    // in case of bibs the width, height, bbox shows 0 if I take the outer <g>
                    // so if I get zero on any elemnt, I am taking the "element" from inside the <g>
                    var w = element.width()[0]
                    
                    total_width_of_current_row += w;
                    
                    // check if the width exceeds the bin width
                    
                    if ( (bin_size[0]-total_width_of_current_row) < 0 ){
                        console.log(`***total width of current row: ${total_width_of_current_row}`);
                        console.log(`***bin width: ${bin_size[0]}`);
                        total_width_of_current_row = 0;

                        // set the element x coordinate to 0
                        // i.e start a new row
                        j = 1;
                        // add the current element height to the total height count
                        // so that the new row starts from below the previous
                        total_height_previous_elmnts += element.height()[0];
                        
                    }
                    
                    //add translation for element except the first one
                    if (j != 1){   
                        //new_element.x((i-1)*w);
                        //element[0].x((j-1)*w);
                        element.move((j-1)*w, total_height_previous_elmnts);
                    }else{
                        //new_element.x(0);
                        //element[0].x(0);
                        element.move(0, total_height_previous_elmnts);
                    }
                    j += 1;
                    // placement of the element in y
                    //element[0].y(total_height_previous_elmnts);


                    console.log(element[0].x(), element[0].y());
                    console.log(element[0].node.tagName);
                    console.log(element.bbox());
                    body += element[0].svg();
                    
                }
            }else{
                
                body += element[0].svg();
            }
        }
        total_height_previous_elmnts += element.height()[0];
    };
   
    // elements.forEach(element => {
    //     console.log(element.svg());
    // });
    //return elements;
    return body;
};



const printElementIDs = (svg) => {
    
    let selector = '[id]';
    const elements = svg.find(selector);
      
    console.log(`\nNumber of elements: ${elements.length}`)
    elements.forEach(element => {
        console.log(element.attr("id"));
    });
};


const setSizeInfoToID = (svg, size) => {
    let selector = '[id]';
    const elements = svg.find(selector);
    elements.forEach(element => {
        var new_id = size + "_" + element.attr("id");
        element.attr("id", new_id)
    });
}


module.exports = { getElements, printElementIDs, setSizeInfoToID };
