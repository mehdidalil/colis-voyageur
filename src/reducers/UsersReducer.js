const UsersReducer = () => ([
	{
		id: 1,
		firstName: "Mehdi",
		lastName: "Dalil",
		pic: `${process.env.PUBLIC_URL}/resources/img/users/montana.jpg`,
		city: "Paris (France)",
		desc: "Je fais souvent des trajets Paris / Alger donc n'hesitez pas a surveiller mon profil",
		mobile: "0102030405",
	},
	{
		id: 2,
		firstName: "Lyes",
		lastName: "Nino",
		pic: `${process.env.PUBLIC_URL}/resources/img/users/drake.jpg`,
		city: "Paris (France)",
		desc: "Je fais souvent des trajets Paris / Los Angeles donc n'hesitez pas a surveiller mon profil",
		mobile: "0103050406",
	}
]);

export default UsersReducer;