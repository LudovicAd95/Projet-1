import CreateCard from "./CreateCard.js";
import foodNantes from "./foodNantes.js";
import foodParis from "./foodParis.js";
import foodLyon from "./foodLyon.js";

let paris ="";
let nantes ="";
let lyon ="";


const cards = document.querySelector(".cards");
const select = document.querySelector(".select");
const checkbox = document.querySelectorAll(".checkbox-regime-vegan, .checkbox-Restaurant, .checkbox-FastFood, .checkbox-Boulangerie, .checkbox-Bistrot");

for (let i = 0; i < foodNantes.length; i++) {
    nantes += CreateCard (foodNantes [i]);
    }

    cards.innerHTML = nantes;

for (let i = 0; i < foodParis.length; i++) {
    paris += CreateCard (foodParis [i]);
    }

    cards.innerHTML = paris;

for (let i = 0; i < foodLyon.length; i++) {
    lyon += CreateCard (foodLyon [i]);
    }

    cards.innerHTML = lyon;

