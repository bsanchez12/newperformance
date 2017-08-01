function showMenu(nombre)
{
		var estado=$("#sub"+nombre).css('display')
		
		$("#subMenu").hide();
		$("#Menu").removeClass("menuOptOver")
		
		$("#subAdmin").hide();
		$("#Admin").removeClass("menuOptOver")
		
		$("#subReporte").hide();
		$("#Reporte").removeClass("menuOptOver")
		
		
		if(estado=="none"){
			$("#sub"+nombre).show();
			$("#"+nombre).addClass("menuOptOver")
		}
}
$('[data-parallax="scroll"]').parallax();
var Script = function () {
//    sidebar toggle
    $(function() {
        function responsiveView() {
            var wSize = $(window).width();
            if (wSize <= 768) {
                $('#container').addClass('sidebar-close');
                $('#sidebar > ul').hide();
            }

            if (wSize > 768) {
                $('#container').removeClass('sidebar-close');
                $('#sidebar > ul').show();
            }
        }
        $(window).on('load', responsiveView);
        $(window).on('resize', responsiveView);
    });

    $('.fa-bars').click(function () {
		
		var estado=$('#sidebar').css('margin-left');
        if (estado=="0px") {
            $('#main-content').css({
                'margin-left': '0px'
            });
            $('#sidebar').css({
                'margin-left': '-210px'
            });
            $('#sidebar').hide();
			
            $("#container").addClass("sidebar-closed");
			
			$("#subMenu").hide();
		$("#Menu").removeClass("menuOptOver")
		
		$("#subAdmin").hide();
		$("#Admin").removeClass("menuOptOver")
		
		$("#subReporte").hide();
		$("#Reporte").removeClass("menuOptOver")
		
        } else {
            $('#main-content').css({
                'margin-left': '210px'
            });
            $('#sidebar').show();
            $('#sidebar').css({
                'margin-left': '0'
            });
            $("#container").removeClass("sidebar-closed");
        }
		$('[data-parallax="scroll"]').parallax();
    });
//    tool tips
    $('.tooltips').tooltip();
}();