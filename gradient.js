let btn1 = document.getElementById("myButton1");
let btn2 = document.getElementById("myButton2");
let copyDiv = document.querySelector(".copyCode");
let rgb1 = "#000";
let rgb2 = "#fff";



const hexValues = () => {
    let myHexaVlues = "0123456789abcdef"
    let colors = "#"
    for(let i = 0; i < 6; i++){
        colors = colors + myHexaVlues[Math.floor(Math.random() * 16)];
    }
    return colors
}

const handleButton1 = () => {
    rgb1 = hexValues();
    console.log(rgb1);
    btn1.innerText = rgb1;
    applyGradient()

};

const handleButton2 = () => {
    rgb2 = hexValues();
    console.log(rgb2);
    btn2.innerText = rgb2;
    applyGradient();
};

const handleCopy = async () => {
    try {
        await navigator.clipboard.writeText(copyDiv.textContent);
        alert('Code copied successfully!');
        console.log("Copied SuccessFully");
    } catch (err) {
        console.error('Failed to copy: ', err);
    }
};

const applyGradient = () => {
    document.body.style.backgroundImage = `linear-gradient(to right, ${rgb1}, ${rgb2})`;
    copyDiv.innerHTML = `background-image: linear-gradient(to right, ${rgb1}, ${rgb2})`
}

const colorPicker1 = document.getElementById("colorPicker1");
const colorPicker2 = document.getElementById("colorPicker2");

colorPicker1.addEventListener("input", () => {
    rgb1 = colorPicker1.value;
    applyGradient();
});

colorPicker2.addEventListener("input", () => {
    rgb2 = colorPicker2.value;
    applyGradient();
});


btn1.addEventListener("click", handleButton1);
btn2.addEventListener("click", handleButton2);
copyDiv.addEventListener("click", handleCopy);