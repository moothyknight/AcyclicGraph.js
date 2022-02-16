
import {DOMElement, addCustomElement} from 'fragelement';

import {GraphNode} from 'acyclicgraph'

let component = require('./graphnode.component.html');

//See: https://github.com/brainsatplay/domelement
export class NodeDiv extends DOMElement {
    props={
        tag:undefined,
        input:undefined,
        operator:(input,node,origin)=>{ console.log(input); return input; },
        forward:true,
        backward:false,
        children:undefined,
        delay:false,
        repeat:false, // set repeat 
        recursive:false,
        graph:undefined, //parent AcyclicGraph instance
        node:undefined, //GraphNode instance
        input_delay:10 //timeout delay for graph nodes to run operation inputs on load, they will not recognize their children otherwise as the DOM loads
    }; //can specify properties of the element which can be subscribed to for changes.

    //set the template string or function (which can input props to return a modified string)
    template=component;

    constructor() {
        super();
        setTimeout(()=>{ //timeout ensures everything is on the DOM before pairing/creating graphnode objects
            this.setupNode(this.props);

            if(this.props.input) { //e.g. run the node on input
                setTimeout(async()=>{
                    this.props.node.runNode(this.props.node,this.props.input,this.props.graph)
                },
                this.props.input_delay //makes sure children are loaded (e.g. on a DOM with a lot of loading, should add some execution delay to anticipate it as initial nodes are not aware of later-rendered nodes on the DOM)
                );
            }
        },2);
    }

    setupNode(props) {
        let parent = this.parentNode;
        if(parent.props?.operator) { //has operator, this is a graph-node (in case you extend it with a new tagName)
            props.parentNode = parent;
        }
        if(!props.graph) {   
            while(!parent.props.nodes) { //has nodes prop, is an acyclic-graph
                // console.log(parent)
                // console.log(parent.tagName)
                if(parent.constructor.name === 'HTMLBodyElement' || parent.constructor.name === 'HTMLHeadElement' || parent.constructor.name === 'HTMLHtmlElement' || parent.constructor.name === 'HTMLDocument') {
                    console.error("No AcyclicGraph Found")
                    break;
                }
                parent = parent.parentNode;
            }
            if(parent.props?.nodes) {
                props.graph = parent.props.graph;
                props.input_delay = parent.props.input_delay;
            }
        }
        if(this.id && !props.tag) props.tag = this.id;

        if(props.graph && !props.node) props.node = props.graph.nodes.get(props.tag); //can get by id
        if(!props.node) props.node = new GraphNode(props, parent.node, props.graph);

        
        
        props.tag = props.node.tag;
        if(!this.id) this.id = props.tag;

        if(props.parentNode) {
            setTimeout(()=>{
                props.parentNode.props.node?.addChildren(props.node);
            },1);
        }
    }

    
    //DOMElement custom callbacks:
    //oncreate=(props)=>{} //after rendering
    //onresize=(props)=>{} //on window resize
    //onchanged=(props)=>{} //on props changed
    //ondelete=(props)=>{} //on element deleted. Can remove with this.delete() which runs cleanup functions
}

//window.customElements.define('custom-', Custom);

addCustomElement(NodeDiv,'graph-node');
