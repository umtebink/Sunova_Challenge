var spapp = function() {
    const _moduleName = "spapp";
    const url = "https://mobiledev.sunovacu.ca/api/Values/GetCars";
    
	function initialize() {
        spapp.state.vehicleData = spapp.api.getResponse(url);
        console.log(spapp.state.vehicleData);
        spapp.vehicleController.renderVehicleData();
    }
	
	return {
		initialize: initialize,
	};
}();