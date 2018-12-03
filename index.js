import React from 'react';
import { AppRegistry, View } from 'react-native';
import Header from './src/components/Header';
import AlbumList from './src/components/AlbumList';
//const dataUrl = "https://rallycoding.herokuapp.com/api/music_albums"

const App = () => ( //Crate a component 
	<View>
		<Header headerText={"Albums"} />		
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
