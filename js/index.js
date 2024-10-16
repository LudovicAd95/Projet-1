let paris ="";
let nantes ="";
let lyon ="";


const cards = document.querySelector(".cards-container");
const select = document.querySelector(".select");
const checkbox = document.querySelectorAll(".checkbox-regime-vegan, .checkbox-Restaurant, .checkbox-FastFood, .checkbox-Boulangerie, .checkbox-Bistrot");

let campus = "";
const path = window.location.pathname;

if (path.includes("paris")) {
  campus = "paris";
} else if (path.includes("nantes")) {
  campus = "nantes";
} else if (path.includes("lyon")) {
  campus = "lyon";
}

switch (campus) {
  case 'nantes':
    for (let i = 0; i < foodNantes.length; i++) {
      nantes += CreateCard(foodNantes[i]).outerHTML;
    }
    cards.innerHTML = nantes;
    break;
  case 'paris':
    for (let i = 0; i < foodParis.length; i++) {
      paris += CreateCard(foodParis[i]).outerHTML;
    }
    cards.innerHTML = paris
    break;
  case 'lyon':
    for (let i = 0; i < foodLyon.length; i++) {
      lyon += CreateCard(foodLyon[i]).outerHTML;
    }
    cards.innerHTML = lyon;
    break;
}
;

// vegan.addEventListener("click", () => {
//     let Vegans = foodLyon.filter(
//         (vegan => foodLyon.regime === 'végétarien');
//     )
//     console.log(Vegans);
    
// }
    
vegan.addEventListener("change", () => {
    let Vegans = [];

    if (vegan.checked === true) {
        Vegans = foodLyon.filter(
            (restaurant) => restaurant.regime === 'végétarien'
        );
        console.log(Vegans);
    } else {
        console.log("Aucun filtre Vegan n'est appliqué.");
    }
});

