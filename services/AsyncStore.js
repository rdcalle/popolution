import { AsyncStorage } from 'react-native';

export const set = (key, value) => 
	AsyncStorage.setItem(key, value);


export const get = (key) => 
	AsyncStorage.getItem(key);

