import React from 'react'
import pen from '../../Assets/Group 4726@2x.png'
import Button from '../btn/btn'
import SurveyCard from '../cards/surveyCard'

const Survey = () => {
    return (
        <div className='survey_container'>
            <div className='recent_issues_main_div'>
                <div className='what_we_do_sub_div'>
                    <div className='do_more_img_div'>
                        <img className='do_more_img' src={pen} alt="" />
                    </div>
                    <div>
                        <h3 className='what_we_do_head'><strong> Top surveys in your community </strong></h3>
                    </div>
                    <div className='dp_para_div'>
                        <p className='dp_para_head'>
                            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna
                            aliquyam erat, sed diam voluptua. At vero eos et accusam et justo d

                        </p>
                    </div>
                    <div className='voice_heard_btn_div'>

                        <Button className='voice_heard_btn_grn' value='Post a survey!' />
                        {/* <Button className='voice_heard_btn_white' value='Propose a deliberation' /> */}
                    </div>
                </div>
                <div className='survey_card_div'>
                    <SurveyCard />
                </div>
                <div className='view_all_div'>
                    <p>View all</p>
                </div>
            </div>
        </div>
    )
}

export default Survey
