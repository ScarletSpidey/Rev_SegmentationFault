import  React, { Component } from 'react'


import axios from 'axios';


import {baseurl} from '../APIurl'

class InvestmentData extends Component{

    constructor(props){
        super(props)
        this.state = {
            amount : 0,
            no: 0
        }
    }


    componentDidMount(){
        axios.get(baseurl+"inv/")
        .then(res => {
            let resp = res.data
            console.log(resp)
            this.setState({
                amount : resp.amount,
                no: resp.no
            })
        })
    }

    render(){
        return(
                <div className="p-4 w-1/3">
                    <div className="h-full w-full bg-gray-800 px-8 pt-8 pb-12 rounded-lg relative text-center" style={{height:"270px"}}> 
                        <h2 className="tracking-widest text-xs title-font font-medium text-gray-600 mb-1">
                            Details
                        </h2>
                        <h1 className="title-font font-bold sm:text-2xl text-xl font-medium text-white mb-3">
                            Investment Data
                        </h1>
                        <div className="">
                            <span className="text-white text-xl font-medium mb-6">
                                No of Investments : <span className="font-bold text-white-500" > {this.state.no} </span>
                            </span>
                            <br />
                            <span className="text-white text-xl font-medium mb-6">
                                Invested Amount : <span className="font-bold text-green-500" > ₹{this.state.amount} </span>
                            </span>
                            
                        </div>
                    </div>

                </div>
        )
    }
}

export default InvestmentData