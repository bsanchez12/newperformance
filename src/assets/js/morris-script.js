var Script = function () {

    //morris chart

    $(function () {
      // data stolen from http://howmanyleft.co.uk/vehicle/jaguar_'e'_type
         Morris.Bar({
        element: 'hero-bar',
        data: [
          {device: '2010-01', AC: 80},
          {device: '2010-03', AC: 70},
          {device: '2010-06', AC: 85},
          {device: '2010-08', AC: 90},
          {device: '2010-10', AC: 95},
          {device: '2010-12', AC: 80}
        ],
        xkey: 'device',
        ykeys: ['AC'],
        labels: ['Analítico/Cuantitativo'],
        barRatio: 0.4,
        xLabelAngle: 35,
        hideHover: 'auto',
        barColors: ['#6883a3']
      });

    
      $('.code-example').each(function (index, el) {
        eval($(el).text());
      });
    });

}();




