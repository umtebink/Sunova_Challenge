spapp.view = function() {
	const _moduleName = "view";
	
    function render(appName, controllerName, data) {
        if (appName && controllerName) {
            var app = angular.module(appName, []);
            app.controller(controllerName, function($scope, $http) {
                $scope.data = data ? data : {};
            });
        }
    }
    
	return {
		render: render,
	};
}();