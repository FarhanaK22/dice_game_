var randomNumber=Math.floor(Math.random()*6)+1;
var diceRandomImage="dice"+randomNumber+".png";
var randomImagesourse="images/"+ diceRandomImage;

var image1= document.querySelectorAll("img")[0];
image1.setAttribute("src",randomImagesourse);

var randomNumber2=Math.floor(Math.random()*6)+1;
var diceRandomImage2="dice"+randomNumber2+".png";
var randomImagesourse2="images/"+ diceRandomImage2;
var image2= document.querySelectorAll("img")[1];
image2.setAttribute("src",randomImagesourse2);

if(randomNumber>randomNumber2)
{
    document.querySelector("h1").innerHTML="Player 1🏁 wins";
}
else if(randomNumber<randomNumber2)
{
    document.querySelector("h1").innerHTML="Player 2🏁 wins";
}
else
{document.querySelector("h1").innerHTML="Draw";
}