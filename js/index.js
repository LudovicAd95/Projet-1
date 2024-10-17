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
// ____

let Vegans = [];


vegan.addEventListener("change", () => {
    if (vegan.checked === true) {
   
        Vegans = foodLyon.filter(
            (restaurant) => restaurant.regime === 'végétarien'
        );
        console.log("Voici vos restaurant vegetarien");
    } else {
        Vegans = foodLyon;  
        console.log("MEEP");
    }

    genererPieces(Vegans);  
});


document.querySelector(".cards-container").innerHTML = lyon;


function genererPieces(foodLyon) {
  const container = document.querySelector(".cards-container");
  container.innerHTML = "";  
  
  foodLyon.forEach((restaurant) => {
    const cardHTML = CreateCard(restaurant);  
    container.append(cardHTML);  
  });
}



fastFood.addEventListener("change", () => {
    if (fastFood.checked === true) {
   
        Vegans = foodLyon.filter(
            (restaurant) => restaurant.type === 'fast-food'
        );
        console.log("Voici vos restaurant vegetarien");
    } else {
        Vegans = foodLyon;  
        console.log("MEEP");
    }

    genererPieces(Vegans);  
});


document.querySelector(".cards-container").innerHTML = lyon;


function genererPieces(foodLyon) {
  const container = document.querySelector(".cards-container");
  container.innerHTML = "";  
  
  foodLyon.forEach((restaurant) => {
    const cardHTML = CreateCard(restaurant);  
    container.append(cardHTML);  
  });
}




boulangerie.addEventListener("change", () => {
    if (boulangerie.checked === true) {
   
      Vegans = foodLyon.filter(
            (restaurant) => restaurant.type === 'boulangerie'
        );
        console.log("Voici vos restaurant vegetarien");
    } else {
        Vegans = foodLyon;  
        console.log("MEEP");
    }

    genererPieces(Vegans);  
});


document.querySelector(".cards-container").innerHTML = lyon;


function genererPieces(foodLyon) {
  const container = document.querySelector(".cards-container");
  container.innerHTML = "";  
  
  foodLyon.forEach((restaurant) => {
    const cardHTML = CreateCard(restaurant);  
    container.append(cardHTML);  
  });
}


restaurant.addEventListener("change", () => {
    if (restaurant.checked === true) {
   
        Vegans = foodLyon.filter(
            (restaurant) => restaurant.type === 'restaurant'
        );
        console.log("Voici vos restaurant vegetarien");
    } else {
        Vegans = foodLyon;  
        console.log("MEEP");
    }

    genererPieces(Vegans);  
});


document.querySelector(".cards-container").innerHTML = lyon;


function genererPieces(foodLyon) {
  const container = document.querySelector(".cards-container");
  container.innerHTML = "";  
  
  foodLyon.forEach((restaurant) => {
    const cardHTML = CreateCard(restaurant);  
    container.append(cardHTML);  
  });
}


bistro.addEventListener("change", () => {
    if (bistro.checked === true) {
   
        Vegans = foodLyon.filter(
            (restaurant) => restaurant.type === 'bistro'
        );
        console.log("Voici vos restaurant vegetarien");
    } else {
        Vegans = foodLyon;  
        console.log("MEEP");
    }

    genererPieces(Vegans);  
});


document.querySelector(".cards-container").innerHTML = lyon;


function genererPieces(foodLyon) {
  const container = document.querySelector(".cards-container");
  container.innerHTML = "";  
  
  foodLyon.forEach((restaurant) => {
    const cardHTML = CreateCard(restaurant);  
    container.append(cardHTML);  
  });
}