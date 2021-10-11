let addToHead = document.querySelector("head");
let cssLink = document.createElement("link");
addToHead.appendChild(cssLink);
cssLink.setAttribute("rel","stylesheet");
cssLink.setAttribute("href","css/style.css");

let wrapper = document.createElement("div");
wrapper.classList.add("wrapper");

let body = document.querySelector("body");
body.appendChild(wrapper);

for (let i=0; i<4; i++) {
    let divs = document.createElement("div");
    console.log(divs)
    wrapper.appendChild(divs);
    divs.classList.add('wrapperdivs')
}
const color1 = "linear-gradient(135deg, #0B132B 0%, #3A506B 100%)"
const color2 = "linear-gradient(330deg, #5BC0BE 0%, #3A506B 100%)"
const color3 = "linear-gradient(35deg, #0B132B 0%, #5BC0BE 100%)"
const color4 = "linear-gradient(235deg, #5BC0BE 0%, #3A506B 100%)"

let colorsArray = [color1, color2, color3, color4];
console.log(colorsArray)

let wrappper_Divs = document.getElementsByClassName('wrapperdivs')
console.log(wrappper_Divs);

const divOne = wrappper_Divs.item(0);
const divTwo = wrappper_Divs.item(1);
const divThree = wrappper_Divs.item(2);
const divFour = wrappper_Divs.item(3);

let allDivs = [divOne, divTwo, divThree, divFour];
