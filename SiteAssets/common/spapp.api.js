/* ********************
A controller to handle display ultilities for the app.
******************** */
spapp.api = function() {
	const _moduleName = "api";
    
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