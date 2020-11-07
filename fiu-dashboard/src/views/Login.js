import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import Img from '../assets/login.svg'


class Login extends Component{

    render(){
        return(
            <div>
                <section className="text-gray-500 bg-gray-900 body-font">
                    <div className="container px-5 py-24 mx-auto flex flex-wrap items-center">
                        <div className="lg:w-3/5 md:w-1/2 md:pr-16 lg:pr-0 pr-0">
                        <h1 className="title-font font-medium text-3xl text-white">
                        Got capital for investment? We got customers!
                        </h1>
                        <div className="flex mx-auto auto-items-center justify-center py-10">
                            <div className="w-1/2 bg-gray-600 rounded-full">
                                <img src={Img} alt="login"/>
                            </div>
                        </div>
                        <p className="leading-relaxed mt-4">
                        A one stop shop for all your loan distribution management needs. Secure for the user, opportunity to secure revenue for you! Register your organisation and never miss an opportunity to monetize!
                        </p>
                        </div>
                        <div className="lg:w-2/6 md:w-1/2 bg-gray-800 rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0">
                        <h2 className="text-white text-lg font-medium title-font mb-5">
                            Log In
                        </h2>
                        <input
                            className="bg-gray-900 rounded-full border text-white border-gray-900 focus:outline-none focus:border-blue-500 text-base px-4 py-2 mb-4"
                            placeholder="Email"
                            type="email"
                        />
                        <input
                            className="bg-gray-900 rounded-full border text-white border-gray-900 focus:outline-none focus:border-blue-500 text-base px-4 py-2 mb-4"
                            placeholder="Password"
                            type="password"
                        />
                        <Link to="/dashboard">
                            <button className="text-white bg-blue-500 border-0 py-2 px-8 focus:outline-none hover:bg-blue-600 rounded-full text-lg">
                                Log In
                            </button>
                        </Link>
                        
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}

export default Login