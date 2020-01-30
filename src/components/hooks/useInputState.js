import React from 'react';

const useInputState = (init) => {
	const [content, setContent] = React.useState({...init});

	return {
		content,
		setContent,
		bind: {
			content,
			onChange: (evt, val) => setContent({
				...content,
				[evt.target.id]: {
					...content[evt.target.id],
					value: val
				}
			}),
			setError: (prop, errMessage) => setContent({...content, [prop]: {...content[prop], error: errMessage }}),
		}
	};
}

export default useInputState;