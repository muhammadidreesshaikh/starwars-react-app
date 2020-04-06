import React from 'react';
import './App.css';

import Header from './layout/Header';
import Slider from './layout/Slider';
import Films from './components/Films';
import People from './components/People';
import Planets from './components/Planets';
import Spaceships from './components/Spaceships';
import Species from './components/Species';
import Vehicles from './components/Vehicles';
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
        <Footer />

          {/* all components */}
          <div>
            <Switch>
              {/* <Route exact path='/' component={Planets}></Route> */}
              <Route exact path='/films' component={Films}></Route>
              <Route exact path='/people' component={People}></Route>
              <Route exact path='/planets' component={Planets}></Route>
              <Route exact path='/spaceships' component={Spaceships}></Route>
              <Route exact path='/species' component={Species}></Route>
              <Route exact path='/vehicles' component={Vehicles}></Route>
            </Switch>
          </div>

      </div>        
    </Router>
  );
}

export default App;