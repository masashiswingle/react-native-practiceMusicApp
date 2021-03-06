import React from 'react';
import { AppRegistry, View } from 'react-native';
import Header from './src/components/Header';
import AlbumList from './src/components/AlbumList';

const App = () => ( //Crate a component 
	<View style={{ flex: 1}}>
		<Header headerText={'Albums'} />		
		<AlbumList />
	</View>
);
AppRegistry.registerComponent('practiceApp', () => App);
//Render Component to device  

// /** @format */

// import {AppRegistry} from 'react-native';
// import App from './App';
// import {name as appName} from './app.json';

// AppRegistry.registerComponent(appName, () => App);


// Import a library to help create component
