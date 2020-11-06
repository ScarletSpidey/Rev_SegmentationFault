import  React, { Component } from 'react'

class ProfileData extends Component{
    render(){
        return(
                <div className="p-4 w-1/3">
                    <div className="h-full w-full bg-gray-800 px-8 pt-8 pb-12 rounded-lg relative text-center">
                        <h2 className="tracking-widest text-xs title-font font-medium text-gray-600 mb-1">
                            Details
                        </h2>
                        <h1 className="title-font sm:text-2xl text-xl font-medium text-white mb-3">
                            Profile Data
                        </h1>
                        <div className="">
                            <span className="text-white text-xl font-medium mb-6">
                                Name : <span className="font-bold" > John Doe </span>
                            </span>
                            <br />
                            <span className="text-white text-xl font-medium mb-6">
                                Date of Birth <span className="font-bold" > 29th April 1995 </span>
                            </span>
                            <br />
                            <span className="text-white text-xl font-medium mb-6">
                                Mobile : <span className="font-bold text-yellow-600" > +91 971130165 </span>
                            </span>
                            <br />
                            <span className="text-white text-xl font-medium mb-6">
                                Email : <span className="text-yellow-600 font-bold" > John Doe </span>
                            </span>
                            <br />
                        </div>
                    </div>

                </div>
        )
    }
}

export default ProfileData