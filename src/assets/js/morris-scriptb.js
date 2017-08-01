var Script = function () {

    //morris chart

    $(function () {
      // data stolen from http://howmanyleft.co.uk/vehicle/jaguar_'e'_type
         Morris.Bar({
        element: 'hero-bar',
        data: [
          {device: 'A-C', AC: 80},
          {device: 'P-E', AC: 70},
          {device: 'E-C', AC: 85},
          {device: 'C-V', AC: 90}
        ],
        xkey: 'device',
        ykeys: ['AC'],
        labels: ['Estudiantes'],
        barRatio: 0.4,
        xLabelAngle: 0,
        hideHover: 'auto',
        barColors: ['#6883a3']
      });

    
      $('.code-example').each(function (index, el) {
        eval($(el).text());
      });
    });

}();




