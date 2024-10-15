
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

export default foodNantes;
