spapp.vehicleController = function() {
	const _moduleName = "vehicleController";
	
    function renderVehicleData() {
        spapp.view.render("vehicleTable", "vehicleController", spapp.state.vehicleData);
    }
    
	return {
		renderVehicleData: renderVehicleData,
	};
}();