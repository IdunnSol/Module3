Highcharts.chart('chart', {
  chart: {
    type: 'pie',
    height: 300,
    width: 450,
    backgroundColor: 'transparent'
  },
  title: {
    text: null // <- Properly removes the title
  },
  colors: ['#C6CF3D', '#2B500D', '#F47C26', '#A8A873'],
  tooltip: {
    pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
  },
  plotOptions: {
    pie: {
      allowPointSelect: true,
      cursor: 'pointer',
      dataLabels: {
        enabled: true,
        format: '<b>{point.name}</b>',
        distance: 10,             
        softConnector: true,     
        connectorColor: '#000000',
        style: {
          fontSize: '11px',
          color: '#000000'
        },
        crop: false,            // <– viktig: ikke kutt etiketter som går utenfor
        overflow: 'justify',    // <– tving visning, selv om det går utenfor
        allowOverlap: true    
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
