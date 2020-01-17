import React from 'react';
import {Route, Switch} from 'react-router-dom'
import HomePageComponent from './pages/homepage/component';
import ShopPage from './pages/shopPage/ShopPage'
import './App.css';
import Header from './component/header/Header';



function App() {
	return (
		<div>
			<Header/>
			<Switch>
				<Route exact path="/" component={HomePageComponent}/>
				<Route path="/shop" component={ShopPage}/>				
			</Switch>
		</div>
	);
}

export default App;
