/* ********************
A module to handle api calls for the app.
******************** */
spapp.api = function() {
	const _moduleName = "api";
    
    /* ********************
    Makes a GET request to the specified url and returns the response.
    ******************** */
    function getResponse(url) {
        var xhr = new XMLHttpRequest();
        var response;
        
        if (url) {
            xhr.open("GET", url, false);
            xhr.send();
            response = xhr.response;
        }
        
        return response;
    }
	
	return {
        getResponse: getResponse,
	};
}();