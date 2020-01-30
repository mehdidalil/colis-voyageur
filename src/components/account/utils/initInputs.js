const initInputs = (inputs, defaultValue = "") => {
	const obj = {};

	inputs.forEach(input => {
		obj[input.id] = {
			value: defaultValue,
			error: defaultValue
		};
	});
	return (obj);
}

export default initInputs;