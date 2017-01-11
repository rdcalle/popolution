const defaultHeaders = {
	"Content-Type": "application/json",
	"Accept": "application/json"
}

const serverUrl = "http://192.168.1.48:3000/"

const parseParameters = (url, params) => {
	// Parse parameters
	return url + "?" + Object.keys(params).map((k) => 
		encodeURIComponent(k) + '=' + encodeURIComponent(params[k]))
	.join('&')
}	


doFetch = (method, uri, params = {}, body = {}, headers = {}) => {
	let url = parseParameters(serverUrl + uri, params);

	let options = {
	  method: method,
	  headers: Object.assign({}, defaultHeaders, headers)
	};

	if (method != "GET" && method != "HEAD") 
		options["body"] = JSON.stringify(body)

	// Do fetch
	return fetch(url, options)
		.then((response) => {
			if (response.status >= 200 && response.status < 300) {  
		    return response.json()
		  } else { 
		    return Promise.reject(new Error(response.status))  
		  }
		});
}    

export const doGet = (uri, params, headers) => 
	doFetch("GET", uri, params, {}, headers)

export const doPost = (uri, params, body, headers) => 
	doFetch("POST", uri, params, body, headers)	
