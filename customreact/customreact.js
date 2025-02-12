

function customRender(reactElement,mainContainer){

    const domElement=document.createElement(reactElement.type);//defines the tag by creating an reactElement

    domElement.innerHTML=reactElement.children;//sets the innerHtml as Click these link
    for (const prop in reactElement.props) {//takes href and target as prop 
        if(prop==="children") continue
        domElement.setAttribute(prop,reactElement.props[prop])//prop setted to the reactElement props        
    }
    mainContainer.appendChild(domElement)


}


const reactElement={
    type:'a',//need to define tag h1,img,p our wish
    props:{
        href:"https://google.com",
        target:"_blank"
    },
    children:"CLick these link"
}



const mainContainer=document.querySelector("#root")

customRender(reactElement,mainContainer)
//function has two arguments react element and the container where to create