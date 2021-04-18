import React from 'react'
import { BrowserRouter as Router, Switch, Route,} from "react-router-dom";
import Home from '../pages/home/home'
import Forget from '../pages/Forms/forget'
import TermAndCond from '../pages/termAndCond/termAndCond'
import Blog from '../pages/blogs/blog'
import SelectBlog from '../pages/blogs/oneBlogPage'


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
                </Switch>
            </Router>
        </div>
    )
}

export default AppRouter
