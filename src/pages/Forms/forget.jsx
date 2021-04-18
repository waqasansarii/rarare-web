import React from 'react'
import { Link } from "react-router-dom";
import "./Forms.css";
// assets

// import lgLogo from "../../Assets/lg_logo.png";
// import orLine from "../../Assets/or_line.png";
// import loginBg from "../../Assets/lg_bgright.png"
import xSmallIcon from "../../Assets/Group 26@2x.png"
import xMedumIcon from "../../Assets/Group 25@3x.png"
import polygon1 from "../../Assets/Polygon 3@2x.png"
import polygon2 from "../../Assets/Polygon 2@2x.png"
import Button from '../../components/btn/btn';

const Forget = () => {
    return (

        <React.Fragment>

            <div className="main_form">
                <div className="signup_form">
                    <div className="s_form">
                        <div className="s_img">
                            <img src='https://raw.githubusercontent.com/MuhammadTalhaKhan22784/rarare-master/main/src/Assets/lg_logo.png' alt="lgLogo" />
                        </div>
                        <div className="s_text">
                            <h2 className="text_darkblue fw-bold mt-4">
                                Forgot <strong className="text_bluegreen">Password</strong>
                            </h2>
                        </div>
                        <div className="s_para">
                            <p className="text_lightgray">Enter your email address and we'll send you a magic link to recover your account!</p>
                        </div>

                        <form className="s_form_fields">
                          
                            <div>
                                <input className="full_input" placeholder="Email address" type="email" />
                            </div>
                            <div className="form_btn ">
                                <Button className='Sign_up_today_btn w-100 '  value='Recover Password' />
                            </div>
                            <span className="s_label text_lightgray">
                               Got a hint? <Link to="/" className="text_lightpurple">&nbsp;Try logging in again!</Link>
                            </span>
                        </form>
                    </div>

                </div>
                <div className="login_img_content">
                    <img className="lgic_1" src={xSmallIcon} alt="" />
                    <img className="lgic_2" src={xMedumIcon} alt="" />
                    <img className="lgic_3" src={polygon1} alt="" />
                    <img className="lgic_4" src={polygon2} alt="" />
                    <div className="d-flex justify-content-end">
                        <img className="s_bgimg" src='https://raw.githubusercontent.com/MuhammadTalhaKhan22784/rarare-master/main/src/Assets/lg_bgright.png' alt="loginBg" />
                    </div>
                </div>

            </div>

        </React.Fragment>

    )
}

export default Forget