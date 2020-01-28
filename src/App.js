import React from "react";
import HomePage from './components/home-page/home-page.component';

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
    <Route  path="/hats" component={HatsPage} />
    </Switch>
    

  

  </div>
  )
}

export default App;
