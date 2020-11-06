import  React, { Component } from 'react'

import { Line } from "react-chartjs-2";


class TransactionGraph extends Component{
    render(){

        const chart1 = {
            data: canvas => {
                let ctx = canvas.getContext("2d");
        
                let gradientStroke = ctx.createLinearGradient(0, 230, 0, 50);
        
                gradientStroke.addColorStop(1, "rgba(66,134,121,0.15)");
                gradientStroke.addColorStop(0.4, "rgba(66,134,121,0.0)"); 
                gradientStroke.addColorStop(0, "rgba(66,134,121,0)"); 
        
                return{
                    labels: ["1","2","3","1","2","3","1","2","3"],
                    datasets: [
                        {
                          label: "Axis Bank Average Unit",
                          fill: true,
                          backgroundColor: gradientStroke,
                          borderColor: "#00d6b4",
                          borderWidth: 2,
                          borderDash: [],
                          borderDashOffset: 0.0,
                          pointBackgroundColor: "#00d6b4",
                          pointBorderColor: "rgba(255,255,255,0)",
                          pointHoverBackgroundColor: "#00d6b4",
                          pointBorderWidth: 1,
                          pointHoverRadius: 4,
                          pointHoverBorderWidth: 15,
                          pointRadius: 0,
                          data: [5,8,2,7,8,3,6,9,8]
                        }
                      ]
                };
            },
            options: {
                maintainAspectRatio: false,
                legend: {
                  display: false
                },
                elements: {
                  point:{
                      radius: 0
                  }
                },
                tooltips: {
                  backgroundColor: "#f5f5f5",
                  titleFontColor: "#333",
                  bodyFontColor: "#666",
                  bodySpacing: 4,
                  xPadding: 12,
                  mode: "nearest",
                  intersect: 0,
                  position: "nearest"
                },
                responsive: true,
                scales: {
                  yAxes: [
                    {
                      barPercentage: 1.6,
                      gridLines: {
                        display:false,
                        // drawBorder: false,
                        // color: "rgba(29,140,248,0.0)",
                        // zeroLineColor: "transparent"
                      },
                      ticks: {
                        padding: 20,
                        fontColor: "#9e9e9e"
                      }
                    }
                  ],
            
                  xAxes: [
                    {
                      barPercentage: 1.6,
                      gridLines: {
                        display: false,
                        // drawBorder: false,
                        // color: "rgba(0,242,195,0.1)",
                        // zeroLineColor: "transparent"
                      },
                      ticks: {
                        padding: 20,
                        fontColor: "#9e9e9e"
                      }
                    }
                  ]
                }
              }
        }

        return(
                <div className="p-4 w-1/2">
                    <div className="h-full w-full bg-gray-800 px-8 pt-8 pb-12 rounded-lg relative text-center">
                        <h2 className="tracking-widest text-xs title-font font-medium text-gray-600 mb-1">
                            Graph
                        </h2>
                        <h1 className="title-font sm:text-2xl text-xl font-medium text-white mb-3">
                            Transactions:
                        </h1>
                        <div className="flex w-full  px-5 pb-4 pt-8 bg-gray-800 text-white items-center" style={{ height:"350px" }}>
                             <Line
                                data={chart1.data}
                                options={chart1.options}
                             />
                        </div>
                    </div>

                </div>
        )
    }
}

export default TransactionGraph