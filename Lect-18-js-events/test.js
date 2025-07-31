console.log("hello");

let heading = document.getElementsByTagName("h1");

// var i = 0;
// function display() {
//     console.log("hii");
//     console.log("rbu");
//     i++;
//     console.log(i);
//     heading[0].innerHTML = i;
//     let div = document.getElementsByTagName("div");
//     //  div[0].style.backgroundColor="green";
//     div[0].classList.toggle("green");
// }

let btn=document.getElementsByTagName("button");
var i=0;
btn[0].addEventListener("click",(e)=>{
     let div = document.getElementsByTagName("div");
    div[0].classList.toggle("green");

let heading=document.getElementsByTagName("h1");
i++;
heading[0].innerHTML=i;    
})