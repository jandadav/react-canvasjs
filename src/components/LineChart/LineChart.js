import React, { Component } from 'react';
import CanvasJSReact from '../../assets/canvasjs.react';
import './LineChart.css';

var CanvasJSChart = CanvasJSReact.CanvasJSChart;


// var dps = [{x: 1, y: 10}, {x: 2, y: 13}, {x: 3, y: 18}, {x: 4, y: 20}, {x: 5, y: 17},{x: 6, y: 10}, {x: 7, y: 13}, {x: 8, y: 18}, {x: 9, y: 20}, {x: 10, y: 17}];   //dataPoints.
var dps = [];
var dps2 = [];
// var dps = [];
// for (let i=0; i<100; i++) {
//      dps.push({x: i, y: null});
// }

var xVal = dps.length + 1;
var yVal = 15;
var zVal = 15;
var updateInterval = 500;

class LineChart extends Component {
	constructor() {
		super();
		this.updateChart = this.updateChart.bind(this);
	}
	componentDidMount() {
		setInterval(this.updateChart, updateInterval);
	}
	updateChart() {
		yVal = yVal +  Math.round(5 + Math.random() *(-5-5));
        dps.push({x: xVal,y: yVal});
        zVal = zVal -  Math.round(5 + Math.random() *(-5-5));
        dps2.push({x: xVal,y: zVal});
		xVal++;
		// if (dps.length >  100 ) {
		// 	dps.shift();
		// }
		this.chart.render();
    }
    toggleDataSeries(e) {
        if (typeof(e.dataSeries.visible) === "undefined" || e.dataSeries.visible ){
            e.dataSeries.visible = false;
        } else {
            e.dataSeries.visible = true;
        }
        
    }
    legendMouseOver(e) {
        e.chart.options.data.forEach(data => {
            data.lineThickness = 2;
        })
        e.dataSeries.lineThickness = 6;
        //e.dataSeries.lineThickness = e.chart.data[e.dataSeriesIndex].lineThickness * 2;
        //e.dataSeries.markerSize = e.chart.data[e.dataSeriesIndex].markerSize + 2;
    }
    legendMouseOut(e) {
        e.chart.options.data.forEach(data => {
            data.lineThickness = 2;
        })
        //e.dataSeries.lineThickness = e.chart.data[e.dataSeriesIndex].lineThickness / 2;
        //e.dataSeries.markerSize = e.chart.data[e.dataSeriesIndex].markerSize - 2;
    }

	render() {
		const options = {
            theme: "dark2",
            legend: {
                cursor:"pointer",
                itemclick : this.toggleDataSeries,
                itemmouseover: this.legendMouseOver,
                itemmouseout: this.legendMouseOut
            },   
            data: [{
                type: "line",
                showInLegend: true,
				dataPoints : dps
            },
            {
                type: "line",
                showInLegend: true,
				dataPoints : dps2
            }]
		}
		
		return (
		<div className="LineChart">
			
			<CanvasJSChart options = {options} 
				onRef={ref => this.chart = ref}
			/>
			{/*You can get reference to the chart instance as shown above using onRef. This allows you to access all chart properties and methods*/}
		</div>
		);
	}
}

export default LineChart;