$(document).ready(function() {
    var table = $('#dataTable').DataTable( {
    	 select: true,
    	"bLengthChange": false,
    	"processing": true,
        "language": {
            "url": "https://cdn.datatables.net/plug-ins/9dcbecd42ad/i18n/Japanese.json"
        },
        dom: 'Bfrtip',
        buttons: ['columnsToggle']
        
       
    } );
    var buttons = new $.fn.dataTable.Buttons(table, {
     buttons: [
     	{
                text: 'Add dashboard',
                className:'mdl-button',
                exportOptions: {columns: ':visible'},
                action: function ( e, dt, button, config ) {
                    var data = dt.buttons.exportData( {columns: ':visible'});
 					alert(JSON.stringify( data ));
     //                var url = "./dashboard.html";    
					// $(location).attr('href',url);
                },
                
        },
        {
                text: 'Load pivot',
                className:'mdl-button',
                action: function ( e, dt, button, config ) {
                    var data = dt.buttons.exportData({columns: ':visible'});
 					alert(JSON.stringify( data ));
     //                var url = "./dashboard.html";    
					// $(location).attr('href',url);
                }
        },
       {extend: 'copyHtml5', text: 'Copy', className:'mdl-button',exportOptions: {columns: ':visible'}},
       {extend: 'excelHtml5', text: 'Excel',className:'mdl-button',exportOptions: {columns: ':visible'}},
       {extend: 'csvHtml5', text: 'CSV',className:'mdl-button',exportOptions: {columns: ':visible'}},
       {extend: 'pdfHtml5', text: 'PDF',className:'mdl-button',exportOptions: {columns: ':visible'}},
       {extend: 'print', text: 'Print',className:'mdl-button',exportOptions: {columns: ':visible'}},
    ]
	}).container().appendTo($('#export-menu'));
} );

