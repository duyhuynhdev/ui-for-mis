(function() {

// INITIAL
var d3 = Plotly.d3;

var WIDTH_IN_PERCENT_OF_PARENT = 100,
    HEIGHT_IN_PERCENT_OF_PARENT = 100;


// CREATE CHART

//BAR CHART
var gd3 = d3.select("div[id='bar']")
    .style({
        width: WIDTH_IN_PERCENT_OF_PARENT + '%',
        height: HEIGHT_IN_PERCENT_OF_PARENT + '%',
    });

var bar = gd3.node();

var trace1 = {
  x: ['books', 'clothes', 'computers'], 
  y: [20, 14, 23], 
  name: '2017', 
  type: 'bar'
};

var trace2 = {
  x: ['books', 'clothes', 'computers'], 
  y: [12, 18, 29], 
  name: '2018', 
  type: 'bar'
};

var data = [trace1, trace2];
var layout = {
title: 'Total profit in 2017-2018',
	barmode: 'group'};

Plotly.newPlot(bar, data, layout);


// PIE CHART WHITH HIDDEN SIDE LEGEND LABELS
var gd3 = d3.select("div[id='pie']")
    .style({
        width: WIDTH_IN_PERCENT_OF_PARENT + '%',
        height: HEIGHT_IN_PERCENT_OF_PARENT + '%',
    });

var pie = gd3.node();

var data = [{
  values: [19, 26, 55],
  labels: ['Residential', 'Non-Residential', 'Utility'],
  type: 'pie',
}];

var layout = {
	title: 'Sale of shops',
	showlegend: false,
	legend: {"orientation": "h"}};

Plotly.newPlot(pie, data, layout);


//LINE CHART

var gd3 = d3.select("div[id='line']")
    .style({
        width: WIDTH_IN_PERCENT_OF_PARENT + '%',
        height: HEIGHT_IN_PERCENT_OF_PARENT + '%',
    });

var line = gd3.node();

var trace1 = {
  x: [1, 2, 3, 4],
  y: [10, 15, 13, 17],
  type: 'scatter'
};

var trace2 = {
  x: [1, 2, 3, 4],
  y: [16, 5, 11, 9],
  type: 'scatter'
};

var data = [trace1, trace2];
var layout = {title: 'Trend 2017-2018'};
Plotly.newPlot(line, data, layout);

// SCARTTER


var gd3 = d3.select("div[id='scatter']")
    .style({
        width: WIDTH_IN_PERCENT_OF_PARENT + '%',
        height: HEIGHT_IN_PERCENT_OF_PARENT + '%',
    });

var scatter = gd3.node();

var trace1 = {
  x: [52698, 43117],
  y: [53, 31],
  mode: 'markers',
  name: 'North America',
  text: ['United States', 'Canada'],
  marker: {
    color: 'rgb(164, 194, 244)',
    size: 12,
    line: {
      color: 'white',
      width: 0.5
    }
  },
  type: 'scatter'
};

var trace2 = {
  x: [39317, 37236, 35650, 30066, 29570, 27159, 23557, 21046, 18007],
  y: [33, 20, 13, 19, 27, 19, 49, 44, 38],
  mode: 'markers',
  name: 'Europe',
  text: ['Germany', 'Britain', 'France', 'Spain', 'Italy', 'Czech Rep.', 'Greece', 'Poland'],
  marker: {
    color: 'rgb(255, 217, 102)',
    size: 12
  },
  type: 'scatter'
};

var trace3 = {
  x: [42952, 37037, 33106, 17478, 9813, 5253, 4692, 3899],
  y: [23, 42, 54, 89, 14, 99, 93, 70],
  mode: 'markers',
  name: 'Asia/Pacific',
  text: ['Australia', 'Japan', 'South Korea', 'Malaysia', 'China', 'Indonesia', 'Philippines', 'India'],
  marker: {
    color: 'rgb(234, 153, 153)',
    size: 12
  },
  type: 'scatter'
};

var trace4 = {
  x: [19097, 18601, 15595, 13546, 12026, 7434, 5419],
  y: [43, 47, 56, 80, 86, 93, 80],
  mode: 'markers',
  name: 'Latin America',
  text: ['Chile', 'Argentina', 'Mexico', 'Venezuela', 'Venezuela', 'El Salvador', 'Bolivia'],
  marker: {
    color: 'rgb(142, 124, 195)',
    size: 12
  },
  type: 'scatter'
};

var data = [trace1, trace2, trace3, trace4];

var layout = {
  title: 'GDP in the world',
  xaxis: {
    title: 'GDP per Capita',
    showgrid: false,
    zeroline: false
  },
  yaxis: {
    title: 'Percent',
    showline: false
  }
};


Plotly.newPlot(scatter, data, layout);

// resize chart when window resize 
// add listener for multiple
window.addEventListener('resize', function() { Plotly.Plots.resize('bar'); });
window.addEventListener('resize', function() { Plotly.Plots.resize('pie'); });
window.addEventListener('resize', function() { Plotly.Plots.resize('line'); });
window.addEventListener('resize', function() { Plotly.Plots.resize('scatter'); });


})();










