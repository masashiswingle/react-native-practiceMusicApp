// /** @format */

// import {AppRegistry} from 'react-native';
// import App from './App';
// import {name as appName} from './app.json';

// AppRegistry.registerComponent(appName, () => App);


// Import a library to help create component

import React from 'react';
import {Text, AppRegistry} from 'react-native';

const App = () => { //Crate a component 
	return (
		<Text> Some Text </Text>
	)
}
AppRegistry.registerComponent('practiceApp', () => App)
//Render Component to device  