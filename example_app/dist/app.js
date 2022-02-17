(()=>{var Z=Object.defineProperty;var R=(h,e,t)=>e in h?Z(h,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):h[e]=t;var m=(h,e)=>()=>(e||h((e={exports:{}}).exports,e),e.exports);var n=(h,e,t)=>(R(h,typeof e!="symbol"?e+"":e,t),t);var c=(h,e,t)=>new Promise((s,i)=>{var r=l=>{try{a(t.next(l))}catch(d){i(d)}},o=l=>{try{a(t.throw(l))}catch(d){i(d)}},a=l=>l.done?s(l.value):Promise.resolve(l.value).then(r,o);a((t=t.apply(h,e)).next())});var T=m((ce,_)=>{_.exports=""});var N=m((ge,W)=>{W.exports=`<div>\r
    Check Console\r
    <button>Run</button>\r
</div>`});var x=m((ye,J)=>{J.exports=`<div>\r
    <button>Run</button>\r
</div>`});var C=m((Ne,Q)=>{Q.exports='<canvas height="100%" width="100%"></canvas>'});var L=m((Ce,V)=>{V.exports="<button>Click</button>"});var H=m((He,Y)=>{Y.exports="<input></input>"});var z=m((Ie,ee)=>{ee.exports=`<div>Test worked!</div>\r
<button>Clickme</button>`});var I=m((Re,ie)=>{ie.exports='<canvas height="100%" width="100%"></canvas>'});var f=class extends HTMLElement{constructor(){super();n(this,"template",e=>`<div> Custom Fragment Props: ${JSON.stringify(e)} </div>`);n(this,"props",{test:!0});n(this,"useShadow",!1);n(this,"oncreate");n(this,"onresize");n(this,"ondelete");n(this,"onchanged");n(this,"fragment");n(this,"attachedShadow",!1);n(this,"obsAttributes",["props","options","onchanged","onresize","ondelete","oncreate","template"]);n(this,"delete",()=>{this.fragment=void 0,this.remove(),this.ondelete&&this.ondelete(this.props)});n(this,"render",(e=this.props)=>{typeof this.template=="function"?this.templateString=this.template(e):this.templateString=this.template;let t=document.createElement("template");t.innerHTML=this.templateString;let s=t.content;this.fragment&&(this.useShadow?this.shadowRoot.removeChild(this.fragment):this.removeChild(this.fragment)),this.fragment=s,this.useShadow?(this.attachedShadow||this.attachShadow({mode:"open"}),this.shadowRoot.appendChild(s)):this.appendChild(s),this.oncreate&&this.oncreate(e)});n(this,"state",{pushToState:{},data:{},triggers:{},setState(e){if(Object.assign(this.pushToState,e),Object.keys(this.triggers).length>0)for(let t of Object.getOwnPropertyNames(this.triggers))this.pushToState[t]&&(this.data[t]=this.pushToState[t],delete this.pushToState[t],this.triggers[t].forEach(s=>{s.onchanged(this.data[t])}));return this.pushToState},subscribeTrigger(e,t=s=>{}){if(e){this.triggers[e]||(this.triggers[e]=[]);let s=this.triggers[e].length;return this.triggers[e].push({idx:s,onchanged:t}),this.triggers[e].length-1}else return},unsubscribeTrigger(e,t){let s,i=this.triggers[e];if(i)if(!t)delete this.triggers[e];else return i.find(o=>{if(o.idx===t)return!0})&&i.splice(s,1),!0},subscribeTriggerOnce(e=void 0,t=s=>{}){let s,i=r=>{t(r),this.unsubscribeTrigger(e,s)};s=this.subscribeTrigger(e,i)}})}get observedAttributes(){return this.obsAttributes}get obsAttributes(){return this.obsAttributes}set obsAttributes(e){typeof e=="string"?this.obsAttributes.push(e):Array.isArray(e)&&(this.obsAttributes=e)}static get tag(){return this.name.toLowerCase()+"-"}static addElement(e=this.tag,t=this,s=void 0){u(t,e,s)}attributeChangedCallback(e,t,s){if(e==="onchanged"){let i=s;if(typeof i=="string"&&(i=w(i)),typeof i=="function"){this.onchanged=i,this.state.data.props=this.props,this.state.unsubscribeTrigger("props"),this.state.subscribeTrigger("props",this.onchanged);let r=new CustomEvent("changed",{detail:{props:this.props}});this.state.subscribeTrigger("props",()=>{this.dispatchEvent(r)})}}else if(e==="onresize"){let i=s;if(typeof i=="string"&&(i=w(i)),typeof i=="function"){if(this.ONRESIZE)try{window.removeEventListener("resize",this.ONRESIZE)}catch(r){}this.ONRESIZE=r=>{this.onresize(this.props)},this.onresize=i,window.addEventListener("resize",this.ONRESIZE)}}else if(e==="ondelete"){let i=s;typeof i=="string"&&(i=w(i)),typeof i=="function"&&(this.ondelete=()=>{this.ONRESIZE&&window.removeEventListener("resize",this.ONRESIZE),this.state.unsubscribeTrigger("props"),i(this.props)})}else if(e==="oncreate"){let i=s;typeof i=="string"&&(i=w(i)),typeof i=="function"&&(this.oncreate=i)}else if(e==="props"){let i=s;typeof i=="string"&&(i=JSON.parse(i)),Object.assign(this.props,i),this.state.setState({props:this.props})}else if(e==="template"){let i=s;this.template=options.template,typeof i=="function"?this.templateString=this.template(this.props):this.templateString=i,this.render(this.props);let r=new CustomEvent("created",{detail:{props:this.props}});this.dispatchEvent(r)}else{let i=s;if(e.includes("eval_"))e=e.split("_"),e.shift(),e=e.join(),i=w(s);else if(typeof s=="string")try{i=JSON.parse(s)}catch(r){i=s}this[e]=i,this.props[e]=i}}connectedCallback(){let e=this.getAttribute("props");typeof e=="string"&&(e=JSON.parse(e)),Object.assign(this.props,e),this.state.setState({props:this.props}),Array.from(this.attributes).forEach(o=>{let a=o.name,l=o.value;if(a.includes("eval_"))a=a.split("_"),a.shift(),a=a.join(),l=w(o.value);else if(typeof o.value=="string")try{l=JSON.parse(o.value)}catch(d){l=o.value}this[a]||Object.defineProperties(this,o,{value:l,writable:!0,get(){return this[a]},set(d){this.setAttribute(a,d)}}),this[a]=l,this.props[a]=l,this.obsAttributes.push(a)});let t=new CustomEvent("resized",{detail:{props:this.props}}),s=new CustomEvent("changed",{detail:{props:this.props}}),i=new CustomEvent("deleted",{detail:{props:this.props}}),r=new CustomEvent("created",{detail:{props:this.props}});if(this.render(this.props),this.dispatchEvent(r),this.state.subscribeTrigger("props",()=>{this.dispatchEvent(s)}),typeof this.onresize=="function"){if(this.ONRESIZE)try{window.removeEventListener("resize",this.ONRESIZE)}catch(o){}this.ONRESIZE=o=>{this.onresize(this.props)},window.addEventListener("resize",this.ONRESIZE)}typeof this.ondelete=="function"&&(this.ondelete=(o=this.props)=>{this.ONRESIZE&&window.removeEventListener("resize",this.ONRESIZE),this.state.unsubscribeTrigger("props"),ondelete(o)}),typeof this.onchanged=="function"&&(this.state.data.props=this.props,this.state.subscribeTrigger("props",this.onchanged))}get props(){return this.props}set props(e={}){this.setAttribute("props",e)}get template(){return this.template}set template(e){this.setAttribute("template",e)}get render(){return this.render}get delete(){return this.delete}get state(){return this.state}get onchanged(){return this.onchanged}set onchanged(e){this.setAttribute("onchanged",e)}get onresize(){return this.props}set onresize(e){this.setAttribute("onresize",e)}get ondelete(){return this.props}set ondelete(e){this.setAttribute("ondelete",e)}get oncreate(){return this.oncreate}set oncreate(e){this.setAttribute("oncreated",e)}};function u(h,e,t=null){t?e?window.customElements.define(e,h,{extends:t}):window.customElements.define(h.name.toLowerCase()+"-",h,{extends:t}):e?window.customElements.define(e,h):window.customElements.define(h.name.toLowerCase()+"-",h)}function ne(h=""){return h+Math.floor(Math.random()*1e15)}function w(method){let getFunctionBody=h=>h.replace(/^\W*(function[^{]+\{([\s\S]*)\}|[^=]+=>[^{]*\{([\s\S]*)\}|[^=]+=>(.+))/i,"$2$3$4"),getFunctionHead=h=>{let e=h.indexOf(")");return h.slice(0,h.indexOf("{",e)+1)},newFuncHead=getFunctionHead(method),newFuncBody=getFunctionBody(method),newFunc;try{if(newFuncHead.includes("function ")){let h=newFuncHead.split("(")[1].split(")")[0];newFunc=new Function(h,newFuncBody)}else if(newFuncHead.substring(0,6)===newFuncBody.substring(0,6)){let h=newFuncHead.split("(")[1].split(")")[0];newFunc=new Function(h,newFuncBody.substring(newFuncBody.indexOf("{")+1,newFuncBody.length-1))}else try{newFunc=eval(newFuncHead+newFuncBody+"}")}catch(err){newFunc=eval(method)}}catch(h){}return newFunc}var E={pushToState:{},data:{},triggers:{},setState(h){if(Object.assign(this.pushToState,h),Object.keys(this.triggers).length>0)for(let e of Object.getOwnPropertyNames(this.triggers))this.pushToState[e]&&(this.data[e]=this.pushToState[e],delete this.pushToState[e],this.triggers[e].forEach(t=>{t.onchange(this.data[e])}));return this.pushToState},subscribeTrigger(h,e=t=>{}){if(h){this.triggers[h]||(this.triggers[h]=[]);let t=this.triggers[h].length;return this.triggers[h].push({idx:t,onchange:e}),this.triggers[h].length-1}else return},unsubscribeTrigger(h,e){let t,s=this.triggers[h];if(s)if(!e)delete this.triggers[h];else return s.find(r=>{if(r.idx===e)return!0})&&s.splice(t,1),!0},subscribeTriggerOnce(h=void 0,e=t=>{}){let t,s=i=>{e(i),this.unsubscribeTrigger(h,t)};t=this.subscribeTrigger(h,s)}},v=class{constructor(){n(this,"state",E);n(this,"nodes",new Map);n(this,"nNodes",0)}convertChildrenToNodes(e){e.convertChildrenToNodes(e)}addNode(e={}){return new b(e,void 0,this)}getNode(e){return this.nodes.get(e)}run(e,t,s){if(typeof e=="string"&&(e=this.nodes.get(e)),e)return e.run(t,e,s)}removeTree(e){if(typeof e=="string"&&(e=this.nodes.get(e)),e){let t=function(s){s.children&&(Array.isArray(s.children)?s.children.forEach(i=>{i.stopNode&&i.stopNode(),i.tag&&this.nodes.get(i.tag)&&this.nodes.delete(i.tag),this.nodes.forEach(r=>{r.nodes.get(i.tag)&&r.nodes.delete(i.tag)}),t(i)}):typeof s.children=="object"&&(s.stopNode&&s.stopNode(),s.tag&&this.nodes.get(s.tag)&&this.nodes.delete(s.tag),this.nodes.forEach(i=>{i.nodes.get(s.tag)&&i.nodes.delete(s.tag)}),t(s)))};e.stopNode&&e.stopNode(),e.tag&&(this.nodes.delete(e.tag),this.nodes.forEach(s=>{s.nodes.get(e.tag)&&s.nodes.delete(e.tag)}),t(e))}}removeNode(e){typeof e=="string"&&(e=this.nodes.get(e)),(e==null?void 0:e.tag)&&this.nodes.delete(e.tag),(e==null?void 0:e.tag)&&this.nodes.get(e.tag)&&(this.nodes.delete(e.tag),this.graph&&this.graph.nodes.delete(e.tag),this.nodes.forEach(t=>{t.nodes.get(e.tag)&&t.nodes.delete(e.tag)}))}appendNode(e={},t){t.addChildren(e)}callParent(r,o){return c(this,arguments,function*(e,t,s=e,i){if(e==null?void 0:e.parent)return yield e.callParent(t,e.parent,s,i)})}callChildren(o,a){return c(this,arguments,function*(e,t,s=e,i,r){if(e==null?void 0:e.children)return yield e.callChildren(t,s,i,r)})}subscribe(e,t=s=>{}){return this.state.subscribeTrigger(e,t)}unsubscribe(e,t){this.state.unsubscribeTrigger(e,t)}},b=class{constructor(e={},t,s){n(this,"tag");n(this,"parent");n(this,"children");n(this,"graph");n(this,"state",E);n(this,"nodes",new Map);!e.tag&&s?e.tag=`node${s.nNodes}`:e.tag||(e.tag=`node${Math.floor(Math.random()*1e10)}`),Object.assign(this,e),this.parent=t,this.graph=s,s&&(s.nNodes++,s.nodes.set(e.tag,this)),this.children&&this.convertChildrenToNodes(this)}operator(e,t=this,s,i){return e}runOp(r){return c(this,arguments,function*(e,t=this,s,i){let o=yield this.operator(e,t,s,i);return this.tag&&this.state.setState({[this.tag]:o}),o})}runNode(e,t,s){if(typeof e=="string"&&(e=this.nodes.get(e)),e)return e.run(t,e,s)}run(e,t=this,s){if(typeof t=="string"){let i;if(this.graph&&(i=this.graph.nodes.get(t)),i||(i=this.nodes.get(t)),t=i,!t)return}return new Promise(i=>c(this,null,function*(){if(t){let r=(a,l,d=0)=>new Promise(y=>c(this,null,function*(){d++;let p=yield a.runOp(l,a,s,d);if(typeof a.repeat=="number"){for(;d<a.repeat;){if(a.delay){setTimeout(()=>c(this,null,function*(){y(yield r(a,l,d))}),a.delay);break}else if(a.frame&&requestAnimationFrame){requestAnimationFrame(()=>c(this,null,function*(){y(yield r(a,l,d))}));break}else p=yield a.runOp(l,a,s,d);d++}if(d===a.repeat){y(p);return}}else if(typeof a.recursive=="number"){for(;d<a.recursive;){if(a.delay){setTimeout(()=>c(this,null,function*(){y(yield r(a,p,d))}),a.delay);break}else if(a.frame&&requestAnimationFrame){requestAnimationFrame(()=>c(this,null,function*(){y(yield r(a,p,d))}));break}else p=yield a.runOp(p,a,s,d);d++}if(d===a.recursive){y(p);return}}else{y(p);return}})),o=()=>c(this,null,function*(){let a=yield r(t,e);if(t.backward&&t.parent&&(yield this.runNode(t.parent,a,t)),t.children&&t.forward)if(Array.isArray(t.children))for(let l=0;l<t.children.length;l++)yield this.runNode(t.children[l],a,t);else yield this.runNode(t.children,a,t);return t.animate&&!t.isAnimating&&this.runAnimation(e,t,s),typeof t.loop=="number"&&!t.isLooping&&this.runLoop(e,t,s),a});t.delay?setTimeout(()=>c(this,null,function*(){i(yield o())}),t.delay):t.frame&&requestAnimationFrame?requestAnimationFrame(()=>c(this,null,function*(){i(yield o())})):i(yield o())}else i(void 0)}))}runAnimation(e,t=this,s){if(t.animate&&!t.isAnimating){t.isAnimating=!0;let i=()=>c(this,null,function*(){t.isAnimating&&(yield t.runOp(e,t,s,"animate"),requestAnimationFrame(()=>c(this,null,function*(){yield i()})))});requestAnimationFrame(i)}}runLoop(e,t=this,s){if(typeof t.loop=="number"&&!t.isLooping){t.isLooping=!0;let i=()=>c(this,null,function*(){t.looping&&(yield t.runOp(e,t,s,"loop"),setTimeout(()=>c(this,null,function*(){yield i()}),t.loop))})}}setOperator(e=function(s,i=this,r,o){return s}){this.operator=e}setParent(e){this.parent=e}setChildren(e){this.children=e}removeTree(e){if(typeof e=="string"&&(e=this.nodes.get(e)),e){let t=function(s){s.children&&(Array.isArray(s.children)?s.children.forEach(i=>{i.stopNode&&i.stopNode(),i.tag&&this.nodes.get(i.tag)&&this.nodes.delete(i.tag),this.nodes.forEach(r=>{r.nodes.get(i.tag)&&r.nodes.delete(i.tag)}),t(i)}):typeof s.children=="object"&&(s.stopNode&&s.stopNode(),s.tag&&this.nodes.get(s.tag)&&this.nodes.delete(s.tag),this.nodes.forEach(i=>{i.nodes.get(s.tag)&&i.nodes.delete(s.tag)}),t(s)))};e.stopNode&&e.stopNode(),e.tag&&(this.nodes.delete(e.tag),this.nodes.forEach(s=>{s.nodes.get(e.tag)&&s.nodes.delete(e.tag)}),t(e),this.graph&&this.graph.nodes.removeTree(e))}}addNode(e={}){let t=new b(e,this,this.graph);return this.nodes.set(t),this.graph&&this.graph.nodes.set(t),t}removeNode(e){typeof e=="string"&&(e=this.nodes.get(e)),(e==null?void 0:e.tag)&&this.nodes.delete(e.tag),(e==null?void 0:e.tag)&&this.nodes.get(e.tag)&&(this.nodes.delete(e.tag),this.graph&&this.graph.nodes.delete(e.tag),this.nodes.forEach(t=>{t.nodes.get(e.tag)&&t.nodes.delete(e.tag)}))}appendNode(e,t=this){typeof e=="string"&&(e=this.nodes.get(e)),e&&t.addChildren(e)}getNode(e){return this.nodes.get(e)}stopLooping(){node.isLooping=!1}stopAnimating(){node.isAnimating=!1}stopNode(){this.stopAnimating(),this.stopLooping()}addChildren(e){this.children||(this.children=[]),!Array.isArray(this.children)&&this.children?this.children=[this.children]:Array.isArray(e)?this.children.push(...e):this.children.push(e)}convertChildrenToNodes(e=this){var t,s,i;if(((t=e.children)==null?void 0:t.name)==="GraphNode")((s=this.graph)==null?void 0:s.nodes.get(e.tag))||this.graph.nodes.set(e.tag),this.nodes.get(e.tag)||this.nodes.set(e.tag);else if(Array.isArray(e.children))for(let r=0;r<e.children.length;r++)if(e.children[r].name==="GraphNode"){((i=this.graph)==null?void 0:i.nodes.get(e.children[r].tag))||this.graph.nodes.set(e.children[r].tag),this.nodes.get(e.children[r].tag)||this.nodes.set(e.children[r].tag);continue}else typeof e.children[r]=="object"?(e.children[r]=new b(e.children[r],e,this.graph),this.nodes.set(e.children[r].tag),this.convertChildrenToNodes(e.children[r])):typeof e.children[r]=="string"&&(this.graph&&(e.children[r]=this.graph.getNode(e.children[r]),this.nodes.get(e.children[r].tag)||this.nodes.set(e.children[r])),e.children[r]||(e.children[r]=this.nodes.get(e.children[r])));else typeof e.children=="object"?(e.children=new b(e.children,e,this.graph),this.nodes.set(e.children.tag),this.convertChildrenToNodes(e.children)):typeof e.children=="string"&&(this.graph&&(e.children=this.graph.getNode(e.children),this.nodes.get(e.children.tag)||this.nodes.set(e.children)),e.children||(e.children=this.nodes.get(e.children)));return e.children}callParent(i){return c(this,arguments,function*(e,t=this,s){var r;if(typeof((r=this.parent)==null?void 0:r.operator)=="function")return yield this.parent.runOp(e,this.parent,t,s)})}callChildren(r){return c(this,arguments,function*(e,t=this,s,i){var a,l;let o;if(Array.isArray(this.children))if(i)o=yield(a=this.children[i])==null?void 0:a.runOp(e,this.children[i],t,s);else{o=[];for(let d=0;d<this.children.length;d++)o.push(yield(l=this.children[d])==null?void 0:l.runOp(e,this.children[d],t,s))}else this.children&&(o=yield this.children.runOp(e,this.children,t,s));return o})}setProps(e={}){Object.assign(this,e)}subscribe(e=this.tag,t=s=>{}){return this.state.subscribeTrigger(e,t)}unsubscribe(e=this.tag,t){this.state.unsubscribeTrigger(e,t)}};var B=T(),g=class extends f{constructor(){super(...arguments);n(this,"props",{operator:(e,t,s,i)=>(console.log(e),e),forward:!0,backward:!1,children:void 0,delay:!1,repeat:!1,recursive:!1,animate:!1,loop:void 0,tag:void 0,input:void 0,graph:void 0,node:void 0});n(this,"input_delay",1);n(this,"template",B);n(this,"render",(e=this.props)=>{typeof this.template=="function"?this.templateString=this.template(e):this.templateString=this.template;let t=document.createElement("template");t.innerHTML=this.templateString;let s=t.content;this.fragment&&this.removeChild(this.fragment),this.fragment=s,this.appendChild(s),this.setupNode(this.props),this.props.input&&setTimeout(()=>c(this,null,function*(){this.props.node.runNode(this.props.node,this.props.input,this.props.graph)}),this.input_delay),this.oncreate&&this.oncreate(e)})}setupNode(e){var s,i,r;let t=this.parentNode;if(((s=t.props)==null?void 0:s.operator)&&(e.parentNode=t),!e.graph){for(;!t.props.nodes;){if(t.constructor.name==="HTMLBodyElement"||t.constructor.name==="HTMLHeadElement"||t.constructor.name==="HTMLHtmlElement"||t.constructor.name==="HTMLDocument"){console.error("No AcyclicGraph Found");break}t=t.parentNode}((i=t.props)==null?void 0:i.nodes)&&(e.graph=t.props.graph,e.input_delay=t.props.input_delay)}this.id&&!e.tag&&(e.tag=this.id),e.graph&&!e.node&&e.tag?e.node=e.graph.nodes.get(e.tag):e.graph&&typeof e.node=="string"&&(e.node=e.graph.nodes.get(e.node)),e.node||(e.node=new b(e,t.node,e.graph)),e.tag=e.node.tag,this.id||(this.id=e.tag),e.parentNode&&((r=e.parentNode.props.node)==null||r.addChildren(e.node))}};u(g,"graph-node");var $=N(),A=class extends f{constructor(){super();n(this,"props",{graph:new v,nodes:[]});n(this,"input_delay",1);n(this,"template",$);setTimeout(()=>{let e=Array.from(this.children),t=[];(e==null?void 0:e.length)>0&&e.forEach(s=>{s.props&&this.props.nodes.push(s.props.node),s.props&&s.parentNode.tagName===this.tagName&&t.push(s)}),this.children_ready(e,t)},this.input_delay)}children_ready(e=[],t=[]){this.querySelector("button").onclick=()=>{t.forEach(s=>{s.props.node.runNode(s.props.node)})}}};u(A,"acyclic-graph");var G=x(),q=class extends f{constructor(){super(...arguments);n(this,"props",{operation:e=>e});n(this,"template",G);n(this,"oncreate",e=>{})}};u(q,"snode-");var S=class{constructor(){n(this,"addSequence",this.add);n(this,"runSequence",this.run);n(this,"append",this.appendSequence);n(this,"remove",this.removeSequence);n(this,"get",this.getSequence);n(this,"subscribeToOperation",this.subscribe);n(this,"unsubscribeFromOperation",this.unsubscribe);this.sequences=new Map,this.state={pushToState:{},data:{},triggers:{},setState(e){if(Object.assign(this.pushToState,e),Object.keys(this.triggers).length>0)for(let t of Object.getOwnPropertyNames(this.triggers))this.pushToState[t]&&(this.data[t]=this.pushToState[t],delete this.pushToState[t],this.triggers[t].forEach(s=>{s.onchange(this.data[t])}));return this.pushToState},subscribeTrigger(e,t=s=>{}){if(e){this.triggers[e]||(this.triggers[e]=[]);let s=this.triggers[e].length;return this.triggers[e].push({idx:s,onchange:t}),this.triggers[e].length-1}else return},unsubscribeTrigger(e,t){let s,i=this.triggers[e];if(i)if(!t)delete this.triggers[e];else return i.find(o=>{if(o.idx===t)return!0})&&i.splice(s,1),!0},subscribeTriggerOnce(e=void 0,t=s=>{}){let s,i=r=>{t(r),this.unsubscribeTrigger(e,s)};s=this.subscribeTrigger(e,i)}}}add(e,t=[]){this.sequences.set(e,t)}run(e,t,s=1){return c(this,null,function*(){let i=this.sequences.get(e);if(i)if(s>1){let r=2,o=i.next;for(;r<s;)o=o.next;yield this.runSequenceLayer(o,t)}else yield this.runSequenceLayer(i,t)})}appendSequence(e,t,s={},i){var o,a;let r=this.getSequence(e,t);r&&(Array.isArray(r)||(r=[r]),i?(((o=r[i])==null?void 0:o.next)||(r.next=[]),(a=r[i])==null||a.next.push(s)):r.push(s))}removeSequence(e,t,s){let i;t?i=this.getSequence(e,t-1):i=this.getSequence(e),i&&(s&&i[s]?i.splice(s,1):t&&i.next?(i.tag&&this.unsubscribeFromOperation(i.tag),delete i.next):i&&this.sequences.delete(e))}getSequence(e,t=1){let s=this.sequences.get(e);if(s){if(t>1){let i=2,r=s.next;for(;i<t&&r.next;)r=r.next,i++;return r}return s}}runSequenceLayer(e,t){return c(this,null,function*(){let s=(i,r,o=1)=>c(this,null,function*(){if(!i.operation)if(i.op)i.operation=i.op;else if(i.o)i.operation=i.o;else if(i.f)i.operation=i.f;else if(i.fn)i.operaiion=i.fn;else if(i.callback)i.operation=i.callback;else return r;let a=yield i.operation(r);if(i.tag&&this.state.setState({[i.tag]:a}),typeof i.repeat=="number"){let l=o;for(;l<i.repeat;){if(i.delay){setTimeout(()=>c(this,null,function*(){i.frame?requestAnimationFrame(()=>c(this,null,function*(){l++,yield s(i,r,l)})):(l++,yield s(i,r,l))}),i.delay);break}else a=yield i.operation(r);l++}l===i.repeat&&i.next&&(yield this.runSequenceLayer(i.next,a))}else if(typeof i.recursive=="number"){let l=o;for(;l<i.recursive;){if(i.delay){setTimeout(()=>c(this,null,function*(){i.frame?requestAnimationFrame(()=>c(this,null,function*(){l++,yield s(i,a,l)})):(l++,yield s(i,a,l))}),i.delay);break}else a=yield i.operation(r);l++}l===i.recursive&&i.next&&(yield this.runSequenceLayer(i.next,a))}else i.next&&(yield this.runSequenceLayer(i.next,a))});if(typeof e=="function")yield e(t);else if(typeof e=="string")this.runSequence(e,t);else if(Array.isArray(e))for(let i=0;i<e.length;i++){let r=e[i];typeof r=="function"?t=yield r(t):r.delay?r.frame&&typeof requestAnimationFrame=="function"?setTimeout(()=>c(this,null,function*(){requestAnimationFrame(()=>c(this,null,function*(){s(r,t)}))}),r.delay):setTimeout(()=>c(this,null,function*(){s(r,t)}),r.delay):r.frame?requestAnimationFrame(()=>c(this,null,function*(){s(r,t)})):s(r,t)}else typeof e=="object"&&s(e,t)})}subscribe(e,t=s=>{}){if(e)return this.state.subscribeTrigger(e,t)}unsubscribe(e,t){e&&this.state.unsubscribeTrigger(e,t)}};var K=x(),O=class extends f{constructor(){super(...arguments);n(this,"props",{sequencer:new S,sequences:[]});n(this,"template",K);n(this,"graphnode");n(this,"oncreate",e=>{let t=this.querySelectorAll("seq-node");(t==null?void 0:t.length)>0&&t.forEach(i=>{e.nodes.push(i.props.node)});let s=this.querySelectorAll("sequencer- > snode");this.querySelector("button").onclick=()=>{s.forEach(i=>{e.graph.run(i.props.node)})}})}};u(O,"sequencer-");var U=C(),F=class extends g{constructor(){super(...arguments);n(this,"props",{operator:(e,t,s,i)=>{if(i==="animate"){this.draw(e,t,s,i);for(let r=0;r<this.drawFuncs.length;r++){let o=this.drawFuncs[r];typeof o=="function"&&o(e,t,s,i)}}},forward:!0,backward:!1,children:void 0,delay:!1,repeat:!1,recursive:!1,animate:!0,loop:void 0,tag:void 0,input:void 0,graph:void 0,node:void 0});n(this,"template",U);n(this,"drawFuncs",[]);n(this,"oncreate",e=>{this.canvas=this.querySelector("canvas"),e.width&&(this.canvas.width=e.width,this.canvas.style.height=e.height),e.height&&(this.canvas.height=e.height,this.canvas.style.height=e.height),e.style&&(this.canvas.style=e.style,setTimeout(()=>{this.canvas.height=this.canvas.clientHeight,this.canvas.width=this.canvas.clientWidth},10)),e.canvas=this.canvas,e.context?e.context=this.canvas.getContext(e.context):e.context=this.canvas.getContext("2d"),this.context=e.context,this.ctx=this.context,e.ctx=this.context,setTimeout(()=>{e.animate&&e.node.runAnimation()},10)});n(this,"onresize",e=>{this.canvas&&(this.canvas.width=this.canvas.clientWidth,this.canvas.height=this.canvas.clientHeight,this.canvas.style.width=this.canvas.clientWidth,this.canvas.style.height=this.canvas.clientHeight)})}draw(e,t,s,i){let r=this.props.canvas,o=this.props.ctx}addDraw(e){typeof e=="function"&&this.drawFuncs.push(e)}};u(F,"canvas-node");var X=L(),j=class extends g{constructor(){super(...arguments);n(this,"props",{operator:(e,t,s,i)=>(e&&(this.props.input=e),this.props.input),forward:!0,backward:!1,children:void 0,delay:!1,repeat:!1,recursive:!1,animate:!1,loop:void 0,tag:void 0,input:void 0,graph:void 0,node:void 0});n(this,"template",X);n(this,"oncreate",e=>{let t=this.querySelector("button");t.onclick=s=>{e.node.run(e.input)}})}};u(j,"button-node");var k=H(),M=class extends g{constructor(){super(...arguments);n(this,"props",{operator:(e,t,s,i)=>(this.props.input=e,e),forward:!0,backward:!1,children:void 0,delay:!1,repeat:!1,recursive:!1,animate:!1,loop:void 0,tag:void 0,input:void 0,graph:void 0,node:void 0});n(this,"template",k);n(this,"oncreate",e=>{let t=this.querySelector("input");t.type=this.type,t.oninput=s=>{e.node&&e.node.callChildren(s.target.value)}})}};u(M,"input-node");var te=z(),P=class extends f{constructor(){super(...arguments);n(this,"props",{});n(this,"template",te);n(this,"oncreate",e=>{let t=this.querySelector("button"),s=this.querySelector("div");t&&(t.onclick=i=>{s.innerHTML="Clicked!"})})}};u(P,"custom-");var se=I(),D=class extends g{constructor(){super(...arguments);n(this,"props",{radius:20,triggered:!1,operator:(e,t,s,i)=>{if(this.props.triggered||(this.props.radius+=Math.random()-.5),i==="animate"){this.draw();for(let r=0;r<this.drawFuncs.length;r++){let o=this.drawFuncs[r];typeof o=="function"&&o(e,t,s,i)}}else typeof e=="object"?(e.radius&&(this.props.radius+=e.radius),this.props.triggered=!0):typeof e=="number"?(this.props.radius+=e,this.props.triggered=!0):typeof e=="string"?(this.props.radius+=parseFloat(e),this.props.triggered=!0):(this.props.radius+=Math.random()-.5,this.props.triggered=!0)},forward:!0,backward:!1,children:void 0,delay:!1,repeat:!1,recursive:!1,animate:!0,loop:void 0,tag:void 0,input:void 0,graph:void 0,node:void 0});n(this,"template",se);n(this,"drawFuncs",[]);n(this,"oncreate",e=>{this.canvas=this.querySelector("canvas"),e.width&&(this.canvas.width=e.width,this.canvas.style.height=e.height),e.height&&(this.canvas.height=e.height,this.canvas.style.height=e.height),e.style&&(this.canvas.style=e.style,setTimeout(()=>{this.canvas.height=this.canvas.clientHeight,this.canvas.width=this.canvas.clientWidth},10)),e.canvas=this.canvas,e.context?e.context=this.canvas.getContext(e.context):e.context=this.canvas.getContext("2d"),this.context=e.context,this.ctx=this.context,e.ctx=this.context,setTimeout(()=>{e.animate&&e.node.runAnimation()},10)});n(this,"onresize",e=>{this.canvas&&(this.canvas.width=this.canvas.clientWidth,this.canvas.height=this.canvas.clientHeight,this.canvas.style.width=this.canvas.clientWidth,this.canvas.style.height=this.canvas.clientHeight)})}draw(e,t,s,i){let r=this.props.canvas,o=this.props.ctx;this.props.radius<=1&&(this.props.radius=1),o.clearRect(0,0,r.width,r.height),this.drawCircle(r.width*.5,r.height*.5,this.props.radius,"green",5,"#003300")}addDraw(e){typeof e=="function"&&this.drawFuncs.push(e)}drawCircle(e,t,s,i="green",r=5,o="#003300"){this.props.ctx.beginPath(),this.props.ctx.arc(e,t,s,0,2*Math.PI,!1),this.props.ctx.fillStyle=i,this.props.ctx.fill(),this.props.ctx.lineWidth=r,this.props.ctx.strokeStyle=o,this.props.ctx.stroke()}drawLine(e={x:0,y:0},t={x:1,y:1},s=5,i="#003300"){this.props.ctx.beginPath(),this.props.ctx.lineWidth=s,this.props.ctx.strokeStyle=i,this.props.ctx.moveTo(e.x,e.y),this.props.ctx.lineTo(t.x,t.y),this.props.ctx.stroke()}};u(D,"circlecanvas-node");})();
//# sourceMappingURL=app.js.map
