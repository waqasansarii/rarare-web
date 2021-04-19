import React from 'react'
import slider1 from '../../Assets/Rectangle 95@3x.png'
import user from '../../Assets/user.png'
import location from '../../Assets/location.png'



const IssueCard = ({ list }) => {

    return (
        <React.Fragment>
            {!list ?
                <div className='issue_card_container'>
                    <div className="card issue_card" style={{ width: '15rem' }}>
                        <div className='issue_card_img'>
                            <img src={slider1} class="card-img-top" alt="..." />
                            <img className='card_num' src={user} alt="" />
                        </div>
                        <div className="issue_card_body">
                            <div className='card_title_div issue_Card_title'>
                                <h5><strong> Title of issues </strong></h5>
                            </div>
                            <p className="card-text">
                                Lorem ipsum dolor sit amet, consetetur
                                sadipscing elitr, sed diam nonumy
                                eirmod tempor invidunt ut labore et
                                dolore magna aliquyam erat, sed
                                diam voluptua. At vero eos et
                        </p>
                            <div className='location_div issue_loc'>
                                <img src={location} alt="" />
                                <p>Lorem ipsum dolor sit</p>
                            </div>
                        </div>
                        <div className='user_card_detail_div issue_card_user'>
                            <div>
                                <img src={user} alt="" />
                                <p>username</p>
                            </div>
                            <div>
                                <p>May, 1, 2021</p>
                            </div>
                        </div>
                    </div>
                    <div className="card issue_card" style={{ width: '15rem' }}>
                        <div className='issue_card_img'>
                            <img src={slider1} class="card-img-top" alt="..." />
                            <img className='card_num' src={user} alt="" />
                        </div>
                        <div className="issue_card_body">
                            <div className='card_title_div issue_Card_title'>
                                <h5><strong> Title of issues </strong></h5>
                            </div>
                            <p className="card-text">
                                Lorem ipsum dolor sit amet, consetetur
                                sadipscing elitr, sed diam nonumy
                                eirmod tempor invidunt ut labore et
                                dolore magna aliquyam erat, sed
                                diam voluptua. At vero eos et
                        </p>
                            <div className='location_div issue_loc'>
                                <img src={location} alt="" />
                                <p>Lorem ipsum dolor sit</p>
                            </div>
                        </div>
                        <div className='user_card_detail_div issue_card_user'>
                            <div>
                                <img src={user} alt="" />
                                <p>username</p>
                            </div>
                            <div>
                                <p>May, 1, 2021</p>
                            </div>
                        </div>
                    </div>
                    <div className="card issue_card" style={{ width: '15rem' }}>
                        <div className='issue_card_img'>
                            <img src={slider1} class="card-img-top" alt="..." />
                            <img className='card_num' src={user} alt="" />
                        </div>
                        <div className="issue_card_body">
                            <div className='card_title_div issue_Card_title'>
                                <h5><strong> Title of issues </strong></h5>
                            </div>
                            <p className="card-text">
                                Lorem ipsum dolor sit amet, consetetur
                                sadipscing elitr, sed diam nonumy
                                eirmod tempor invidunt ut labore et
                                dolore magna aliquyam erat, sed
                                diam voluptua. At vero eos et
                        </p>
                            <div className='location_div issue_loc'>
                                <img src={location} alt="" />
                                <p>Lorem ipsum dolor sit</p>
                            </div>
                        </div>
                        <div className='user_card_detail_div issue_card_user'>
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

                :
                <div className='proposal_list_body issue_list_style'>
                    <div className='list_style_img'>
                        <img src={slider1} className="card-img-top" alt="..." />
                        <img className='list_card_num' src={user} alt="" />
                    </div>
                    <div className='list_issue_body'>
                        <div className='card_title_div proposal_Card_title isseu_list_title'>
                            <h5><strong> Title of issues </strong></h5>
                            <div className='user_card_detail_div proposal_card_user pro_survey_user list_user'>
                                <div>
                                    <p className='list_issue_user'>username</p>
                                    <img src={user} alt="" />
                                </div>
                            </div>
                        </div>
                        <div>
                            <p className="card-text issue_list_para">
                                Lorem ipsum dolor sit amet, consetetur
                                sadipscing elitr, sed diam nonumy
                                eirmod tempor invidunt ut labore et
                                dolore magna aliquyam erat, sed
                                diam voluptua. At vero eos et
                    </p>
                        </div>
                        <div className='pro_list_loc'>
                            <div className='proposal_list issue_list_loc'>
                                <div>
                                    <img src={location} alt="" />
                                    <p>Lorem ipsum dolor sit</p>
                                </div>
                            </div>
                            <div className='list_date issue_list_data'>
                                <p>May, 1, 2021</p>
                            </div>
                        </div>
                    </div>
                </div>
            }
        </React.Fragment>
    )
}

export default IssueCard
