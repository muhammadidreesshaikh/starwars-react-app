import React from 'react';
import './App.css';

import Header from './layout/Header';
import Slider from './layout/Slider';
import Films from './components/Films';
import Planets from './components/Planets';
import Spaceships from './components/Spaceships';
import Species from './components/Species';
import Vehicles from './components/Vehicles';
import Form from './components/Form';
import FormClass from './components/FormClass';
import Footer from './layout/Footer';

import { 
  BrowserRouter as Router, 
  Route,
  Switch 
} from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">

        <Header />
        <Slider />

          {/* all components */}
          <div>
            <Switch>
              {/* <Route exact path='/' component={Planets}></Route> */}
              <Route exact path='/films' component={Films}></Route>
              <Route exact path='/planets' component={Planets}></Route>
              <Route exact path='/spaceships' component={Spaceships}></Route>
              <Route exact path='/species' component={Species}></Route>
              <Route exact path='/vehicles' component={Vehicles}></Route>
              <Route exact path='/form' component={Form}></Route>
              <Route exact path='/formclass' component={FormClass}></Route>
            </Switch>
          </div>

          <Footer />

      </div>        
    </Router>
  );
}

export default App;