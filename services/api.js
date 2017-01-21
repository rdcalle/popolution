import { get } from '../services/AsyncStore';

const defaultHeaders = {
	['Content-Type']: "application/json",
	['Accept']: "application/json"
}

const serverUrl = "http://192.168.1.48:3000/"

const parseParameters = (url, params) => {
	// Parse parameters
	return url + "?" + Object.keys(params).map((k) => 
		encodeURIComponent(k) + '=' + encodeURIComponent(params[k]))
	.join('&')
}	


export const doFetch = (method, uri, params = {}, body = {}, headers = {}) => {
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
	get("popolution-token").then(
		(token) => 
				return doFetch("GET", uri, params, {}, Object.assign({}, headers, {authorization: token}))
	, (error) => Promise.reject(new Error(error))
	)
	

export const doPost = (uri, params, body, headers) => 
	get("popolution-token").then(
		(token) => doFetch("POST", uri, params, body, Object.assign({}, headers, token))
	, (error) => Promise.reject(new Error(error))
	)
