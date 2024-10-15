

const foodNantes = [
	{
		nom: "Roadside",
		adresse: "1 allée Flesselles, Nantes",
		distance: "900 m",
		description:
			"Chez Roadside, dégustez des burgers faits maison, cuisinés à partir de produits de qualité, dans une ambiance typiquement américaine.",
		prix: "10-20€",
		telephone: "02 28 29 84 40",
		note: "4.3",
		regime: "",
		type: "fast-food",
	},

	{
		nom: "Bunch",
		adresse: "15 Rue Léon Blum, Nantes",
		distance: "2 km",
		description:
			"Restaurant rapide proposant burgers, sandwiches, tacos ou tortillas à composer soi-même à base de grillades.",
		prix: "10-20€",
		telephone: "09 62 53 60 94",
		note: "4.6",
		regime: "",
		type: "fast-food",
	},

	{
		nom: "Maki Burger",
		adresse: "10 Rue de Briord, Nantes",
		distance: "1 km",
		description:
			"Maki Burger, c'est la maison qui régale, où l'on mange en famille, entre amis. Un restaurant décalé, convivial et chaleureux, où l'on mange des produits locaux et frais, pleins de saveurs et de mélanges.",
		prix: "10-20€",
		telephone: "02 72 02 55 84",
		note: "4.6",
		regime: "",
		type: "fast-food",
	},

	{
		nom: "Le Fast",
		adresse: "2 Bd de Stalingrad, Nantes",
		distance: "1,9 km",
		description: "Propose des sandwichs, burgers, kebabs halal.",
		prix: "0-10€",
		telephone: "09 75 71 64 42",
		note: "4.1",
		regime: "",
		type: "fast-food",
	},

	{
		nom: "Diner’s Burger",
		adresse: "49 bd Robert Shuman, Nantes",
		distance: "3,6 km",
		description:
			"Cette chaîne locale de fast-food propose burgers, pizzas et spécialités US dans un décor rétro à l’américaine.",
		prix: "10-20€",
		telephone: "02 40 65 50 00",
		note: "3.8",
		regime: "",
		type: "fast-food",
	},

	{
		nom: "Popolo",
		adresse: "34 rue de Coulmiers, Nantes",
		distance: "1,8 km",
		description:
			"Découvrez Popolo à Nantes. Une pizzeria artisanale italienne qui propose des produits frais, bruts et travaillés sur place.",
		prix: "10-20€",
		telephone: "07 77 28 55 93",
		note: "4.9",
		regime: "végétarien",
		type: "fast-food",
	},

	{
		nom: "Barnabé",
		adresse: "10 bd Babin Chevaye, Nantes",
		distance: "850 m",
		description: "Barnabé : une boulangerie végé et vegan friendly à Nantes.",
		prix: "0-10€",
		telephone: "06 31 61 30 32",
		note: "4.4",
		regime: "végétarien",
		type: "boulangerie",
	},

	{
		nom: "La Boulangerie d'Honoré",
		adresse: "12 Av. Carnot, Nantes",
		distance: "400 m",
		description: "Service rapide de pains, pâtisseries et sandwiches.",
		prix: "0-10€",
		telephone: "02 51 84 17 42",
		note: "4.1",
		regime: "",
		type: "boulangerie",
	},

	{
		nom: "Emma : Boulangerie Pâtisserie",
		adresse: "12 Rue Scribe, Nantes",
		distance: "2,8 km",
		description:
			"Émerveillez vos sens en goûtant les créations gourmandes 100% fait maison d'Emma : Boulangerie Pâtisserie à Nantes.",
		prix: "0-10€",
		telephone: "02 40 20 89 38",
		note: "4.5",
		regime: "",
		type: "boulangerie",
	},

	{
		nom: "ArnO boulangerie",
		adresse: "16 rue de Verdun, Nantes",
		distance: "1,2 km",
		description: "Service rapide de pains, pâtisseries et sandwiches.",
		prix: "0-10€",
		telephone: "02 40 74 83 65",
		note: "4.6",
		regime: "",
		type: "boulangerie",
	},

	{
		nom: "Margerite Boulangerie",
		adresse: "8 rue Guépin, Nantes",
		distance: "2,2 km",
		description:
			"Boulangerie Nantaise, bain bio au levain, viennoiseries maison, et casse-croûte du coin.",
		prix: "0-10€",
		telephone: "02 51 83 58 48",
		note: "4.8",
		regime: "",
		type: "boulangerie",
	},

	{
		nom: "Restaurant Maison BAKARY-AMOUSSA",
		adresse: "40 quai Magellan, Nantes",
		distance: "900 m",
		description:
			"Située à Nantes, la Maison Bakary-Amoussa est un établissement culinaire qui se spécialise dans la cuisine africaine. ",
		prix: "10-20€",
		telephone: "06 26 30 51 36",
		note: "4.7",
		regime: "",
		type: "restaurant",
	},

	{
		nom: "Ichi-go Ichi-e Ramen",
		adresse: "31 rue Fouré, Nantes",
		distance: "70 m",
		description:
			"Ichigo Ichie vous propose un panel de Ramen pour découvrir ou se replonger dans la culture Nippone. Notre spécialité: Le Tonkotsu Ramen de Hakata !",
		prix: "10-20€",
		telephone: "02 40 35 34 30",
		note: "4.7",
		regime: "",
		type: "restaurant",
	},

	{
		nom: "Les Chants d’Avril",
		adresse: "2 rue Laënnec, Nantes",
		distance: "190 m",
		description:
			"Bistronomie régionale dans un cadre de bistrot avec caisses et bouteilles de vins alignées contre les murs.",
		prix: "10-20€",
		telephone: "02 40 89 34 76",
		note: "4.7",
		regime: "",
		type: "restaurant",
	},

	{
		nom: "TerraVega",
		adresse: "22 rue Baron, Nantes",
		distance: "600 m",
		description:
			"Restauration bio-végétale, à tendance crue et sans gluten, sur place et à emporter.",
		prix: "20-30€",
		telephone: "09 73 52 34 75",
		note: "5.0",
		regime: "végétarien",
		type: "restaurant",
	},

	{
		nom: "L'Éthiquête",
		adresse: "14 Rue Armand Brossard, Nantes",
		distance: "1,9 km",
		description:
			"Le menu est 100 % vegan, avec toujours une offre Burger, un Bowl du moment et notre désormais célèbre Tofish & Chips.",
		prix: "20-30€",
		telephone: "02 40 48 20 02",
		note: "4.9",
		regime: "végétarien",
		type: "restaurant",
	},

	{
		nom: "Oh K-fée d'Mj",
		adresse: "2 Rue du Roi Albert, Nantes",
		distance: "1,8 km",
		description:
			"Salon de thé chaleureux avec terrasse proposant des desserts, et un menu de salades et plats végétariens et diététiques.",
		prix: "20-30€",
		telephone: "09 88 43 11 17",
		note: "4.7",
		regime: "végétarien",
		type: "restaurant",
	},

	{
		nom: "La Cachette",
		adresse: "2 Rue du Refuge, Nantes",
		distance: "2,2 km",
		description:
			"Restaurant simple et intimiste proposant une cuisine classique ainsi que de nombreux plats bio, végétariens et végans.",
		prix: "20-30€",
		telephone: "02 40 47 42 91",
		note: "4.8",
		regime: "végétarien",
		type: "restaurant",
	},

	{
		nom: "Le Bistrô",
		adresse: "15 Pl. du Pilori, Nantes",
		distance: "950 m",
		description:
			"Burgers, salades ou pâtes à l'ardoise d'une brasserie classique et conviviale .",
		prix: "10-20€",
		telephone: "02 51 82 80 91",
		note: "4.2",
		regime: "",
		type: "bistro",
	},

	{
		nom: "Le Cambronne Bistrot Chic",
		adresse: "6 Rue de l'Héronnière, Nantes",
		distance: "1,5 km",
		description:
			"Brasserie moderne proposant des plats aux influences régionales et internationales, ainsi que des vins locaux.",
		prix: "20-30€",
		telephone: "02 40 47 36 42",
		note: "4.5",
		regime: "",
		type: "bistro",
	},

	{
		nom: "Bistrot Delorme",
		adresse: "1 Pl. Delorme, Nantes",
		distance: "2,7 km",
		description:
			"Dans une ambiance art déco à l'allure de bistrot parisien, le Bistrot Delorme saura vous séduire par sa convivialité et son authenticité.",
		prix: "20-30€",
		telephone: "02 28 21 73 37",
		note: "4.6",
		regime: "végétarien",
		type: "bistro",
	},

	{
		nom: "Le Bistrot de Mr Jules",
		adresse: "11 Av. Sainte-Anne, Nantes",
		distance: "3,5 km",
		description:
			"Lieu typiquement français avec une atmosphère conviviale, un service rapide et des plats traditionnels ainsi que des plats aux saveurs exotiques.",
		prix: "20-30€",
		telephone: "02 40 48 63 26",
		note: "4.5",
		regime: "",
		type: "bistro",
	},
];

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
		regime: "",
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


//export default foodParis;
//export default foodNantes;
//export default foodLyon;