import React from 'react'
import ProfilePic from '../navbar/ProfilePic'
import Returns from '../cards/Returns'
import CreditCard from '../cards/CreditCard'
import BoldText from '../assets/BoldText'
import SmallText from '../assets/SmallText'
import MyButton from '../dashboard/MyButton'
import FullButton from './FullButton'
import TextBox from './TextBox'

export default function MyCards({cardToggle}) {

    return (
        <>
            <div className="row">
                <div className="col-9 col-sm-9 col-md-10 col-lg-8">
                    <BoldText text={"My cards"} style={{ fontSize: '24px' }} />
                </div>
                <div className="col-1 col-sm-2 col-md-1 col-lg-2">
                    <MyButton img={"src/assets/svg/settingsGrey.svg"} />
                </div>
                <div className="col-1 col-sm-1 col-md-1 col-lg-2">
                    <button type="button" className="btn btn-light" onClick={cardToggle}>
                        <img src="src/assets/svg/leftArrow.svg" />
                    </button>
                </div>
            </div>
            <CreditCard />
            <div className="m-1 p-1 rounded row">
                <div className="col-12">
                    <SmallText num={"Your Balance"} />
                </div>
                <div className="col-5 col-sm-5 col-md-5 col-lg-5 border-bottom pb-2">
                    <BoldText text={"$120.456"} style={{ fontSize: '20px' }} />
                    <SmallText num=".00" />
                </div>
                <div className="col-7 col-sm-7 col-md-7 col-lg-7 pb-2 border-bottom">
                    <div className="row">
                        <div className="col-6 col-sm-6 col-md-6 col-lg-6">
                            <Returns arrow={"src/assets/svg/upArrow.svg"} num={"16.60%"} />
                        </div>
                        <div className="col-6 col-sm-6 col-md-6 col-lg-6">
                            <Returns arrow={"src/assets/svg/downArrow.svg"} num={"10.30%"} />
                        </div>
                    </div>
                </div>
                <div className="col-6 col-sm-6 col-md-6 col-lg-6 pt-2">
                    <SmallText num={"Currency"} />
                </div>
                <div className="col-6 col-sm-6 col-md-6 col-lg-6 pt-2">
                    <SmallText num={"Status"} />
                </div>
                <div className="col-6 col-sm-6 col-md-6 col-lg-6">
                    <BoldText text={"USD/UAH"} style={{ fontSize: '15px' }} />
                </div>
                <div className="col-6 col-sm-6 col-md-6 col-lg-6">
                    <BoldText text={"Active"} style={{ fontSize: '15px' }} />
                </div>
            </div>
            <div className="d-grid">
                <FullButton />
            </div>
            <div className="row">
                <div className="col-10 col-sm-10 col-md-11 col-lg-10">
                    <BoldText text={"Quick Transfer"} style={{ fontSize: '20px' }} />
                </div>
                <div className="col-2 col-sm-2 col-md-1 col-lg-2">
                    <MyButton img={"src/assets/svg/addGrey.svg"} />
                </div>
            </div>
            <div className="row ms-0 mt-2">
                {[...Array(5)].map((_, index) => (
                    <div key={index} className="col-2 col-sm-2 col-md-2 col-lg-2">
                        <ProfilePic w={40} />
                    </div>
                ))}
                <div className="col-2 col-sm-2 col-md-2 col-lg-2">
                    <MyButton img={"src/assets/svg/rightArrow.svg"} />
                </div>
            </div>
            <div className='m-3'>
                <SmallText num={"Card Number"} />
            </div>
            <div className='m-3'>
                <TextBox placeholder={"VISA"} />
            </div>

        </>

    )
}
