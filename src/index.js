import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider, CssBaseline } from '@material-ui/core';
import { darkTheme } from './config';
import Routing from './components/Routing';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './reducers';

const App = () => {
	return (
		<Provider store={createStore(reducers)}>
			<ThemeProvider theme={darkTheme}>
				<CssBaseline />
				<Routing />
			</ThemeProvider>
		</Provider>
	);
};

ReactDOM.render(<App />, document.querySelector('#root'));