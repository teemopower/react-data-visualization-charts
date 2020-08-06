import React from "react";
import ReactDOM from "react-dom";
import Chart from "chart.js";

class Main extends React.Component {
  constructor(props) {
    super(props);
  }
  chartRef = React.createRef();

  componentDidMount() {
    console.log(this.props.type);
    const { type } = this.props.type;

    const myChartRef = this.chartRef.current.getContext("2d");

    let lineData = {
      type: this.props.type,
      data: {
        //Bring in data
        labels: ["Jan", "Feb", "March", "April", "May", "June"],
        datasets: [
          {
            label: "Revenue",
            data: [76, 67, 91, 86, 67, 91],
            fill: false,
            backgroundColor: "#888888"
          },
          {
            label: "Expenses",
            data: [63, 66, 80, 80, 66, 80],
            fill: false,
            backgroundColor: "#64B4FC"
          }
        ]
      },
      options: {
        //Customize chart options
        scales: {
          xAxes: [
            {
              display: true,
              scaleLabel: {
                display: true,
                labelString: "Month"
              }
            }
          ],
          yAxes: [
            {
              display: true,
              ticks: {
                min: 0,
                max: 100,
                stepSize: 20
              }
            }
          ]
        }
      }
    };

    let pieData = {
      type: this.props.type,
      data: {
        //Bring in data
        labels: ["Jan", "Feb", "March", "April", "May", "June"],
        datasets: [
          {
            data: [76, 67, 91, 86, 67, 91],
            fill: false,
            backgroundColor: [
              "#8167A1",
              "#64B4FC",
              "#888888",
              "#C1A97F",
              "#C26F60",
              "#60C285"
            ]
          }
        ]
      },
      options: {
        //Customize chart options
      }
    };

    if (this.props.type === "line") {
      new Chart(myChartRef, lineData);
    }
    if (this.props.type === "bar") {
      new Chart(myChartRef, lineData);
    }
    if (this.props.type === "pie") {
      new Chart(myChartRef, pieData);
    }
  }

  render() {
    return (
      <div>
        <canvas id="myChart" ref={this.chartRef} />
      </div>
    );
  }
}

export default Main;
