import React from 'react'
import { useHistory } from 'react-router';
import "./Post.css"

// assets
import postIcon from "../../Assets/cn_logo.png";
import pMap from "../../Assets/pmap.png";


const PostSurveyLocation = (props) => {
    const history = useHistory();
    console.log(history.location.state)

    return (
        <React.Fragment>

            <div className="post_home post_report">
                <div>
                    <div className="post_header">
                        <img src={postIcon} alt="posticon" />
                        <h2 className="text_darkblue">Post a <strong className="text_lightpurple">Survey!</strong> </h2>
                        <p className="text_lightgray">Get your ideas to other people. Post something that matters!</p>
                    </div>
                </div>
                <div className="pr_frorm">
                    <input className="full_input text_lightgray" placeholder="Let's give an interesting title" type="text" />
                    <div className="c_textarea survet_textArea">
                        <textarea
                            id="w3review"
                            name="w3review"
                            rows="4"
                            // cols="54"
                            placeholder="Tell us what happened!"
                            className="bluegreen_border text_lightgray"
                        ></textarea>
                    </div>
                    <span className="text_bluegreen"><strong> Enter location or pin location on map</strong></span>
                    {/* <div className="business_select_div survey_selc"> */}
                            <select className='region_slct' name="" id="">
                                <option value="Country">Country/Region</option>
                            </select>
                           
                        {/* </div> */}
                    <input className="full_input text_lightgray" placeholder="Address" type="text" />
                    <img src={pMap} className="pmap" alt="map" />
                    <div className="pcontinue_btn">
                        <button className="text-white bg_lightgreen border_none"
                            onClick={() => { history.push( "/survey-reward") }}
                        >Continue</button>
                    </div>
                </div>
            </div>

        </React.Fragment>
    )
}

export default PostSurveyLocation
