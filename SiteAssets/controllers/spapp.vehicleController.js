/* ********************
A controller to handle requests related to vehicles.
******************** */
spapp.vehicleController = function() {
	const _moduleName = "vehicleController";
	
    /* ********************
    Renders vehicle data to the screen.
    ******************** */
    function renderVehicleData() {
        var data = [];
        var vehicle;
        var cols = [{ title: "Name" }, { title: "Model" }, { title: "Mileage" }, { title: "Engine" }, { title: "Colour" }]
        for (var v in spapp.state.vehicleData) {
            vehicle = spapp.state.vehicleData[v];
            console.log(JSON.stringify(vehicle))
            data.push([vehicle.name, vehicle.model, vehicle.mileage, vehicle.engine, vehicle.color]);
        }
        spapp.dataTables.initDataTable("vehicleTable", data, cols);
    }
    
	return {
		renderVehicleData: renderVehicleData,
	};
}();