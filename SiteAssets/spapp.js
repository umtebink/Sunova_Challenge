/* ********************
The main module designated for universal functions of the app.
******************** */
var spapp = function() {
    const _moduleName = "spapp";
    
    /* ********************
    A function to initialize the app.
    ******************** */
	function initialize() {
        spapp.state.vehicleData = spapp.vehicleModel.getVehicles();
        spapp.vehicleController.renderVehicleData();
    }
	
	return {
		initialize: initialize,
	};
}();