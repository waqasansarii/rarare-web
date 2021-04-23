import React from 'react'
import "./Post.css"

// assets
// import postIcon from "../../Assets/post_icon.png";
import postIcon from "../../Assets/cn_logo.png";

import bike from "../../Assets/undraw_indoor_bike_pwa4.png";
import car from '../../Assets/undraw_navigator_a479.png'
import { useHistory } from 'react-router';

const PostSurveyTemplate = () => {
    const history = useHistory();
    return (
        <React.Fragment>
        
            <div className="post_home post_survey">
                <div>
                    <div className="post_header">
                        <img src={postIcon} alt="posticon" />
                        <h2 className="text_darkblue">Post a <strong className="text_lightpurple">Survey!</strong> </h2>
                        <p className="text_lightgray">Get insights form the community so you make the best decisions!</p>
                    </div>
                    <div className="category_select">
                        <div className="cs_text">
                            <h2 className="text_darkblue">Select a template to continue!</h2>
                        </div>
                        <div className="cs_tabs_main slect_survey_post">
                            <div className="cs_tab">
                                <div className="cs_tab_box">
                                    <img src={bike} alt="" />
                                </div>
                                <div className="cs_tab_text">
                                    <h2 className="text_bluegreen">Health Analysis</h2>
                                    <p className="text_lightgray">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonu</p>
                                </div>
                            </div>
                            <div className="cs_tab">
                                <div className="cs_tab_box">
                                    <img src={car} alt="" />
                                </div>
                                <div className="cs_tab_text">
                                    <h2 className="text_bluegreen">Domestic Issues</h2>
                                    <p className="text_lightgray">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonu</p>
                                </div>
                            </div>
                        </div>
                            <div className="pcontinue_btn">
                                <button className="text-white bg_lightgreen border_none"
                                onClick={()=>{history.push("/survey-health")}}
                                >Continue</button>
                            </div>
                        
                    </div>
                </div>
            </div>
        
        
        </React.Fragment>
    )
}

export default PostSurveyTemplate
