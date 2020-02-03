import React from "react";
import HomePage from './components/home-page/home-page.component';
import ShopPage from '../src/components/pages/shop/shop.component';

import "./App.css";
import {Switch,Route} from 'react-router-dom';
import Header from "./components/header/header.component";
import SignInAndSignUpPage from "./components/pages/sign-in-and-sign-up/sign-in-and-sign-up.component";



const HatsPage = ()=>(
  <div>
  <h1> Hats Page dude...</h1>
  </div>
)

function App() {
  return(
    <div>
    <Header />
    <Switch>
    <Route exact path="/" component={HomePage} />
    <Route  path="/shop" component={ShopPage} />
    <Route  path="/sigin" component={SignInAndSignUpPage} />
    </Switch>
    

  

  </div>
  )
}

export default App;
