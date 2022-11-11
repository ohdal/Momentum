const IMAGE_COUNT = 3

const chosenImage = Math.floor(Math.random() * IMAGE_COUNT);

// const bgImage = document.createElement("img");
// bgImage.src = `images/bg_${chosenImage}.jpg`
// bgImage.id = "background"

// document.body.appendChild(bgImage)

document.body.background = `./images/bg_${chosenImage}.jpg`
