const images = ["chihiro043.jpg", "karigurashi021.jpg", "majo002.jpg", "majo011.jpg", "majo028.jpg", "majo043.jpg", "ponyo038.jpg", "totoro036.jpg"];

const chosenImage = images[Math.floor(Math.random() * images.length)];

// console.log(chosenImage);
const bgImage = document.createElement("img");

bgImage.src = `img/${chosenImage}`;

// console.log(bgImage);
document.body.appendChild(bgImage);