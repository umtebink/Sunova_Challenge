/* ********************
A model to handle data related to vehicles.
******************** */
spapp.vehicleModel = function() {
	const _moduleName = "vehicleModel";
	const url = "https://mobiledev.sunovacu.ca/api/Values/GetCars";
    
    /* ********************
    Returns all vehicle data.
    ******************** */
    function getVehicles() {
        return JSON.parse(spapp.api.getResponse(url));
    }
    
	return {
		getVehicles: getVehicles,
	};
}();