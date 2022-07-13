
let head = document.getElementById("header");
window.onscroll= function(){
    if(scrollY>=20){
        head.style.opacity=".7";

    }
    else{
        head.style.opacity="1";
    }
}
