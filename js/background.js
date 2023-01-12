const IMAGE_COUNT = 3
let currentImage = null

function randomiIndex(cnt) {
    return Math.floor(Math.random() * cnt);
}

function setBackground(idx) {
    currentImage = idx;
    document.body.background = `./images/background/bg_${idx}.jpg`
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

        setBackground(temp);
    }
})

setBackground(randomiIndex(IMAGE_COUNT));
