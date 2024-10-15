
const foodParis = [
	{
		nom: "Annali",
		adresse: "74 Rue Belgrand, Paris",
		distance: "550 m",
		description:
			"Gastronomie libanaise avec la meilleure saveur de shawarma et d'autres plats spéciaux.",
		prix: "0-10€",
		telephone: "06 74 35 35 34",
		note: "4.9",
		regime: "",
		type: "fast-food",
	},

	{
		nom: "Dream Food",
		adresse: "41 Rue Mouraud, Paris",
		distance: "1,5 km",
		description:
			"Sur place ou à emporter, carte de restauration rapide avec des plats tels que pizzas, hamburgers et salades.",
		prix: "0-10€",
		telephone: "01 43 67 03 04",
		note: "4.0",
		regime: "",
		type: "fast-food",
	},

	{
		nom: "Ben's Coffee",
		adresse: "64 Rue Belgrand, Paris",
		distance: "650 m",
		description:
			"Découvrez le restaurant halal Ben's Coffee à Paris. Spécialités : Brasserie · Burger · Fast-food · Tex-mex · Pâtes.",
		prix: "10-20€",
		telephone: "01 73 77 38 55",
		note: "4.0",
		regime: "",
		type: "fast-food",
	},

	{
		nom: "McDonald's",
		adresse: "Place Gambetta, 7 Face Mairie du, Paris",
		distance: "900 m",
		description:
			"Chaîne classique de restauration rapide établie de longue date connue pour ses burgers et ses frites.",
		prix: "0-10€",
		telephone: "01 46 36 00 66",
		note: "3.7",
		regime: "",
		type: "fast-food",
	},

	{
		nom: "Crispy Soul",
		adresse: "75 Rue Léon Frot, Paris",
		distance: "2,6 km",
		description:
			"Restaurant simple servant des sandwichs originaux aux gaufres et poulet frit, ainsi que des burgers et des gaufres sucrées.",
		prix: "10-20€",
		telephone: "01 84 60 50 90",
		note: "4.7",
		regime: "",
		type: "fast-food",
	},

	{
		nom: "Tonton Banh Mi Sandwicherie Vietnamienne",
		adresse: "53 Rue du Chemin Vert, Paris",
		distance: "2,6 km",
		description:
			"Venez découvrir notre menu varié qui propose une gamme de plats traditionnels comme le Banh Mi, le Pho, le Bo Bun et bien plus encore.",
		prix: "0-10€",
		telephone: "",
		note: "4.8",
		regime: "",
		type: "fast-food",
	},

	{
		nom: "31 Street",
		adresse: "1 Vla Gaudelet, Paris",
		distance: "2,4 km",
		description:
			"Les Burgers Gourmets. Venez découvrir les incontournables : le Perfect Mac Chicken, le Egg Bacon Cheeseburger, le Veggie, encore l'irrésistible Chèvre Miel.",
		prix: "10–20€",
		telephone: "01 43 55 48 94",
		note: "4.6",
		regime: "végétarien",
		type: "fast-food",
	},

	{
		nom: "Amie Baguette",
		adresse: "5 Pl. Octave Chanute, Paris",
		distance: "300 m",
		description:
			"Boulangerie avec une carte variée. Notre cuisine française riche en traditions vous offre une variété de plats délicieux et fraîchement préparés.",
		prix: "0-10€",
		telephone: "07 51 50 10 31",
		note: "4.5",
		regime: "",
		type: "boulangerie",
	},

	{
		nom: "Le Délice de Bagnolet",
		adresse: "42 Bd Mortier, Paris",
		distance: "400 m",
		description:
			"Le Délice de Bagnolet est une boulangerie locale où l’artisanat et la tradition se rencontrent pour offrir une variété de pains et de viennoiseries fraîchement préparés chaque jour. ",
		prix: "0-10€",
		telephone: "01 48 32 28 12",
		note: "4.3",
		regime: "",
		type: "boulangerie",
	},

	{
		nom: "Pilo’s",
		adresse: "1 Av. du Père Lachaise, Paris",
		distance: "1 km",
		description: "Pâtisserie artisanale et spécialités argentine.",
		prix: "0-10€",
		telephone: "09 51 43 35 52",
		note: "3.4",
		regime: "",
		type: "boulangerie",
	},

	{
		nom: "Sushi King",
		adresse: "32 Rue Pelleport, Paris",
		distance: "700 m",
		description:
			"Un petit restaurant japonais dans le XX° arrondissement qui propose des menus variés et peu chers.",
		prix: "10-20€",
		telephone: "09 72 84 46 10",
		note: "4.7",
		regime: "",
		type: "restaurant",
	},

	{
		nom: "Grill House",
		adresse: "9 Pl. de l'Adjudant Vincenot, Paris",
		distance: "350 m",
		description:
			"Grill HouseSitué au cœur de Paris, le Grill House est un restaurant qui célèbre la cuisine française avec un accent particulier sur les grillades.",
		prix: "20-30€",
		telephone: "09 83 89 74 52",
		note: "4.7",
		regime: "",
		type: "restaurant",
	},

	{
		nom: "O’gourmet",
		adresse: "139 Bd Davout, Paris",
		distance: "1,3 km",
		description:
			"Situé dans un quartier animé, ce restaurant propose une fusion audacieuse de cuisines africaine, américaine et indienne.",
		prix: "10-20€",
		telephone: "09 80 85 37 58",
		note: "4.5",
		regime: "",
		type: "restaurant",
	},

	{
		nom: "Brutti E Cattivi",
		adresse: "6 Rue du Surmelin, Paris",
		distance: "350 m",
		description: "Cuisine italienne chaleureuse, avec un large choix de pizza.",
		prix: "20–30€",
		telephone: "09 81 68 39 36",
		note: "4.7",
		regime: "",
		type: "restaurant",
	},

	{
		nom: "Shingané",
		adresse: "63 Av. Gambetta, 75020 Paris",
		distance: "1 km",
		description:
			"Dans un cadre zen et boisé à l'ambiance traditionnelle, ce restaurant sert des spécialités coréennes maison.",
		prix: "20-30€",
		telephone: "04 78 37 04 37",
		note: "4.4",
		regime: "",
		type: "restaurant",
	},

	{
		nom: "Cantine Sicilienne",
		adresse: "49 Rue Orfila, Paris",
		distance: "750 m",
		description:
			"Pour une pose déjeuner au boulot quoi de mieux que se plonger dans les saveur Sicilienne que nous offre La Cantine Sicilienne.",
		prix: "20-30€",
		telephone: "01 46 36 73 60",
		note: "4.2",
		regime: "végétarien",
		type: "restaurant",
	},

	{
		nom: "O'Kyoto",
		adresse: "15 Rue du Capitaine Ferber, Paris",
		distance: "400 m",
		description:
			"O'Kyoto est un restaurant de sushi situé à Paris, reconnu pour son ambiance nocturne et sa cuisine authentique japonaise.",
		prix: "10-20€",
		telephone: "01 72 60 08 47",
		note: "4.4",
		regime: "végétarien",
		type: "restaurant",
	},

	{
		nom: "Karma",
		adresse: "32 Rue Pelleport, Paris",
		distance: "1 km",
		description: "Restaurant Gastronomie Indienne.",
		prix: "10-20€",
		telephone: "01 83 56 50 49",
		note: "4.6",
		regime: "végétarien",
		type: "restaurant",
	},

	{
		nom: "Bar de la Place Edith Piaf",
		adresse: "22 Rue de la Py, Paris",
		distance: "600 m",
		description: "Restaurant chaleureux et décontracté proposant café.",
		prix: "10–20€",
		telephone: "01 43 61 09 32",
		note: "4.3",
		regime: "",
		type: "bistro",
	},

	{
		nom: "Le Pelleport Café",
		adresse: "127 Av. Gambetta, Paris",
		distance: "450 m",
		description:
			"Un bar-restaurant de quartier du 20ème, décoré avec goût, c'est l'endroit parfait pour décompresser et se retrouver entre amis.",
		prix: "20-30€",
		telephone: "01 88 61 65 62",
		note: "4.5",
		regime: "",
		type: "bistro",
	},

	{
		nom: "Le Magnolia Café",
		adresse: "29 Rue Saint-Blaise, Paris",
		distance: "1,3 km",
		description:
			"Restaurant chaleureux et décontracté proposant café, cuisine de brasserie française, vin, et planches de fromage et de charcuterie.",
		prix: "20-30€",
		telephone: "09 74 64 03 82",
		note: "4.0",
		regime: "",
		type: "bistro",
	},

	{
		nom: "Les Rêveuses",
		adresse: "15 Rue Saint-Blaise, Paris",
		distance: "1,1 km",
		description:
			"Bar, restaurant, lieu de vie un cadre agréable et très lumineux et une cave à vin 100% nature de nos régions.",
		prix: "20-30€",
		telephone: "09 54 06 23 99",
		note: "4.5",
		regime: "",
		type: "bistro",
	},
];

export default foodParis;