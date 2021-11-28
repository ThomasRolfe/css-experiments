import _ from "lodash";
import "./style.scss";
// let cardEl = document.getElementById("card");
let cards = document.getElementsByClassName("card");
document.addEventListener("mousemove", function (event) {
    let x = event.clientX;
    let y = event.clientY;

    let screenWCenter = window.innerWidth / 2;
    let screenHCenter = window.innerHeight / 2;

    let percX = (screenWCenter - x) / screenWCenter;
    let percY = (screenHCenter - y) / screenHCenter;

    let perDepth = 45;

    for (const card of cards) {
        let cardDepth = card.dataset.depth * perDepth;

        card.style.transform = `
        translateX(${cardDepth * percX}px) 
        translateY(${cardDepth * percY}px) 
        scale(${1 + card.dataset.depth / 16})
        
        `;
        card.style.boxShadow = `0px 20px 27px ${
            -17 - card.dataset.depth * 2
        }px rgb(36, 4, 73)`;
        card.style.zIndex = cardDepth;
        card.classList.add("hello");
    }
    _.camelCase("testing");
});

for (const card of cards) {
    let cardDepth = card.dataset.depth * perDepth;

    card.style.transform = `
    translateX(${cardDepth * percX}px) 
    translateY(${cardDepth * percY}px) 
    scale(${1 + card.dataset.depth / 16})
    
    `;
    card.style.boxShadow = `0px 20px 27px ${
        -17 - card.dataset.depth * 2
    }px rgb(36, 4, 73)`;
    card.style.zIndex = cardDepth;
    card.classList.add("hello");
}
