function fnFormatDetails ( oTable, nTr )
{
    var aData = oTable.fnGetData( nTr );
    var sOut = '<div class="row">';
    sOut += '<div class="col-md-3 ft16_g">Analítico- Cuantitativo:</div><div class="col-md-3 ft16_g">' + aData[4] + '</div>'
    sOut += '</div>';
	
	sOut += '<div class="row">';
    sOut += '<div class="col-md-3 ft16_g">Procedimental- Eficiente:</div><div class="col-md-3 ft16_g">' + aData[5] + '</div>'
    sOut += '</div>';
	
	sOut += '<div class="row">';
    sOut += '<div class="col-md-3 ft16_g">Empático- Conciliador:</div><div class="col-md-3 ft16_g">' + aData[6] + '</div>'
    sOut += '</div>';
	
	sOut += '<div class="row">';
    sOut += '<div class="col-md-3 ft16_g">Creativo- Visionario:</div><div class="col-md-3 ft16_g">' + aData[7] + '</div>'
    sOut += '</div>';

    return sOut;
}

$(document).ready(function() {

    $('#dynamic-table').dataTable( {
        "aaSorting": [[ 11, "desc" ]]
    } );

    /*
     * Insert a 'details' column to the table
     */
    var nCloneTh = document.createElement( 'th' );
    var nCloneTd = document.createElement( 'td' );
    nCloneTd.innerHTML = '<img src="img/details_open.png">';
    nCloneTd.className = "center";

    $('#hidden-table-info thead tr').each( function () {
        this.insertBefore( nCloneTh, this.childNodes[0] );
    } );

    $('#hidden-table-info tbody tr').each( function () {
        this.insertBefore(  nCloneTd.cloneNode( true ), this.childNodes[0] );
    } );

    /*
     * Initialse DataTables, with no sorting on the 'details' column
     */
    var oTable = $('#hidden-table-info').dataTable( {
        "aoColumnDefs": [
            { "bSortable": false, "aTargets": [ 0 ] }
        ],
        "aaSorting": [[1, 'asc']]
    });

    /* Add event listener for opening and closing details
     * Note that the indicator for showing which row is open is not controlled by DataTables,
     * rather it is done here
     */
    $(document).on('click','#hidden-table-info tbody td img',function () {
        var nTr = $(this).parents('tr')[0];
        if ( oTable.fnIsOpen(nTr) )
        {
            /* This row is already open - close it */
            this.src = "img/details_open.png";
            oTable.fnClose( nTr );
        }
        else
        {
            /* Open this row */
            this.src = "img/details_close.png";
            oTable.fnOpen( nTr, fnFormatDetails(oTable, nTr), 'details' );
        }
    } );
} );