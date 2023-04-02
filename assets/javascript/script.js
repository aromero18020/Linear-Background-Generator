const cssText = document.querySelector("h3");
const color1 = document.querySelector(".color1");
const color2 = document.querySelector(".color2");
const body = document.getElementById("gradient");
const randomButton = document.getElementById("random");

function setGradient() {
    body.style.background = "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";
    cssText.textContent = "background: " + body.style.background + ";";
}

function setRandomGradient() {
    const randomColor1 = '#' + Math.floor(Math.random()*16777215).toString(16);
    const randomColor2 = '#' + Math.floor(Math.random()*16777215).toString(16);
    color1.value = randomColor1;
    color2.value = randomColor2;
    setGradient();
}

color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);
randomButton.addEventListener("click", setRandomGradient);

window.addEventListener("load", function() {
    // Get the initial background color
    const computedStyle = getComputedStyle(body);
    const initialBackground = computedStyle.backgroundImage;

    // Extract the initial color values from the background property
    const colorValues = initialBackground.match(/#[0-9a-fA-F]{6}/g);

    // Set the values of the color inputs to the initial color values
    color1.value = colorValues[0];
    color2.value = colorValues[1];

    // Call the setGradient function to update the background and CSS text
    setGradient();
});