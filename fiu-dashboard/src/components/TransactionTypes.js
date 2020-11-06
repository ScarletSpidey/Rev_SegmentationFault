import  React, { Component } from 'react'

import { Doughnut } from "react-chartjs-2";


import axios from 'axios';


import {baseurl} from '../APIurl'

class TransactionTypes extends Component{

  constructor(props){
    super(props)
    this.state = {
        data : [],
        labels: ["UPI","FUNDS TRANSFER", "OTHERS"]
    }
  }


    componentDidMount(){
        axios.get(baseurl+"typ/")
        .then(res => {
            let resp = res.data
            let total = resp.data[1] + resp.data[2] + resp.data[4]
            console.log(resp)
            let arr = [resp.data[0],resp.data[3],total]
            this.setState({
              data: arr
            })
        })
    }
    render(){

        let chartExample5 = {
            data: canvas => {
              let ctx = canvas.getContext("2d");
          
              var colors = []
          
              let gradientStroke1 = ctx.createLinearGradient(0, 230, 0, 50);
          
              gradientStroke1.addColorStop(1, "rgba(72,72,176,0.1)");
              gradientStroke1.addColorStop(0.4, "rgba(72,72,176,0.0)");
              gradientStroke1.addColorStop(0, "rgba(119,52,169,0)"); //purple colors
          
              colors.push(gradientStroke1)
          
              let gradientStroke2 = ctx.createLinearGradient(0, 230, 0, 50);
          
              gradientStroke2.addColorStop(1, "rgba(66,134,121,0.15)");
              gradientStroke2.addColorStop(0.4, "rgba(66,134,121,0.0)"); //green colors
              gradientStroke2.addColorStop(0, "rgba(66,134,121,0)");
          
              colors.push(gradientStroke2)
          
              let gradientStroke3 = ctx.createLinearGradient(0, 230, 0, 50);
          
              gradientStroke3.addColorStop(1, "rgba(29,140,248,0.2)");
              gradientStroke3.addColorStop(0.4, "rgba(29,140,248,0.0)");
              gradientStroke3.addColorStop(0, "rgba(29,140,248,0)"); //blue colors
          
              colors.push(gradientStroke3)
          
              return {
                labels: this.state.labels,
                datasets: [
                  {
                    fill: true,
                    backgroundColor: colors,
                    hoverBackgroundColor: colors,
                    borderColor: ["#d048b6","#00d6b4","#1f8ef1"],
                    borderWidth: 2,
                    borderDash: [],
                    borderDashOffset: 0.0,
                    data: this.state.data
                  }
                ]
              };
            },
            options: {
              maintainAspectRatio: false,
              
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
              
            }
          };

        return(
                <div className="p-4 w-1/2">
                    <div className="h-full w-full bg-gray-800 px-8 pt-8 pb-8 rounded-lg relative text-center">
                        <h2 className="tracking-widest text-xs title-font font-medium text-gray-600 mb-1">
                            Graph
                        </h2>
                        <h1 className="title-font sm:text-2xl text-xl font-medium text-white mb-3">
                            Types of Transactions:
                        </h1>
                        <div className="flex w-full  px-5 pb-4 pt-8 bg-gray-800 text-white items-center" style={{ height:"350px" }}>
                        <Doughnut
                            data={chartExample5.data}
                            options={chartExample5.options}
                        />
                        </div>
                    </div>

                </div>
        )
    }
}

export default TransactionTypes