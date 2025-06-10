let header = document.querySelector("h1");
let button = document.querySelector("button");
let img = document.querySelector("img");

// 1. Press the button on the webpage to change it up! Take notice of what happens.
// - What do you think innerHTML does?
// it gets the code within html and change it
// - What do you think .src does?
//source attribute

// 2. Try the following:
// - Make it so that the header says your name when the button is clicked.
// - Change the src of the image to something random.
button.addEventListener("click", function() {
    header.innerHTML = "🤯 karo!";
    img.src = "https://media.tenor.com/MKkJWYigjycAAAAM/cute-cat-cat-cute.gif";
});


