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

if (campus === 'nantes') {
 for (let i = 0; i < foodNantes.length; i++) {
      nantes += CreateCard(foodNantes[i]).outerHTML;
 }
  cards.innerHTML = nantes;

} else if (campus === 'paris') {
  for (let i = 0; i < foodParis.length; i++) {
      paris += CreateCard(foodParis[i]).outerHTML;
  }
  cards.innerHTML = paris;
  
} else if (campus === 'lyon') {
  for (let i = 0; i < foodLyon.length; i++) {
    lyon += CreateCard(foodLyon[i]).outerHTML;
  }
  cards.innerHTML = lyon;

}

// switch (campus) {
//   case 'nantes':
//     for (let i = 0; i < foodNantes.length; i++) {
//       nantes += CreateCard(foodNantes[i]).outerHTML;
//     }
//     cards.innerHTML = nantes;
//     break;
//   case 'paris':
//     for (let i = 0; i < foodParis.length; i++) {
//       paris += CreateCard(foodParis[i]).outerHTML;
//     }
//     cards.innerHTML = paris
//     break;
//   case 'lyon':
//     for (let i = 0; i < foodLyon.length; i++) {
//       lyon += CreateCard(foodLyon[i]).outerHTML;
//     }
//     cards.innerHTML = lyon;
//     break;
// }


// console.log(campus);
// ;

//   let Vegans = [];


//   vegan.addEventListener("change", () => {
//       if (vegan.checked === true) {
    
//           Vegans = foodLyon.filter(
//               (restaurant) => restaurant.regime === 'végétarien'
//           );
//           console.log("Voici vos restaurant vegetarien");
//       } else {
//           Vegans = foodLyon;  
//           console.log("MEEP");
//       }

//       genererPieces(Vegans);  
//   });


//   document.querySelector(".cards-container").innerHTML = lyon;


//   function genererPieces(foodLyon) {
//     const container = document.querySelector(".cards-container");
//     container.innerHTML = "";  
    
//     foodLyon.forEach((restaurant) => {
//       const cardHTML = CreateCard(restaurant);  
//       container.append(cardHTML);  
//     });
//   }


//   fastFood.addEventListener("change", () => {
//       if (fastFood.checked === true) {
    
//           Vegans = foodLyon.filter(
//               (restaurant) => restaurant.type === 'fast-food'
//           );
//           console.log("Voici vos restaurant vegetarien");
//       } else {
//           Vegans = foodLyon;  
//           console.log("MEEP");
//       }

//       genererPieces(Vegans);  
//   });


//   document.querySelector(".cards-container").innerHTML = lyon;


//   function genererPieces(foodLyon) {
//     const container = document.querySelector(".cards-container");
//     container.innerHTML = "";  
    
//     foodLyon.forEach((restaurant) => {
//       const cardHTML = CreateCard(restaurant);  
//       container.append(cardHTML);  
//     });
//   }




//   boulangerie.addEventListener("change", () => {
//       if (boulangerie.checked === true) {
    
//         Vegans = foodLyon.filter(
//               (restaurant) => restaurant.type === 'boulangerie'
//           );
//           console.log("Voici vos restaurant vegetarien");
//       } else {
//           Vegans = foodLyon;  
//           console.log("MEEP");
//       }

//       genererPieces(Vegans);  
//   });


//   document.querySelector(".cards-container").innerHTML = lyon;


//   function genererPieces(foodLyon) {
//     const container = document.querySelector(".cards-container");
//     container.innerHTML = "";  
    
//     foodLyon.forEach((restaurant) => {
//       const cardHTML = CreateCard(restaurant);  
//       container.append(cardHTML);  
//     });
//   }


//   restaurant.addEventListener("change", () => {
//       if (restaurant.checked === true) {
    
//           Vegans = foodLyon.filter(
//               (restaurant) => restaurant.type === 'restaurant'
//           );
//           console.log("Voici vos restaurant vegetarien");
//       } else {
//           Vegans = foodLyon;  
//           console.log("MEEP");
//       }

//       genererPieces(Vegans);  
//   });


//   document.querySelector(".cards-container").innerHTML = lyon;


//   function genererPieces(foodLyon) {
//     const container = document.querySelector(".cards-container");
//     container.innerHTML = "";  
    
//     foodLyon.forEach((restaurant) => {
//       const cardHTML = CreateCard(restaurant);  
//       container.append(cardHTML);  
//     });
//   }


//   bistro.addEventListener("change", () => {
//       if (bistro.checked === true) {
    
//           Vegans = foodLyon.filter(
//               (restaurant) => restaurant.type === 'bistro'
//           );
//           console.log("Voici vos restaurant vegetarien");
//       } else {
//           Vegans = foodLyon;  
//           console.log("MEEP");
//       }

//       genererPieces(Vegans);  
//   });


//   document.querySelector(".cards-container").innerHTML = lyon;


//   function genererPieces(foodLyon) {
//     const container = document.querySelector(".cards-container");
//     container.innerHTML = "";  
    
//     foodLyon.forEach((restaurant) => {
//       const cardHTML = CreateCard(restaurant);  
//       container.append(cardHTML);  
//     });
//   }
  
  //Filtre Paris
  //let Vegans = [];


  // vegan.addEventListener("change", () => {
  //     if (vegan.checked === true) {
    
  //         Vegans = foodParis.filter(
  //             (restaurant) => restaurant.regime === 'végétarien'
  //         );
  //         console.log("Voici vos restaurant vegetarien");
  //     } else {
  //         Vegans = foodParis;  
  //         console.log("MEEP");
  //     }

  //     genererPieces(Vegans);  
  // });


  // document.querySelector(".cards-container").innerHTML = lyon;


  // function genererPieces(foodParis) {
  //   const container = document.querySelector(".cards-container");
  //   container.innerHTML = "";  
    
  //   foodParis.forEach((restaurant) => {
  //     const cardHTML = CreateCard(restaurant);  
  //     container.append(cardHTML);  
  //   });
  // }


  // fastFood.addEventListener("change", () => {
  //     if (fastFood.checked === true) {
    
  //         Vegans = foodParis.filter(
  //             (restaurant) => restaurant.type === 'fast-food'
  //         );
  //         console.log("Voici vos restaurant vegetarien");
  //     } else {
  //         Vegans = foodParis;  
  //         console.log("MEEP");
  //     }

  //     genererPieces(Vegans);  
  // });


  // document.querySelector(".cards-container").innerHTML = paris;


  // function genererPieces(foodParis) {
  //   const container = document.querySelector(".cards-container");
  //   container.innerHTML = "";  
    
  //   foodParis.forEach((restaurant) => {
  //     const cardHTML = CreateCard(restaurant);  
  //     container.append(cardHTML);  
  //   });
  // }




  // boulangerie.addEventListener("change", () => {
  //     if (boulangerie.checked === true) {
    
  //       Vegans = foodParis.filter(
  //             (restaurant) => restaurant.type === 'boulangerie'
  //         );
  //         console.log("Voici vos restaurant vegetarien");
  //     } else {
  //         Vegans = foodParis;  
  //         console.log("MEEP");
  //     }

  //     genererPieces(Vegans);  
  // });


  // document.querySelector(".cards-container").innerHTML = paris;


  // function genererPieces(foodParis) {
  //   const container = document.querySelector(".cards-container");
  //   container.innerHTML = "";  
    
  //   foodParis.forEach((restaurant) => {
  //     const cardHTML = CreateCard(restaurant);  
  //     container.append(cardHTML);  
  //   });
  // }


  // restaurant.addEventListener("change", () => {
  //     if (restaurant.checked === true) {
    
  //         Vegans = foodParis.filter(
  //             (restaurant) => restaurant.type === 'restaurant'
  //         );
  //         console.log("Voici vos restaurant vegetarien");
  //     } else {
  //         Vegans = foodParis;  
  //         console.log("MEEP");
  //     }

  //     genererPieces(Vegans);  
  // });


  // document.querySelector(".cards-container").innerHTML = paris;


  // function genererPieces(foodParis) {
  //   const container = document.querySelector(".cards-container");
  //   container.innerHTML = "";  
    
  //   foodParis.forEach((restaurant) => {
  //     const cardHTML = CreateCard(restaurant);  
  //     container.append(cardHTML);  
  //   });
  // }


  // bistro.addEventListener("change", () => {
  //     if (bistro.checked === true) {
    
  //         Vegans = foodParis.filter(
  //             (restaurant) => restaurant.type === 'bistro'
  //         );
  //         console.log("Voici vos restaurant vegetarien");
  //     } else {
  //         Vegans = foodParis;  
  //         console.log("MEEP");
  //     }

  //     genererPieces(Vegans);  
  // });


  // document.querySelector(".cards-container").innerHTML = paris;


  // function genererPieces(foodParis) {
  //     const container = document.querySelector(".cards-container");
  //   container.innerHTML = "";  
    
  //   foodParis.forEach((restaurant) => {
  //     const cardHTML = CreateCard(restaurant);  
  //     container.append(cardHTML);  
  //   });
  // }

  // Filtre Nantes
  // let Vegans = [];
  


//   vegan.addEventListener("change", () => {
//     if (vegan.checked === true) {
  
//         Vegans = foodNantes.filter(
//             (restaurant) => restaurant.regime === 'végétarien'
//         );
//         console.log("Voici vos restaurant vegetarien");
//     } else {
//         Vegans = foodNantes;  
//         console.log("MEEP");
//     }

//     genererPieces(Vegans);  
// });


// document.querySelector(".cards-container").innerHTML = nantes;


// function genererPieces(foodNantes) {
//   const container = document.querySelector(".cards-container");
//   container.innerHTML = "";  
  
//   foodNantes.forEach((restaurant) => {
//     const cardHTML = CreateCard(restaurant);  
//     container.append(cardHTML);  
//   });
// }


// fastFood.addEventListener("change", () => {
//     if (fastFood.checked === true) {
  
//         Vegans = foodNantes.filter(
//             (restaurant) => restaurant.type === 'fast-food'
//         );
//         console.log("Voici vos restaurant vegetarien");
//     } else {
//         Vegans = foodNantes;  
//         console.log("MEEP");
//     }

//     genererPieces(Vegans);  
// });


// document.querySelector(".cards-container").innerHTML = nantes;


// function genererPieces(foodNantes) {
//   const container = document.querySelector(".cards-container");
//   container.innerHTML = "";  
  
//   foodNantes.forEach((restaurant) => {
//     const cardHTML = CreateCard(restaurant);  
//     container.append(cardHTML);  
//   });
// }




// boulangerie.addEventListener("change", () => {
//     if (boulangerie.checked === true) {
  
//       Vegans = foodNantes.filter(
//             (restaurant) => restaurant.type === 'boulangerie'
//         );
//         console.log("Voici vos restaurant vegetarien");
//     } else {
//         Vegans = foodNantes;  
//         console.log("MEEP");
//     }

//     genererPieces(Vegans);  
// });


// document.querySelector(".cards-container").innerHTML = nantes;


// function genererPieces(foodNantes) {
//   const container = document.querySelector(".cards-container");
//   container.innerHTML = "";  
  
//   foodNantes.forEach((restaurant) => {
//     const cardHTML = CreateCard(restaurant);  
//     container.append(cardHTML);  
//   });
// }


// restaurant.addEventListener("change", () => {
//     if (restaurant.checked === true) {
  
//         Vegans = foodNantes.filter(
//             (restaurant) => restaurant.type === 'restaurant'
//         );
//         console.log("Voici vos restaurant vegetarien");
//     } else {
//         Vegans = foodNantes;  
//         console.log("MEEP");
//     }

//     genererPieces(Vegans);  
// });


// document.querySelector(".cards-container").innerHTML = nantes;


// function genererPieces(foodNantes) {
//   const container = document.querySelector(".cards-container");
//   container.innerHTML = "";  
  
//   foodNantes.forEach((restaurant) => {
//     const cardHTML = CreateCard(restaurant);  
//     container.append(cardHTML);  
//   });
// }


// bistro.addEventListener("change", () => {
//     if (bistro.checked === true) {
  
//         Vegans = foodNantes.filter(
//             (restaurant) => restaurant.type === 'bistro'
//         );
//         console.log("Voici vos restaurant vegetarien");
//     } else {
//         Vegans = foodNantes;  
//         console.log("MEEP");
//     }

//     genererPieces(Vegans);  
// });


// document.querySelector(".cards-container").innerHTML = nantes;


// function genererPieces(foodNantes) {
//   const container = document.querySelector(".cards-container");
//   container.innerHTML = "";  
  
//   foodNantes.forEach((restaurant) => {
//     const cardHTML = CreateCard(restaurant);  
//     container.append(cardHTML);  
//   });
// }

