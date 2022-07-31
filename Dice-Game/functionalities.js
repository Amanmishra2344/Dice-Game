var randomvariable1 = Math.floor(Math.random() * 6) + 1;
var randomimg1 = "images/dice" + randomvariable1 + ".png";
document.querySelector(".img1").setAttribute("src", randomimg1);

var randomvariable2 = Math.floor(Math.random() * 6) + 1;
var randomimg2 = "images/dice" + randomvariable2 + ".png";
document.querySelector(".img2").setAttribute("src", randomimg2);

if(randomvariable1 > randomvariable2){
    document.querySelector("h1").textContent = "🚩Player 1 wins";
}
else if(randomvariable1 < randomvariable2){
    document.querySelector("h1").textContent = "Player 2 wins🚩";
}
else{
    document.querySelector("h1").textContent = "🚩It's a Draw🚩";
}