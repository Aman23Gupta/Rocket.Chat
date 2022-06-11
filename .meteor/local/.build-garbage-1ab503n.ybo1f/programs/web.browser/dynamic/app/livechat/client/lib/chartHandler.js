function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// app/livechat/client/lib/chartHandler.js                                                                             //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let _objectSpread;

module.link("@babel/runtime/helpers/objectSpread2", {
  default(v) {
    _objectSpread = v;
  }

}, 0);
module.export({
  drawLineChart: () => drawLineChart,
  drawDoughnutChart: () => drawDoughnutChart,
  updateChart: () => updateChart
});
let TAPi18n;
module.link("meteor/rocketchat:tap-i18n", {
  TAPi18n(v) {
    TAPi18n = v;
  }

}, 0);

const lineChartConfiguration = _ref => {
  let {
    legends = false,
    anim = false,
    smallTicks = false,
    displayColors = false,
    tooltipCallbacks = {}
  } = _ref;
  const config = {
    layout: {
      padding: {
        top: 10,
        bottom: 0
      }
    },
    legend: {
      display: false
    },
    title: {
      display: false
    },
    tooltips: _objectSpread({
      enabled: true,
      mode: 'point',
      displayColors
    }, tooltipCallbacks),
    scales: {
      xAxes: [{
        scaleLabel: {
          display: false
        },
        gridLines: {
          display: true,
          color: 'rgba(0, 0, 0, 0.03)'
        }
      }],
      yAxes: [{
        scaleLabel: {
          display: false
        },
        gridLines: {
          display: true,
          color: 'rgba(0, 0, 0, 0.03)'
        },
        ticks: {
          beginAtZero: true
        }
      }]
    },
    hover: {
      animationDuration: 0 // duration of animations when hovering an item

    },
    responsive: true,
    maintainAspectRatio: false,
    responsiveAnimationDuration: 0 // animation duration after a resize

  };

  if (!anim) {
    config.animation = {
      duration: 0 // general animation time

    };
  }

  if (legends) {
    config.legend = {
      display: true,
      labels: {
        boxWidth: 20,
        fontSize: 8
      }
    };
  }

  if (smallTicks) {
    config.scales.xAxes[0].ticks = {
      fontSize: 8
    };
    config.scales.yAxes[0].ticks = {
      beginAtZero: true,
      fontSize: 8
    };
  }

  return config;
};

const doughnutChartConfiguration = function (title) {
  let tooltipCallbacks = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  return {
    layout: {
      padding: {
        top: 0,
        bottom: 0
      }
    },
    legend: {
      display: true,
      position: 'right',
      labels: {
        boxWidth: 20,
        fontSize: 8
      }
    },
    title: {
      display: 'true',
      text: title
    },
    tooltips: _objectSpread({
      enabled: true,
      mode: 'point',
      displayColors: false
    }, tooltipCallbacks),
    // animation: {
    // 	duration: 0 // general animation time
    // },
    hover: {
      animationDuration: 0 // duration of animations when hovering an item

    },
    responsive: true,
    maintainAspectRatio: false,
    responsiveAnimationDuration: 0 // animation duration after a resize

  };
};
/**
 *
 * @param {Object} chart - chart element
 * @param {Object} chartContext - Context of chart
 * @param {Array(String)} chartLabel
 * @param {Array(String)} dataLabels
 * @param {Array(Array(Double))} dataPoints
 */


const drawLineChart = async function (chart, chartContext, chartLabels, dataLabels, dataSets) {
  let options = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : {};

  if (!chart) {
    console.log('No chart element');
    return;
  }

  if (chartContext) {
    chartContext.destroy();
  }

  const colors = ['#2de0a5', '#ffd21f', '#f5455c', '#cbced1'];
  const datasets = [];
  chartLabels.forEach(function (chartLabel, index) {
    datasets.push({
      label: TAPi18n.__(chartLabel),
      // chart label
      data: dataSets[index],
      // data points corresponding to data labels, x-axis points
      backgroundColor: [colors[index]],
      borderColor: [colors[index]],
      borderWidth: 3,
      fill: false
    });
  });
  const chartImport = await module.dynamicImport('chart.js');
  const Chart = chartImport.default;
  return new Chart(chart, {
    type: 'line',
    data: {
      labels: dataLabels,
      // data labels, y-axis points
      datasets
    },
    options: lineChartConfiguration(options)
  });
};

const drawDoughnutChart = async (chart, title, chartContext, dataLabels, dataPoints) => {
  if (!chart) {
    return;
  }

  if (chartContext) {
    chartContext.destroy();
  }

  const chartImport = await module.dynamicImport('chart.js');
  const Chart = chartImport.default;
  return new Chart(chart, {
    type: 'doughnut',
    data: {
      labels: dataLabels,
      // data labels, y-axis points
      datasets: [{
        data: dataPoints,
        // data points corresponding to data labels, x-axis points
        backgroundColor: ['#2de0a5', '#cbced1', '#f5455c', '#ffd21f'],
        borderWidth: 0
      }]
    },
    options: doughnutChartConfiguration(title)
  });
};

const updateChart = async (c, label, data) => {
  const chart = await c;

  if (chart.data.labels.indexOf(label) === -1) {
    // insert data
    chart.data.labels.push(label);
    chart.data.datasets.forEach((dataset, idx) => {
      dataset.data.push(data[idx]);
    });
  } else {
    // update data
    const index = chart.data.labels.indexOf(label);
    chart.data.datasets.forEach((dataset, idx) => {
      dataset.data[index] = data[idx];
    });
  }

  chart.update();
};
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/app/livechat/client/lib/bcd97c29c121fa8a7946568d5eae322a4952d3a3.map
