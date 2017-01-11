import { Alert } from 'react-native';

export const showError = (text) => {
	Alert.alert(
  'Error',
  text,
  [
    {text: 'OK'},
  ]
)}


