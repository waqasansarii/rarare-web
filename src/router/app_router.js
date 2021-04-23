import React from 'react'
import { BrowserRouter as Router, Switch, Route, } from "react-router-dom";
import Home from '../pages/Home/Home'
import Forget from '../pages/Forms/forget'
import TermAndCond from '../pages/TermAndCond/TermAndCond'
import Blog from '../pages/Blogs/Blog'
import SelectBlog from '../pages/Blogs/OneBlogPage'
import Product from '../pages/Products/Product'
import Authority from '../pages/Bussinus/Authority'
import BusinessInfo from '../pages/Bussinus/BusinessInfo'
import BusinessUploadImg from '../pages/Bussinus/Upload_img'
import AuthorityInfo from '../pages/Bussinus/AuthorityInfo'
import ConfirmRegistration from '../pages/Bussinus/ConfirmRegistraion'
import Profile from '../pages/Profile/Profile'
import AccountSetting from '../pages/Profile/AccountSetting'
import ProfileSetting from '../pages/Profile/ProfileSetting'
import SecuritySetting from '../pages/Profile/SecuritySetting'
import NotificationSetting from '../pages/Profile/NotificationSetting'
import Survey from '../pages/Survey/Survey'
import PostSurveyTemplate from '../pages/PostSurvey/PostSurveyTemplate'
import SurveyHealth from '../pages/PostSurvey/SurveyHealth'
import PostSurveyLocation from '../pages/PostSurvey/PostSurveyLocation'
import PostSurveyReward from '../pages/PostSurvey/SurveyReward'
import PostSurveyReceive from '../pages/PostSurvey/PostSurveyReceive'
import SurveyListPage from '../pages/Survey/SurveyListPage'


const AppRouter = () => {
    return (
        <div>
            <Router>
                <Switch>
                    <Route exact path='/' component={Home} />
                    <Route path='/forget' component={Forget} />
                    <Route path='/terms' component={TermAndCond} />
                    <Route exact path='/blog' component={Blog} />
                    <Route path='/blog/:id' component={SelectBlog} />
                    <Route path='/product' component={Product} />
                    <Route path='/business-authority' component={Authority} />
                    <Route path='/business-info' component={BusinessInfo} />
                    <Route path='/business-logo' component={BusinessUploadImg} />
                    <Route path='/authority-info' component={AuthorityInfo} />
                    <Route path='/business-confirm' component={ConfirmRegistration} />
                    <Route path='/profile' component={Profile} />
                    <Route path='/account-setting' component={AccountSetting} />
                    <Route path='/profile-setting' component={ProfileSetting} />
                    <Route path='/security-setting' component={SecuritySetting} />
                    <Route path='/notification-setting' component={NotificationSetting} />
                    <Route exact path='/survey/:id' component={Survey} />
                    <Route exact path='/survey/:id/:id' component={SurveyListPage} />
                    <Route path='/post-survey-tamplate' component={PostSurveyTemplate} />
                    <Route path='/survey-health' component={SurveyHealth} />
                    <Route path='/survey-location' component={PostSurveyLocation} />
                    <Route path='/survey-reward' component={PostSurveyReward} />
                    <Route path='/survey-submit' component={PostSurveyReceive} />
                </Switch>
            </Router>
        </div>
    )
}

export default AppRouter
