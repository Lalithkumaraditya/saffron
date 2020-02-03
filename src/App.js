import React from "react";
import HomePage from './components/home-page/home-page.component';
import ShopPage from '../src/components/pages/shop/shop.component';

import "./App.css";
import {Switch,Route} from 'react-router-dom';

const HatsPage = ()=>(
  <div>
  <h1> Hats Page dude...</h1>
  </div>
)

function App() {
  return(
    <div>
    <Switch>
    <Route exact path="/" component={HomePage} />
    <Route  path="/shop" component={ShopPage} />
    </Switch>
    

  

  </div>
  )
}

export default App;
