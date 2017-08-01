var Script = function () {

    var radarChartData = {
        labels : ["A-C","P-E","E-C","C-V"],
        datasets : [
            {
                fillColor : "rgba(255,255,0,0.3)",
                strokeColor : "rgba(220,220,220,1)",
                pointColor : "rgba(220,220,220,1)",
                pointStrokeColor : "#fff",
                data : [65,59,90,120]
            },{
                fillColor : "rgba(46,161,248,0.3)",
                strokeColor : "rgba(151,187,205,1)",
                pointColor : "rgba(151,187,205,1)",
                pointStrokeColor : "#fff",
                data : [28,48,40,19]
            }
            
        ]

    };
    new Chart(document.getElementById("radar").getContext("2d")).Radar(radarChartData);


}();