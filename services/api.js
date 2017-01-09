export const prueba = () =>
	// Here you must to use the local ip of your computer
  fetch('http://192.168.1.48:3000/prueba')
    .then((response) => response.json())
    .then((responseJson) => {
    	console.warn(responseJson.data);
    })
    .catch((error) => {
      console.error(error);
    });