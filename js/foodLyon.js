const foodLyon = [
	{
		nom: "Le Terminal Kebab",
		adresse: "14 Cr Charlemagne, Lyon",
		distance: "350 m",
		description:
			"Comptoir de restauration rapide turc au cadre convivial offrant des kebabs, des tacos et des sandwiches halal.",
		prix: "0-10€",
		telephone: "09 80 61 17 00",
		note: "4.3",
		regime: "",
		type: "fast-food",
	},

	{
		nom: "Extratime extra food",
		adresse: "60 Cr Charlemagne, Lyon",
		distance: "600 m",
		description:
			"Restaurant rapide proposant burgers, sandwiches, tacos ou tortillas à composer soi-même à base de grillades.",
		prix: "0-10€",
		telephone: "04 78 37 00 31",
		note: "4.4",
		regime: "",
		type: "fast-food",
	},

	{
		nom: "Burger King",
		adresse: "Centre Commercial Lyon Confluence, 112 Cr Charlemagne, Lyon",
		distance: "1,3 km",
		description:
			"Célèbre chaîne de restauration rapide servant des hamburgers grillés, des frites et des milk-shakes.",
		prix: "10-20€",
		telephone: "04 82 25 02 95",
		note: "4.1",
		regime: "végétarien",
		type: "fast-food",
	},

	{
		nom: "Fresh Burritos Foodtrip Mexicain",
		adresse: "24 Av. Berthelot, Lyon",
		distance: "1,1 km",
		description:
			"Restaurants mexicains : Burritos, Tacos, Nachos, Salades et Chilis préparés sous vos yeux par nos équipiers.",
		prix: "10-20€",
		telephone: "04 72 70 06 80",
		note: "4.1",
		regime: "",
		type: "fast-food",
	},

	{
		nom: "Eden Food",
		adresse: "17 Rue Renan, Lyon",
		distance: "3 km",
		description: "Une restauration rapide savoureuse vous attend.",
		prix: "10-20€",
		telephone: "09 84 05 63 21",
		note: "4.3",
		regime: "",
		type: "fast-food",
	},

	{
		nom: "Kusadasi 2",
		adresse: "25 Cr Suchet, Lyon",
		distance: "230 m",
		description:
			"Excellents plats et boissons, tels que de superbes kebabs et des boissons fraîches",
		prix: "10-20€",
		telephone: "04 82 31 12 47",
		note: "4.4",
		regime: "végétarien",
		type: "fast-food",
	},

	{
		nom: "Rem's Burgers",
		adresse: "21 Quai Perrache, Lyon",
		distance: "350 m",
		description:
			"Ce pub cosy sur les rives d'un fleuve sert des burgers avec des frites et une garniture généreuse, de la bière ainsi que du whisky.",
		prix: "20–30€",
		telephone: "09 86 45 13 10",
		note: "4.7",
		regime: "",
		type: "fast-food",
	},

	{
		nom: "La Maison Du Goût",
		adresse: "7 Cr Charlemagne, Lyon",
		distance: "300 m",
		description:
			"La Maison du Goût est une enseigne incontournable dans le domaine de la boulangerie-pâtisserie sandwicherie artisanale.",
		prix: "0-10€",
		telephone: "04 78 37 48 35",
		note: "4.6",
		regime: "",
		type: "boulangerie",
	},

	{
		nom: "1 BRIN 2 DOUCEUR",
		adresse: "19 Rue Delandine, Lyon",
		distance: "26 m",
		description:
			"1 BRIN 2 DOUCEUR est une boulangerie artisanale où l’authenticité et le goût sont au cœur de chaque création. Avec une sélection de pains, patisseries et sandwichs",
		prix: "0-10€",
		telephone: "04 78 37 89 63",
		note: "4.9",
		regime: "",
		type: "boulangerie",
	},

	{
		nom: "PAUL",
		adresse: "14 Cr de Verdun Perrache, Lyon",
		distance: "450 m",
		description: "Service rapide de pains, pâtisseries et sandwiches.",
		prix: "0-10€",
		telephone: "09 70 19 93 56",
		note: "3.3",
		regime: "",
		type: "boulangerie",
	},

	{
		nom: "Restaurant Café du Soleil",
		adresse: " Rue Saint-Georges, Lyon",
		distance: "2,8 km",
		description:
			"Restaurant historique avec terrasse proposant des spécialités régionales traditionnelles.",
		prix: "20-30€",
		telephone: "04 78 37 60 02",
		note: "4.8",
		regime: "",
		type: "restaurant",
	},

	{
		nom: "Takumi",
		adresse: "50 Rue Franklin, Lyon",
		distance: "1 km",
		description:
			"Ce restaurant propose une cuisine rustique, généreuse et de qualité dans la tradition du bouchon.",
		prix: "10-20€",
		telephone: "09 82 49 79 20",
		note: "4.6",
		regime: "végétarien",
		type: "restaurant",
	},

	{
		nom: "The Hill Club",
		adresse: "12 Rue Marc-Antoine Petit, Lyon",
		distance: "210 m",
		description:
			"Hill Club propose un concept novateur basé sur la cuisine Californienne.",
		prix: "20-30€",
		telephone: "06 37 91 21 00",
		note: "4.7",
		regime: "végétarien",
		type: "restaurant",
	},

	{
		nom: "Point Nommé",
		adresse: "26 Cr Suchet, Lyon",
		distance: "400 m",
		description:
			"Plats français le midi, boissons artisanales et planches apéritives le soir dans cette cantine artistique.",
		prix: "20-30€",
		telephone: "09 87 10 34 32",
		note: "4.6",
		regime: "végétarien",
		type: "restaurant",
	},

	{
		nom: "En Voûte Et Moi",
		adresse: "5 Rue Denuzière, Lyon",
		distance: "550 m",
		description:
			"En Voûte et Moi est un restaurant qui propose une expérience culinaire française authentique.",
		prix: "20-30€",
		telephone: "04 78 37 04 37",
		note: "4.7",
		regime: "végétarien",
		type: "restaurant",
	},

	{
		nom: "L’Antre Amis",
		adresse: "9 Rue Denuzière, Lyon",
		distance: "550 m",
		description:
			"Cuisine française chaleureuse avec un peu d'originalité dans le choix des produits.",
		prix: "20-30€",
		telephone: "04 78 82 66 59",
		note: "4.8",
		regime: "végétarien",
		type: "restaurant",
	},

	{
		nom: "Monna Lisa",
		adresse: "44-46 Cr Charlemagne, Lyon",
		distance: "450 m",
		description:
			"Salon de thé chaleureux avec terrasse proposant des desserts, et un menu de salades et plats végétariens et diététiques.",
		prix: "20-30€",
		telephone: "04 72 40 00 07",
		note: "3.6",
		regime: "végétarien",
		type: "restaurant",
	},

	{
		nom: "Eat Salad",
		adresse: "87 Rue Smith, Lyon",
		distance: "1 km",
		description:
			"Restaurant salade sur mesure, Eat Salad vous propose un choix varié de plats sur mesure à composer soi-même.",
		prix: "20-30€",
		telephone: "09 69 36 77 10",
		note: "4.4",
		regime: "végétarien",
		type: "restaurant",
	},

	{
		nom: "Le Bistrot Nicéphore",
		adresse: "33 Rue de Trion, Lyon",
		distance: "2 km",
		description: "Un bistrot typique où le bien manger côtoie le bien boire .",
		prix: "20–30€",
		telephone: "04 78 36 39 48",
		note: "4.8",
		regime: "",
		type: "bistro",
	},

	{
		nom: "RétroBistro",
		adresse: "1 Rue des Macchabées, Lyon",
		distance: "2 km",
		description:
			"Savourez le menu changeant et varié de midi, avec un éventail de deux entrées, trois plats principaux, et deux desserts à la carte.",
		prix: "20-30€",
		telephone: "09 54 30 47 58",
		note: "4.9",
		regime: "",
		type: "bistro",
	},

	{
		nom: "Le Bistrot d'Odette",
		adresse: "101 Av. Maréchal de Saxe, Lyon",
		distance: "2,6 km",
		description:
			"Restaurant chaleureux et décontracté proposant café, cuisine de brasserie française, vin, et planches de fromage et de charcuterie.",
		prix: "20-30€",
		telephone: "09 81 60 56 17",
		note: "4.6",
		regime: "",
		type: "bistro",
	},

	{
		nom: "Bistro Martine",
		adresse: "4 Rue d'Enghien, Lyon",
		distance: "1,1 km",
		description:
			"Lieu typiquement français avec une atmosphère conviviale, un service rapide et des plats traditionnels.",
		prix: "20-30€",
		telephone: "04 37 57 03 98",
		note: "4.6",
		regime: "",
		type: "bistro",
	},
];



  let Vegans = [];


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

const vegan = document.getElementById("vegan");
const fastFood = document.getElementById("fastFood");
const boulangerie = document.getElementById("boulangerie");
const restaurant = document.getElementById("restaurant");
const bistro = document.getElementById("bistro");

function genererPieces(restaurants) {
  const container = document.querySelector(".cards-container");
  container.innerHTML = "";  // Vider le container avant d'ajouter des nouvelles cartes

  restaurants.forEach((restaurant) => {
    const cardHTML = CreateCard(restaurant);  // Fonction de création de carte
    container.append(cardHTML);
  });
}

// Filtre par régime végétarien
vegan.addEventListener("change", () => {
  if (vegan.checked === true) {
    Vegans = foodLyon.filter(
      (restaurant) => restaurant.regime === 'végétarien'
    );
  } else {
    Vegans = foodLyon;
  }
  genererPieces(Vegans);  
});

// Filtre par type fast-food
fastFood.addEventListener("change", () => {
  if (fastFood.checked === true) {
    Vegans = foodLyon.filter(
      (restaurant) => restaurant.type === 'fast-food'
    );
  } else {
    Vegans = foodLyon;
  }
  genererPieces(Vegans);
});

// Filtre par type boulangerie
boulangerie.addEventListener("change", () => {
  if (boulangerie.checked === true) {
    Vegans = foodLyon.filter(
      (restaurant) => restaurant.type === 'boulangerie'
    );
  } else {
    Vegans = foodLyon;
  }
  genererPieces(Vegans);
});

// Filtre par type restaurant
restaurant.addEventListener("change", () => {
  if (restaurant.checked === true) {
    Vegans = foodLyon.filter(
      (restaurant) => restaurant.type === 'restaurant'
    );
  } else {
    Vegans = foodLyon;
  }
  genererPieces(Vegans);
});

// Filtre par type bistro
bistro.addEventListener("change", () => {
  if (bistro.checked === true) {
    Vegans = foodLyon.filter(
      (restaurant) => restaurant.type === 'bistro'
    );
  } else {
    Vegans = foodLyon;
  }
  genererPieces(Vegans);
});


