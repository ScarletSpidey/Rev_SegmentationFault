import React, { Component } from 'react'

import axios from 'axios'

import {baseurl} from '../APIurl'
class LoanOfferCard extends Component {

    constructor(props){
        super(props)
        this.state ={
            amount: [],
            duration: [],
            interest: [],
            id: [],
            type:[]
        }
    }

    componentDidMount(){
        axios.get(baseurl + '/rashi')
        .then(res => {
            let resp = res.data
            console.log(resp)
            this.setState({ 
                amount: resp.amount,
                duration: resp.duration,
                interest: resp.interest,
                id: resp.id,
                type:resp.type
             });
        })
    }

    render(){
        let i = 0;

            return(
                <>
                <div className="p-4 lg:w-1/2">
                    <div className="h-full bg-gray-800 px-8 pt-16 pb-12 rounded-lg overflow-hidden text-center relative">
                    <h2 className="tracking-widest text-md title-font font-medium text-gray-600 mb-1">
                        CATEGORY
                    </h2>
                    <h1 className="title-font sm:text-3xl text-xl font-medium text-white mb-3">
                        {this.state.type[i]}
                    </h1>

                    <div className="text-center">
                        <span className="text-white text-xl font-medium mb-6">
                            Loan id : <span className="font-bold" > {this.state.id[i]} </span>
                        </span>
                        <br />
                        <span className="text-white text-xl font-medium mb-6">
                            Loan Amount : <span className="text-green-600 font-bold" > {this.state.amount[i]}  </span>
                        </span>
                        <br />
                        <span className="text-white text-xl font-medium mb-6">
                            Loan Duration : <span className="font-bold " > {this.state.duration[i]}  months </span>
                        </span>
                        <br />
                        <span className="text-white text-xl font-medium mb-6">
                            Rate of interest : <span className="text-red-600 font-bold" > {this.state.interest[i]} % </span>
                        </span>
                        <br />
                    </div>
                    
                    
                    </div>
                </div>
                <div className="text-gray-900">{i=i+1}</div>
                <div className="p-4 lg:w-1/2">
                    <div className="h-full bg-gray-800 px-8 pt-16 pb-12 rounded-lg overflow-hidden text-center relative">
                    <h2 className="tracking-widest text-md title-font font-medium text-gray-600 mb-1">
                        CATEGORY
                    </h2>
                    <h1 className="title-font sm:text-3xl text-xl font-medium text-white mb-3">
                        {this.state.type[i]}
                    </h1>

                    <div className="text-center">
                        <span className="text-white text-xl font-medium mb-6">
                            Loan id : <span className="font-bold" > {this.state.id[i]} </span>
                        </span>
                        <br />
                        <span className="text-white text-xl font-medium mb-6">
                            Loan Amount : <span className="text-green-600 font-bold" > {this.state.amount[i]}  </span>
                        </span>
                        <br />
                        <span className="text-white text-xl font-medium mb-6">
                            Loan Duration : <span className="font-bold " > {this.state.duration[i]}  months </span>
                        </span>
                        <br />
                        <span className="text-white text-xl font-medium mb-6">
                            Rate of interest : <span className="text-red-600 font-bold" > {this.state.interest[i]} % </span>
                        </span>
                        <br />
                    </div>
                    
                    
                    </div>
                </div>
                <div className="text-gray-900">{i=i+1}</div>
                <div className="p-4 lg:w-1/2">
                    <div className="h-full bg-gray-800 px-8 pt-16 pb-12 rounded-lg overflow-hidden text-center relative">
                    <h2 className="tracking-widest text-md title-font font-medium text-gray-600 mb-1">
                        CATEGORY
                    </h2>
                    <h1 className="title-font sm:text-3xl text-xl font-medium text-white mb-3">
                        {this.state.type[i]}
                    </h1>

                    <div className="text-center">
                        <span className="text-white text-xl font-medium mb-6">
                            Loan id : <span className="font-bold" > {this.state.id[i]} </span>
                        </span>
                        <br />
                        <span className="text-white text-xl font-medium mb-6">
                            Loan Amount : <span className="text-green-600 font-bold" > {this.state.amount[i]}  </span>
                        </span>
                        <br />
                        <span className="text-white text-xl font-medium mb-6">
                            Loan Duration : <span className="font-bold " > {this.state.duration[i]}  months </span>
                        </span>
                        <br />
                        <span className="text-white text-xl font-medium mb-6">
                            Rate of interest : <span className="text-red-600 font-bold" > {this.state.interest[i]} % </span>
                        </span>
                        <br />
                    </div>
                    
                    
                    </div>
                </div>
                </>
        )
    }
}

export default LoanOfferCard