import React from 'react';
import {Route, Switch} from 'react-router-dom'
import HomePageComponent from './pages/homepage/component';
import './App.css';



const HatsPage = () => (
  <div>
    <h1>HATS PAGE </h1>
  </div>
);






function App() {
	return (
		<div>
			<Switch>
				<Route exact path="/" component={HomePageComponent}/>
				<Route path="/hats" component={HatsPage}/>				
			</Switch>
		</div>
	);
}

export default App;
