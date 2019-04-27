const color1=document.querySelector("#color1");
const color2=document.querySelector("#color2");
const body=document.querySelector("#gradient");


color1.addEventListener("input",change);
color2.addEventListener("input",change);
function change(){
	
	body.style.background=`linear-gradient(to right, ${color1.value} , ${color2.value})`
}