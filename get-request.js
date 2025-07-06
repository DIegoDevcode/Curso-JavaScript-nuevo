function sendHTTPRequest(method, url, data){
    return fetch(url,{
        method: method,
        body: JSON.stringify(data),
        headers: {
            "content-type": "application/json"
        }
    } )
}