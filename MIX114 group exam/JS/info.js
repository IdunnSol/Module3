Highcharts.chart('chart', {
    chart: {
        type: 'pie'
    },
    title: {
        text: 'Elgepopulasjon i Norge',
        style: { display: 'none' }
    },
    colors: ['#C6CF3D', '#2B500D', '#F47C26', '#A8A873'], // Figma-farger
    tooltip: {
        pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
    },
    plotOptions: {
        pie: {
            allowPointSelect: true,
            cursor: 'pointer',
            dataLabels: {
                enabled: true,
                format: '<b>{point.name}</b>: {point.percentage:.1f} %'
            }
        }
    },
    series: [{
        name: 'Andel',
        colorByPoint: true,
        data: [
            { name: 'Østlandet', y: 35 },
            { name: 'Midt-Norge', y: 30 },
            { name: 'Nordnorge', y: 20 },
            { name: 'Vestland', y: 15 }
        ]
    }]
  });
  