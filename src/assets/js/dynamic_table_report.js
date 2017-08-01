$(document).ready(function() {
    var oTable = $('#hidden-table-info').dataTable( {
        "aoColumnDefs": [
            { "bSortable": true, "aTargets": [ 0 ] }
        ],
        "aaSorting": [[0, 'asc']]
    });
} );