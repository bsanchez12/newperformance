function fnFormatDetails ( oTable, nTr )
{
    var aData = oTable.fnGetData( nTr );
    var sOut = '<div class="row">';
    sOut += '<div class="col-md-2 ft16_g">Analítico- Cuantitativo:</div><div class="col-md-3 ft16_g">' + aData[4] + '</div>'
	sOut += '<div class="col-md-2 ft16_g">Procedimental- Eficiente:</div><div class="col-md-3 ft16_g">' + aData[5] + '</div>';
    sOut += '</div>';
	
	sOut += '<div class="row">';
    sOut += '<div class="col-md-2 ft16_g">Empático- Conciliador:</div><div class="col-md-3 ft16_g">' + aData[6] + '</div>'
	sOut += '<div class="col-md-2 ft16_g">Creativo- Visionario</div><div class="col-md-3 ft16_g">' + aData[7] + '</div>';
    sOut += '</div>';
	
	sOut += '<div class="row">';
    sOut += '<div class="col-md-2 ft16_g">Nivel:</div><div class="col-md-3 ft16_g">' + aData[8] + '</div>'
    sOut += '</div>';
	
	sOut += '<div class="row">';
    sOut += '<div class="col-md-2 ft16_g">Descripción:</div><div class="col-md-8 ft16_g">' + aData[9] + '</div>'
    sOut += '</div>';
	
	sOut += '<div class="row">';
    sOut += '<div class="col-md-2 ft16_g">Perfil:</div><div class="col-md-8 ft16_g">' + aData[10] + '</div>'
    sOut += '</div>';
	
	sOut += '<div class="row">';
    sOut += '<div class="col-md-2 ft16_g">1er año:</div><div class="col-md-3 ft16_g">' + aData[11] + '</div>'
	sOut += '<div class="col-md-2 ft16_g">5to año:</div><div class="col-md-3 ft16_g">' + aData[12] + '</div>'
    sOut += '</div>';
	
	sOut += '<div class="row">';
    sOut += '<div class="col-md-2 ft16_g">Empleabilidad:</div><div class="col-md-3 ft16_g">' + aData[13] + '</div>'
    sOut += '</div>';

    return sOut;
}

$(document).ready(function() {

    $('#dynamic-table').dataTable( {
        "aaSorting": [[ 0, "desc" ]]
    } );

    
    /*
     * Initialse DataTables, with no sorting on the 'details' column
     */
    var oTable = $('#hidden-table-info').dataTable( {
        "aoColumnDefs": [
            { "bSortable": true, "aTargets": [ 0 ] }
        ],
        "aaSorting": [[0, 'asc']]
    });
   
} );