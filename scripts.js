// let cardEl = document.getElementById("card");
let cards = document.getElementsByClassName("card");
document.addEventListener("mousemove", function (event) {
    let x = event.clientX;
    let y = event.clientY;
    console.log(x);
    let screenWCenter = window.innerWidth / 2;
    let screenHCenter = window.innerHeight / 2;
    let percX = (screenWCenter - x) / screenWCenter;
    let percY = (screenHCenter - y) / screenHCenter;
    let perDepth = 45;

    for (const card of cards) {
        let cardDepth = card.dataset.depth * perDepth;

        card.style.transform = `translateX(${cardDepth * percX}px) translateY(${
            cardDepth * percY
        }px)`;
        card.style.zIndex = cardDepth;
    }
});
