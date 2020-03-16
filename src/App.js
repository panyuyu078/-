import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/header';
import store from './store/store.js';
import {Provider} from 'react-redux';

function App() {
	return(
	<Provider store={store}>
		<div className="App" style={{paddingBottom:'100px'}}>
			<Header/>
		</div>
	</Provider>
	);
}

export default App;