// console.log("Justin Doc")

//let num = 25;
//let num2 =30;
//let num3 =35;
//let x = 26;
//let bool1 = true;

//let heading1 = document.getElementById('heading1');
//if (x < num) {
//    heading1.innerHTML = "We have <span>" + x + "</span> days to go";
//}
//else if(x < num2) {
//    heading1.innerHTML = "we dont have <span> " + x  + "</span> days to go";
//}
//else if(x > num2) {
//    heading1.innerHTML = "we dont have <span> " + x  + "</span> days to go";
//}
//else {
//    heading1.innerHTML = "we dont have <span> " + x  + "</span> days to go";
//} 

const colors = new Array (
    "0000FF",
    "blue",
    "White",
    "black",
    "purple",
    "green",
    "yellow",
    "orange",
    "#F0F"
    );
// console.log(colors.length)

// let div = document.getElementsByTagName('div');
// function ChangeColor() {
//     let randomColor = Math.floor(Math.random()*colors.length)
// div1.style.backgroundColor = "White";
// }

for (let i = 0; i < colors.length; i++) {
    // console.log(colors[i])
    let grid_Divs = document.querySelectorAll("#grid-divs section");
 console.log(grid_Divs);
grid_Divs[i].style.backgroundColor = colors[i];
}
