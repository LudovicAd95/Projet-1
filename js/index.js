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

//for (let i = 0; i < foodLyon.length; i++) {
//    lyon += CreateCard(foodLyon[i]).outerHTML;
//}
//     // cards.innerHTML = lyon;

// //for (let i = 0; i < foodParis.length; i++) {
//         paris += CreateCard(foodParis[i]).outerHTML;
// }   
//     // cards.innerHTML = paris;

// for (let i = 0; i < foodNantes.length; i++) {
//         nantes += CreateCard(foodNantes[i]).outerHTML;
// }

    // cards.innerHTML = nantes;


//     const pathname = window.location.pathname;

// if (pathname.includes('lyon.html')) {
//     cards.innerHTML = lyon;
// } else if (pathname.includes('paris.html')) {
//     cards.innerHTML = paris;
// } else (pathname.includes('nantes.html')) {
//     cards.innerHTML = nantes;
// }

// displayCreateCard(foodLyon[i]).outerHTML;

// function applyFilters() {
//             const vegan = document.getElementById("vegan").checked;
//             const restaurantChecked = document.getElementById("restaurant").checked;
//             const fastfoodChecked = document.getElementById("fastfood").checked;
//             const boulangerieChecked = document.getElementById("boulangerie").checked;
//             const bistrotChecked = document.getElementById("bistrot").checked;
            
//             let filteredRestaurants = restaurants.filter(resto => {
//                 let matches = true;
                
//                 if (vegan && !resto.isVegan) {
//                     matches = false;
//                 }

//                 if (restaurantChecked && resto.type !== "restaurant") {
//                     matches = false;
//                 }
//                 if (fastfoodChecked && resto.type !== "fastfood") {
//                     matches = false;
//                 }
//                 if (boulangerieChecked && resto.type !== "boulangerie") {
//                     matches = false;
//                 }
//                 if (bistrotChecked && resto.type !== "bistrot") {
//                     matches = false;
//                 }
        
//                 return matches;
//             });
        

//             displayRestaurants(filteredRestaurants);
//         }

//                 function displayRestaurants(restaurantList) {
//             let cardsHtml = "";
//             for (let i = 0; i < restaurantList.length; i++) {
//                 cardsHtml += CreateCard(restaurantList[i]);
//             }
//             cardsContainer.innerHTML = cardsHtml;
//         }

//         displayRestaurants(restaurants);

//         applyFiltersButton.addEventListener("click", applyFilters);

        