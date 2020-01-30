const RequestsReducer = () => ([
	{
		user: {
			name: "Mehdi Dalil",
			city: "Paris"
		},
		departure: "Paris (France)",
		arrival: "Tizi Ouzou (Algerie)",
		desc: "Bonjour, j'ai un colis de 3kg pas tres grand a transporter pour Tizi Ouzou.",
		info: {
			"Date de départ": "16/07/2020",
			"Budget": "40e",
			"Type de colis": "Petit, léger"
		},
		type: "small"
	},
	{
		user: {
			name: "Lyes Nino",
			city: "Paris"
		},
		departure: "Paris (France)",
		arrival: "Moscou (Russie)",
		desc: "Bonjour, j'ai un colis de 8kg un peu grand a transporter pour Moscou URGENT.",
		info: {
			"Date de départ": "01/02/2020",
			"Budget": "60e",
			"Type de colis": "Moyen, lourd"
		},
		type: "medium"
	},
	{
		user: {
			name: "Mehdi Dalil",
			city: "Paris"
		},
		departure: "Paris (France)",
		arrival: "Madrid (Espagne)",
		desc: "Bonjour, j'ai un colis de 15kg a transporter pour Madrid.",
		info: {
			"Date de départ": "16/07/2020",
			"Budget": "80e",
			"Type de colis": "Grand, lourd"
		},
		type: "large"
	},
]);

export default RequestsReducer;