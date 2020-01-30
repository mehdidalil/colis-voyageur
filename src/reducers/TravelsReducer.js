const TravelsReducer = () => ([
	{
		user: {
			name: "Mehdi Dalil",
			city: "Paris"
		},
		departure: "Paris (France)",
		arrival: "Tizi Ouzou (Algerie)",
		desc: "Bonjour, je fais Paris / Tizi Ouzou en avion et j'ai 20 kg de libre dans mes bagages.",
		info: {
			"Date de départ": "16/07/2020",
			"Prix": "40e",
			"Type": "Avion"
		},
		type: "flight"
	},
	{
		user: {
			name: "Lyes Nino",
			city: "Paris"
		},
		departure: "Paris (France)",
		arrival: "Los Angeles (Etats Unis)",
		desc: "Bonjour, je fais Paris / Los Angeles en avion et j'ai pas mal de place libre dans mon bagage.",
		info: {
			"Date de départ": "25/10/2021",
			"Prix": "20e",
			"Type": "Avion"
		},
		type: "flight"
	},
	{
		user: {
			name: "Lyes Nino",
			city: "Paris"
		},
		departure: "Paris (France)",
		arrival: "Miami (Etats Unis)",
		desc: "Bonjour, je dois aller voir mon ami Rick Ross a Miami n'hesitez pas si vous devez faire transporter des bagages a Miami.",
		info: {
			"Date de départ": "25/07/2022",
			"Prix": "10e",
			"Type": "Avion"
		},
		type: "flight"
	},
	{
		user: {
			name: "Mehdi Dalil",
			city: "Paris"
		},
		departure: "Paris (France)",
		arrival: "Marseille",
		desc: "Bonjour, je vais a Marseille en Renault Espace j'ai pas mal de place dans mon coffre.",
		info: {
			"Date de départ": "25/03/2020",
			"Prix": "10e",
			"Type": "Voiture"
		},
		type: "car"
	},
]);

export default TravelsReducer;