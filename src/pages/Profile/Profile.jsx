import React, { useState } from 'react'
import Button from '../../components/Btn/Btn'
import ProfileCard from '../../components/ProfileComp/ProfileCard'
import TopicHead from '../../components/ProductComp/TopicHead'
import IssueCard from '../../components/ProductComp/IssueCard'
import ProSurveyCard from '../../components/ProductComp/ProSurveyCard'
import ProductProposalCard from '../../components/ProductComp/ProductProposalCard'
import ProfileProposalCard from '../../components/ProfileComp/ProfileProposalCard'
import { SurveyCard } from './CardData'
import grid from '../../Assets/Group 3602.png'
import listG from '../../Assets/list.png'
import gridG from '../../Assets/grid.png'
import liW from '../../Assets/liW.png'


import './Profile.css'

const Profile = () => {

    let [post, setPost] = useState('')
    let [list, setList] = useState(false)

    const handlePost = (e) => {
        setPost(e)
    }

    const handleGrid = (e) => {
        setList(e)
    }

    return (
        <div>
            <div className="main_profile_com">
                <div className="profile_card_comp_div">
                    <ProfileCard />
                </div>
                <div className="posts_ccard_div">
                    <div className="posts_btn_div">
                        <Button
                        
                            onClick={() => handlePost('issues')}
                            className={post==='issues'?`grn_bg`:'your_post_btn'}
                            value='Your Issues'
                        />
                        <Button
                            onClick={() => handlePost('survey')}
                            className={post==='survey'?`grn_bg btn_left`:'your_post_btn btn_left'}
                            value='Your Survey'
                        />
                        <Button
                            onClick={() => handlePost('proposal')}
                            className={post==='proposal'?`grn_bg btn_left`:'your_post_btn btn_left'}
                            value='Your Proposals'
                        />
                    </div>
                    {post === 'issues' ?
                        <>
                            <div className="head_div">
                                <TopicHead
                                    head='Your Issues'
                                    button={<Button className='reportProblm_btn' value='Report a problem' />}
                                />
                                <p className='textGrey'>You have posted <strong> "2" </strong> issues in tha last <strong> 30 </strong> days</p>
                            </div>
                            <div className="list_card_veiw">
                                <img onClick={() => handleGrid(false)} src={!list ? grid : gridG} alt="" />
                                <img onClick={() => handleGrid(true)} src={list ? listG : liW} alt="" />
                            </div>
                            <div className="your_issues_card_div">
                                <IssueCard  list={list} togleImg={true} className='width' />
                            </div>
                        </>
                        : post === 'survey' ?
                            <>
                                <div className="head_div">
                                    <TopicHead head='Your Surveys' button={<Button className='reportProblm_btn' value='Report a problem' />} />
                                    <p className='textGrey'>You have posted <strong> "2" </strong> surveys in tha last <strong> 30 </strong> days</p>
                                </div>
                                <div className="list_card_veiw">
                                    <img onClick={() => handleGrid(false)} src={!list ? grid : gridG} alt="" />
                                    <img onClick={() => handleGrid(true)} src={list ? listG : liW} alt="" />
                                </div>
                                <div className="your_issues_card_div">
                                    <ProSurveyCard 
                                    list={list} 
                                    data={SurveyCard.current_user} 
                                    className='width_proposal' left='btn_left' 
                                    togleImg={true}
                                    />
                                </div>
                            </>
                            : post === 'proposal' ?
                                <>
                                    <div className="head_div">
                                        <TopicHead head='Your Proposals' button={<Button className='reportProblm_btn' value='Report a problem' />} />
                                        <p className='textGrey'>You have posted <strong> "2" </strong> proposals in tha last <strong> 30 </strong> days</p>
                                    </div>
                                    <div className="list_card_veiw">
                                        <img onClick={() => handleGrid(false)} src={!list ? grid : gridG} alt="" />
                                        <img onClick={() => handleGrid(true)} src={list ? listG : liW} alt="" />
                                    </div>
                                    <div className="your_issues_card_div">
                                        {/* <ProfileProposalCard /> */}
                                        <ProfileProposalCard list={list} className='width_proposal'  />
                                    </div>
                                </>
                                :
                                <>
                                    <div className="head_div">
                                        <TopicHead head='Your Issues' button={<Button className='reportProblm_btn' value='Report a problem' />} />
                                        <p className='textGrey'>You have posted <strong> "2" </strong> issues in tha last <strong> 30 </strong> days</p>
                                    </div>
                                    <div className="your_issues_card_div">
                                        <IssueCard className='width' />
                                    </div>
                                    <div className="head_div">
                                        <TopicHead head='Your Surveys' button={<Button className='reportProblm_btn' value='Report a problem' />} />
                                        <p className='textGrey'>You have posted <strong> "2" </strong> surveys in tha last <strong> 30 </strong> days</p>
                                    </div>
                                    <div className="your_issues_card_div">
                                        <ProSurveyCard data={SurveyCard.current_user} className='width_proposal' left='btn_left' />
                                    </div>
                                    <div className="head_div">
                                        <TopicHead head='Your Proposals' button={<Button className='reportProblm_btn' value='Report a problem' />} />
                                        <p className='textGrey'>You have posted <strong> "2" </strong> proposals in tha last <strong> 30 </strong> days</p>
                                    </div>
                                    <div className="your_issues_card_div">
                                        <ProfileProposalCard className='width_proposal'  />
                                        {/* <ProfileProposalCard /> */}
                                    </div>
                                </>
                    }
                </div>
            </div>
        </div>
    )
}

export default Profile
