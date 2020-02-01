const initInputs = (inputs, defaultValue = "") => {
	const obj = {};
	const today = new Date().toJSON().slice(0,10).replace(/-/g,'-');
	inputs.forEach(input => {
		obj[input.id] = {
			value: input.type === "date" ? today : defaultValue,
			error: defaultValue
		};
	});
	return (obj);
}

export default initInputs;