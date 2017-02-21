var spapp = function() {
    const _moduleName = "spapp";
    const url = "https://mobiledev.sunovacu.ca/api/Values/GetCars";
    
	function initialize() {
        var data = spapp.api.getResponse(url);
        console.log(data);
    }
	
	return {
		initialize: initialize,
	};
}();