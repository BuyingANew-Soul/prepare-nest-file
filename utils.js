const svgFromString = require('./svgFromString');


const setIDs = (original, cloned) => {
    cloned.node.setAttribute("id", original.node.getAttribute("id"));

    for (var i=0; i< original.node.children.length; i++){
        // console.log("from here")
        // console.log(original.node.children[0])
        if(original.node.children[i].hasAttribute("id")){
            cloned.node.children[i].setAttribute("id", original.node.children[i].getAttribute("id"));
        }
    }
};


const getElements = (dictionary, svg, bin_size) => {
    
    var total_height_previous_elmnts = 0;
    var total_width_of_current_row = 0    
    var body = [];

    console.log(svg.width());
    console.log(svg.height());
    for (const [key, value] of Object.entries(dictionary)) {
        let selector = `[id*=${key} i]`;
        const el = svg.findOne(selector);
        //console.log(svg.svg())
        //console.log(element.svg());

        const outline = el.findOne(`[id*="outline" i]`)
        //console.log(element);
        console.log(`Total priv height: ${total_height_previous_elmnts}`);
        console.log(`current element height: ${el.height()}`)
        if (el){
            console.log(`Current Element: ${el.node.tagName} --- id: ${el.node.getAttribute("id")}`)
            if (value >1){

               
                // set loop variable j which will control the new row creation
                var j = 1;
                
                for (var i=1; i<=value; i++){
                    
                    // cloning the element
                    const element = el.clone()
                    // set the ids to the cloned node
                    setIDs(el, element);
                    var id = element.attr("id");
                    console.log(`Original id: ${id}`)
                    new_id = id+i.toString();
                    console.log(`New id: ${new_id}`)
                    element.attr("id", new_id);

                    // children of the current element
                    var children = element.node.children;
                    console.log(`Child nodes: ${el.node.children.length}`);

                    // need to change the ids of the child nodes also
                    children.forEach(child => {
                        var existing_id = child.getAttribute("id");
                        if (!existing_id){
                            existing_id = new_id + "extra";
                        }
                        var nid = existing_id + "_" + i.toString(); 
                        child.setAttribute("id", nid);
                    });     
                    
                    // in case of bibs the width, height, bbox shows 0 if I take the outer <g>
                    // so if I get zero on any elemnt, I am taking the "outline" from inside the <g>
                    console.log("Width of the outline");
                    
                    var w = outline.width()
                    console.log(w)
                    total_width_of_current_row += w;
                    
                    // check if the width exceeds the bin width
                    
                    if ( (bin_size[0]-total_width_of_current_row) < w ){
                        console.log(`***total width of current row: ${total_width_of_current_row}`);
                        console.log(`***bin width: ${bin_size[0]}`);
                        total_width_of_current_row = 0;

                        // set the element x coordinate to 0
                        // i.e start a new row
                        j = 1;
                        // add the current element height to the total height count
                        // so that the new row starts from below the previous
                        console.log("Height of the outline");
                        console.log(outline.height());
                        total_height_previous_elmnts += outline.height();
                        
                    }
                    
                    //add translation for element except the first one
                    if (j != 1){   
                        //new_element.x((i-1)*w);
                        //element.x((j-1)*w);
                        element.move((j-1)*w, total_height_previous_elmnts);
                    }else{
                        //new_element.x(0);
                        //element.x(0);
                        element.move(0, total_height_previous_elmnts);
                    }
                    j += 1;


                    console.log(element.x(), element.y());
                    console.log(element.node.tagName);
                    console.log(element.bbox());
                    // element.node.removeAttribute("svgjs:data");
                    // element.node.removeAttribute("data");
                    //body += element.svg();
                    body.push(element);
                    //console.log(element.svg());
                    
                }
            }else{
                
                //body += element.svg();
                body.push(element);
            }
        }
        total_height_previous_elmnts += outline.height();
    };
   
    return body;
};




const setSizeInfoToID = (svg, size) => {
    let selector = '[id]';
    const elements = svg.find(selector);
    elements.forEach(element => {
        var new_id = size + "_" + element.attr("id");
        element.attr("id", new_id)
    });
}


module.exports = { getElements, setSizeInfoToID };
