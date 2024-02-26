let randomnumber1 = Math.floor(Math.random()*6 + 1)
let randomimage1 = "images/" + "dice" + randomnumber1 + ".png"
document.querySelector(".img1").setAttribute("src", randomimage1)

let randomnumber2 = Math.floor(Math.random()*6 + 1)
let randomimage2 = "images/" + "dice" + randomnumber2 + ".png"
document.querySelector(".img2").setAttribute("src", randomimage2)

if(randomnumber1 > randomnumber2)
{
    document.querySelector("h1").textContent = "🚩Player 1 wins!"
}
else if(randomnumber1 < randomnumber2)
{
    document.querySelector("h1").textContent = "Player 2 wins!🚩"
}
else
{
    document.querySelector("h1").textContent = "Draw!"
}

