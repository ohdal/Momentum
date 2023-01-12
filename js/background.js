const IMAGE_COUNT = 12

let images = [];
let currentImage = null

function randomiIndex(cnt) {
    return Math.floor(Math.random() * cnt);
}

function setBackground(idx) {
    currentImage = idx;
    document.body.background = `./images/background/bg_${idx}.jpg`;
}

function imgPreload() {
    for (let i = 0; i < IMAGE_COUNT; i++) {
        images[i] = new Image();
        images[i].src = `./images/background/bg_${i}.jpg`;
    }
}

// 이미지 Element 생성해서 body에 child로 붙이기 (강의에서) 
// const bgImage = document.createElement("img");
// bgImage.src = `images/bg_${chosenImage}.jpg`
// bgImage.id = "background"

// document.body.appendChild(bgImage)

document.body.addEventListener("click", (e) => {
    if (e.target.tagName === "BODY") {
        let temp = randomiIndex(IMAGE_COUNT);

        while (currentImage === temp) {
            temp = randomiIndex(IMAGE_COUNT);
        }
        setBackground(IMAGE_URL, temp, IMAGE_FORM);
    }
})


imgPreload();
setBackground(randomiIndex(IMAGE_COUNT));
