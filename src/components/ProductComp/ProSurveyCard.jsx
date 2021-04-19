import React, { useState } from 'react'
import Button from '../btn/btn'
import dot from '../../Assets/dot.png'
import user from '../../Assets/user.png'
import location from '../../Assets/location.png'
import timer from '../../Assets/timer.png'
import users from '../../Assets/Group 3626.png'
import gift from '../../Assets/Icon awesome-gift.png'

const ProSurveyCard = ({list}) => {

    // let [list, Setlist] = useState(true)

    return (
        <div>
            {!list ?
                <div className='pro_proposal_card_container'>
                    <div className="proposal_card_body">
                        <div className='card_title_div proposal_Card_title'>
                            <h5><strong> Rising cataract issues in </strong></h5>
                        </div>
                        <p className="card-text">
                            Lorem ipsum dolor sit amet, consetetur
                            sadipscing elitr, sed diam nonumy
                            eirmod tempor invidunt ut labore et
                            dolore magna aliquyam erat, sed
                            diam voluptua. At vero eos et
                       </p>
                        <div className='location_div proposal_loc'>
                            <div>
                                <img src={location} alt="" />
                                <span>Lorem ipsum dolor sit</span>
                            </div>
                        </div>
                        <div className="perticipant_div">
                            <div>
                                <img src={timer} alt="" />
                                <span>2 Minutes</span>
                            </div>
                            <div>
                                <img src={users} alt="" />
                                <span>1500+</span>
                            </div>
                            <div>
                                <img src={gift} alt="" />
                                <span>50</span>
                            </div>
                        </div>
                        <p className='survey_hr' />
                        <div className='user_card_detail_div proposal_card_user pro_survey_user'>
                            <div>
                                <img src={user} alt="" />
                                <p>username</p>
                            </div>
                            <div>
                                <p>May, 1, 2021</p>
                            </div>
                        </div>
                    </div>
                    <div className="proposal_card_body">
                        <div className='card_title_div proposal_Card_title'>
                            <h5><strong> Rising cataract issues in </strong></h5>
                        </div>
                        <p className="card-text">
                            Lorem ipsum dolor sit amet, consetetur
                            sadipscing elitr, sed diam nonumy
                            eirmod tempor invidunt ut labore et
                            dolore magna aliquyam erat, sed
                            diam voluptua. At vero eos et
                       </p>
                        <div className='location_div proposal_loc'>
                            <div>
                                <img src={location} alt="" />
                                <span>Lorem ipsum dolor sit</span>
                            </div>
                        </div>
                        <div className="perticipant_div">
                            <div>
                                <img src={timer} alt="" />
                                <span>2 Minutes</span>
                            </div>
                            <div>
                                <img src={users} alt="" />
                                <span>1500+</span>
                            </div>
                            <div>
                                <img src={gift} alt="" />
                                <span>50</span>
                            </div>
                        </div>
                        <p className='survey_hr' />
                        <div className='user_card_detail_div proposal_card_user pro_survey_user'>
                            <div>
                                <img src={user} alt="" />
                                <p>username</p>
                            </div>
                            <div>
                                <p>May, 1, 2021</p>
                            </div>
                        </div>
                    </div>
                </div>
                // {/* survey list style  */}
                :
                <>
                    <div className='proposal_list_body'>
                        <div className='card_title_div proposal_Card_title'>
                            <h5><strong> Rising cataract issues in </strong></h5>
                            <div className='user_card_detail_div proposal_card_user pro_survey_user list_user'>
                                <div>
                                    <img src={user} alt="" />
                                    <p>username</p>
                                </div>
                            </div>
                        </div>
                        <div>
                            <p className="card-text">
                                Lorem ipsum dolor sit amet, consetetur
                                sadipscing elitr, sed diam nonumy
                                eirmod tempor invidunt ut labore et
                                dolore magna aliquyam erat, sed
                                diam voluptua. At vero eos et
                    </p>
                        </div>
                        <div className='pro_list_loc'>
                            <div className="perticipant_div list_perticipant">
                                <div>
                                    <img src={timer} alt="" />
                                    <span>2 Minutes</span>
                                </div>
                                <div>
                                    <img src={users} alt="" />
                                    <span>1500+</span>
                                </div>
                                <div>
                                    <img src={gift} alt="" />
                                    <span>50</span>
                                </div>
                            </div>
                            <div className='proposal_list'>
                                <div>
                                    <img src={location} alt="" />
                                    <span>Lorem ipsum dolor sit</span>
                                </div>
                            </div>
                            <div className='list_date'>
                                <div>
                                    <p>May, 1, 2021</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='proposal_list_body'>
                        <div className='card_title_div proposal_Card_title'>
                            <h5><strong> Rising cataract issues in </strong></h5>
                            <div className='user_card_detail_div proposal_card_user pro_survey_user list_user'>
                                <div>
                                    <img src={user} alt="" />
                                    <p>username</p>
                                </div>
                            </div>
                        </div>
                        <div>
                            <p className="card-text">
                                Lorem ipsum dolor sit amet, consetetur
                                sadipscing elitr, sed diam nonumy
                                eirmod tempor invidunt ut labore et
                                dolore magna aliquyam erat, sed
                                diam voluptua. At vero eos et
                    </p>
                        </div>
                        <div className='pro_list_loc'>
                            <div className="perticipant_div list_perticipant">
                                <div>
                                    <img src={timer} alt="" />
                                    <span>2 Minutes</span>
                                </div>
                                <div>
                                    <img src={users} alt="" />
                                    <span>1500+</span>
                                </div>
                                <div>
                                    <img src={gift} alt="" />
                                    <span>50</span>
                                </div>
                            </div>
                            <div className='proposal_list'>
                                <div>
                                    <img src={location} alt="" />
                                    <span>Lorem ipsum dolor sit</span>
                                </div>
                            </div>
                            <div className='list_date'>
                                <div>
                                    <p>May, 1, 2021</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </>
            }
        </div>
    )
}

export default ProSurveyCard
