import  React, { Component } from 'react'

import axios from 'axios';

import {baseurl} from '../APIurl'
class ProfileData extends Component{

    constructor(props){
        super(props)
        this.state = {
            name : "",
            email: "",
            mob:  "",
            dob:""

        }
    }

    componentDidMount(){
        axios.get(baseurl+"pro/")
        .then(res => {
            let resp = res.data
            this.setState({
                name : resp.name,
                email: resp.email,
                mob:  resp.mob,
                dob: resp.dob
            })
        })
    }
    render(){
        return(
                <div className="p-4 w-1/3">
                    <div className="h-full w-full bg-gray-800 px-8 pt-8 pb-12 rounded-lg relative text-center">
                        <h2 className="tracking-widest text-xs title-font font-medium text-gray-600 mb-1">
                            Details
                        </h2>
                        <h1 className="title-font  sm:text-2xl text-xl font-medium text-white mb-3">
                            Profile Data
                        </h1>
                        <div className="">
                            <span className="text-white text-xl font-medium mb-6">
                                Name : <span className="font-bold text-white" > {this.state.name} </span>
                            </span>
                            <br />
                            <span className="text-white text-xl font-medium mb-6">
                                Date of Birth <span className="font-bold" > {this.state.dob} </span>
                            </span>
                            <br />
                            <span className="text-white text-xl font-medium mb-6">
                                Mobile : <span className="font-bold text-white" > {this.state.mob} </span>
                            </span>
                            <br />
                            <span className="text-white text-xl font-medium mb-6">
                                Email : <span className="text-white font-bold" > {this.state.email} </span>
                            </span>
                            <br />
                        </div>
                    </div>

                </div>
        )
    }
}

export default ProfileData