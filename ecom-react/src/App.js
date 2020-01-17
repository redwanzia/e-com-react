import React from 'react';
import {Route, Switch} from 'react-router-dom'
import HomePageComponent from './pages/homepage/component';
import ShopPage from './pages/shopPage/ShopPage'
import './App.css';



function App() {
	return (
		<div>
			<Switch>
				<Route exact path="/" component={HomePageComponent}/>
				<Route path="/shop" component={ShopPage}/>				
			</Switch>
		</div>
	);
}

export default App;
