import React from 'react';
import { AppRegistry } from 'react-native';
import Header from './src/components/header';

const App = () => { //Crate a component 
	return (
		<Header headerText={"Albums"}/>		
	);
};
AppRegistry.registerComponent('practiceApp', () => App);
//Render Component to device  

// /** @format */

// import {AppRegistry} from 'react-native';
// import App from './App';
// import {name as appName} from './app.json';

// AppRegistry.registerComponent(appName, () => App);


// Import a library to help create component
