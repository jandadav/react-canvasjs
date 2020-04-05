import React, { Component } from 'react';
import CanvasJSReact from '../../assets/canvasjs.react';
import './LineChart.css';
import { Card, Container, Row, Col, Button, Form } from 'react-bootstrap';

let CanvasJSChart = CanvasJSReact.CanvasJSChart;


// let dps = [{x: 1, y: 10}, {x: 2, y: 13}, {x: 3, y: 18}, {x: 4, y: 20}, {x: 5, y: 17},{x: 6, y: 10}, {x: 7, y: 13}, {x: 8, y: 18}, {x: 9, y: 20}, {x: 10, y: 17}];   //dataPoints.
let dps = [];
let dps2 = [];
// let dps = [];
// for (let i=0; i<100; i++) {
//      dps.push({x: i, y: null});
// }

let xVal = dps.length + 1;
let yVal = 15;
let zVal = 15;
let updateInterval = 1000;



class LineChart extends Component {
    constructor() {
        super();
        this.updateChart = this.updateChart.bind(this);
        this.toggleDataSeries = this.toggleDataSeries.bind(this);
        this.legendMouseOver = this.legendMouseOver.bind(this);
        this.legendMouseOut = this.legendMouseOut.bind(this);
    }
    componentDidMount() {
        setInterval(this.updateChart, updateInterval);
    }
    updateChart() {
        yVal = yVal + Math.round(5 + Math.random() * (-5 - 5));
        dps.push({ x: xVal, y: yVal });

        zVal = zVal - Math.round(5 + Math.random() * (-5 - 5));
        dps2.push({ x: xVal, y: zVal });
        xVal++;
        // if (dps.length >  100 ) {
        // 	dps.shift();
        // }
        this.chart.render();
    }
    toggleDataSeries(e) {
        if (typeof (e.dataSeries.visible) === "undefined" || e.dataSeries.visible) {
            e.dataSeries.visible = false;
        } else {
            e.dataSeries.visible = true;
        }
        this.chart.render();
    }
    legendMouseOver(e) {
        e.chart.options.data.forEach(data => {
            data.lineThickness = 2;
        })
        e.dataSeries.lineThickness = 6;
        this.chart.render();
    }
    legendMouseOut(e) {
        e.chart.options.data.forEach(data => {
            data.lineThickness = 2;
        })
        this.chart.render();
    }

    render() {
        const options = {
            zoomEnabled: true,
            theme: "light2",
            legend: {
                cursor: "pointer",
                itemclick: this.toggleDataSeries,
                itemmouseover: this.legendMouseOver,
                itemmouseout: this.legendMouseOut
            },
            data: [{
                type: "line",
                showInLegend: true,
                dataPoints: dps
            },
            {
                type: "line",
                showInLegend: true,
                dataPoints: dps2
            }]
        }

        return (
            <div className="LineChart">
                <Card bg="light" text="black">
                    <Card.Header><h5>PID Graph</h5></Card.Header>
                    <Card.Title></Card.Title>
                    <Card.Body>
                    <CanvasJSChart options={options}
                        onRef={ref => this.chart = ref}
                    />
                    {/*You can get reference to the chart instance as shown above using onRef. This allows you to access all chart properties and methods*/}
                    </Card.Body>
                </Card>
            </div>
        );
    }
}

export default LineChart;