import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/header';
import {BrowserRouter,Redirect,Route,Link,Switch} from 'react-router-dom';

function App() {
	return(
		<BrowserRouter>
			<div className="App">
				<Header/>
				
			</div>		
		</BrowserRouter>
		
	);
}

export default App;