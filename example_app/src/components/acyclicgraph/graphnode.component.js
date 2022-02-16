
import {DOMElement, addCustomElement} from 'fragelement';

import {GraphNode} from 'acyclicgraph'

let component = require('./graphnode.component.html');

//See: https://github.com/brainsatplay/domelement
export class NodeDiv extends DOMElement {
    props={
        operator:(input,node,origin)=>{ console.log(input); return input; }, //Operator to handle I/O on this node. Returned inputs can propagate according to below settings
        forward:true, //pass output to child nodes
        backward:false, //pass output to parent node
        children:undefined, //child node(s), can be tags of other nodes, properties objects like this, or graphnodes, or null
        delay:false, //ms delay to fire the node
        repeat:false, // set repeat as an integer to repeate the input n times
        recursive:false, //or set recursive with an integer to pass the output back in as the next input n times
        animate:false, //true or false
        loop:undefined, //milliseconds or false
        tag:undefined, //generated if not specified, or use to get another node by tag instead of generating a new one
        input:undefined,// can set on the attribute etc
        graph:undefined, //parent AcyclicGraph instance, can set manually or via enclosing acyclic-graph div
        node:undefined, //GraphNode instance, can set manually or as a string to grab a node by tag (or use tag)
    }; //can specify properties of the element which can be subscribed to for changes.

    input_delay=1 //onload runNode delay for graph nodes to run operations on inputs, they will not recognize their children otherwise as the DOM loads

    //set the template string or function (which can input props to return a modified string)
    template=component;

    constructor() {
        super();
        setTimeout( //need this to ensure props are set and the initial template fragment has been rendered i.e. so elements can be selected in the operator without possibility for error
            ()=>{ //timeout ensures everything is on the DOM before pairing/creating graphnode objects
                this.setupNode(this.props);
                if(this.props.input) { //e.g. run the node on input
                    setTimeout(async()=>{
                        this.props.node.runNode(this.props.node,this.props.input,this.props.graph); //run the inputs on the nodes once the children are loaded on the DOM so things propagate correctly
                    },
                    this.input_delay //makes sure children are loaded (e.g. on a DOM with a lot of loading, should add some execution delay to anticipate it as initial nodes are not aware of later-rendered nodes on the DOM)
                    );
                }
            },
            0.01
        );
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

        if(props.graph && !props.node && props.tag) props.node = props.graph.nodes.get(props.tag); //can try to get graph nodes by id or tag
        else if(typeof props.node === 'string') props.node = props.graph.nodes.get(props.node); //can try to get graph nodes by id or tag
        
        if(!props.node) props.node = new GraphNode(props, parent.node, props.graph); //you could pass a graphnode 

        props.tag = props.node.tag;
        if(!this.id) this.id = props.tag;

        if(props.parentNode) {
            props.parentNode.props.node?.addChildren(props.node);
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
