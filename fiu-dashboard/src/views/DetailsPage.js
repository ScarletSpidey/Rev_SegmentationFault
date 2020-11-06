import React from 'react'

import ProfileData from "../components/ProfileData"
import FinancialData from "../components/FinancialData"
import InvestmentData from "../components/InvestmentData"

import TransactionGraph from "../components/TransactionGraph"
import TransactionTypes from "../components/TransactionTypes"

import {Link} from 'react-router-dom'

import Img3 from '../assets/submit.svg'

import {
    ModalProvider,
    Modal,
    useModal,
    ModalTransition,
} from 'react-simple-hook-modal'

import '../assets/modal.css'

  const MyComponent = () => {
    const { isModalOpen, openModal,closeModal } = useModal();
  
    return (
      <>
        <button onClick={openModal} className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded-full text-lg">Accept</button> &nbsp;&nbsp;&nbsp;
        <Modal
          id="any-unique-identifier"
          isOpen={isModalOpen}
          onBackdropClick={closeModal}
          transition={ModalTransition.SCALE}
        >
            <div className="container mx-auto my-auto  px-5 py-6  items-center">
                <h1 className="font-bold text-white pb-10 text-3xl text-center">The Request has been Accepted!</h1>
                <center>
                <img src={Img3} alt="details" className="pb-8" style={{width:"50%"}}/>
                </center>
                <div className="pt-10">
                <Link to="/dashboard">
                    <center>
                        <button className="text-white bg-orange-500 border-0 py-2 px-6 focus:outline-none hover:bg-orange-600 rounded-full text-lg">
                            Go Back to Home
                        </button>
                    </center>
                </Link>
                </div>
            </div>
        </Modal>
      </>
    );
  };

const DetailsPage = () => {
    return(
        <section className="text-gray-500 bg-gray-900 body-font">
            <div className="container px-5 pt-12 mx-auto flex flex-wrap items-center">
                <h1 className="font-bold text-white text-3xl">Request Details:</h1>
            </div>
            <br />
            <br />
            <div className="container px-5 pt-12 mx-auto flex flex-wrap items-center">
                    
                    <ProfileData />
                    <FinancialData />
                    <InvestmentData />
                    <TransactionGraph />
                    <TransactionTypes />
            </div>
            <div class="flex justify-end mr-64 pr-32">
                <ModalProvider>
                    <MyComponent />
                </ModalProvider>
                <button class="ml-4 inline-flex text-white bg-red-500 border-0 py-2 px-6 focus:outline-none hover:bg--700 hover:text-white rounded-full text-lg">Reject</button>
            </div>
        </section>
    )
}

export default DetailsPage