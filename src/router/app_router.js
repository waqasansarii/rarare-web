import React from 'react'
import { BrowserRouter as Router, Switch, Route,} from "react-router-dom";
import Home from '../pages/home/home'
import Forget from '../pages/Forms/forget'
import TermAndCond from '../pages/termAndCond/termAndCond'
import Blog from '../pages/blogs/blog'
import SelectBlog from '../pages/blogs/oneBlogPage'
import Product from '../pages/Products/Product'
import Authority from '../pages/Bussinus/authority'
import BusinessInfo from '../pages/Bussinus/businessInfo'
import BusinessUploadImg from '../pages/Bussinus/upload_img'
import AuthorityInfo from '../pages/Bussinus/authorityInfo'
import ConfirmRegistration from '../pages/Bussinus/confirmRegistraion'


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
                </Switch>
            </Router>
        </div>
    )
}

export default AppRouter
