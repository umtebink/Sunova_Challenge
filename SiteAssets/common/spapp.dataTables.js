/* ********************
A module to handle the DataTables in the app.
See https://datatables.net/
******************** */
spapp.dataTables = function() {
	const _moduleName = "dataTables";
    
    /* ********************
    Initializes a DataTable with specified data, columns, and default config settings.
    ******************** */
    function initDataTable(table, data, cols) {
        if (table && data && cols) {
            $('#'+table).DataTable( {
                data: data,
                columns: cols,
            } );
        }
    }
	
	return {
		initDataTable: initDataTable,
	};
}();