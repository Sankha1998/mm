var trace1 = {

    x: ["23/02/2022","24/02/2022","03/03/2022","25/05/2022"],

    y: [10, 15, 13, 17],

    mode: 'markers+lines',

    name: 'Scatter'

};



var data = [trace1];


var layout = {

title:'Performance Tracking'

};



Plotly.newPlot('performance-tracker', data, layout);


var colorscaleValue = [
    [0, '#f3fef3'],
    [1, '#129f03']

    ];

var datah = [

    {

        z: [[1, 5, 30, 50, 1,20, 1, 60, 40, 10,1,5], [20, 1, 60, 80, 30], [30, 60, 1, -10, 20]],

        x: ['Jan', 'Feb', 'Mar', 'Apr', 'May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'],

        y: ['Sun', 'Mon', 'Tue','Wed','Thu','Fri','Sat'],

        type: 'heatmap',
        colorscale: colorscaleValue,

        hoverongaps: false

    }

    ];

var layouth = {

    title: 'Yearly Activity Tracking',
}


Plotly.newPlot('activity-tracker', datah,layouth);
