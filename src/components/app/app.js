import React from 'react';
import {MainPage, CartPage} from '../pages';
import AppHeader from '../app-header';

import Background from './food-bg.jpg';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import ItemPage from '../pages/item-page'

const App = () => {
    return (
        <Router>
        <div style={{background: `url(${Background}) center center/cover no-repeat`}} className="app">
            <AppHeader total={50}/>
            <Route path='/menu' exact component={()=><MainPage/>}></Route>
            <Route path='/menu/:id' exact render={({match})=><ItemPage match={match}/>}></Route>
            <Route path='/item' component={()=><CartPage/>}></Route>
            
        </div>
        </Router>
    )
}

export default App;