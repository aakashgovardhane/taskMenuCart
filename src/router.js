import React from 'react'
import { Route, BrowserRouter } from 'react-router-dom'
import Navbar from './components/Navbar'
import MyFeeds from './components/MyFeeds'
import ColorStrip from './components/ColorStrip'

const Router = () => {
    return (
        <>
            <BrowserRouter>
                <Navbar />
                <Route exact path='/' component={MyFeeds} />
                <Route path='/colorstrip' component={ColorStrip} />
            </BrowserRouter>
        </>
    )
}

export default Router