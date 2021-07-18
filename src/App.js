import React from "react";
import './App.css';
import Nav from "./Nav";
import About from "./About";
import Shop from "./Shop";
import auditorView from "./auditorView";
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';


function App() {
  return (
      <Router>
          <div className="App">
        <Nav/>
              <Route path ="/" exact component={Home}/>
              <Route path ="/about" component={About}/>
              <Route path ="/shop" component={Shop}/>


    </div>
      </Router>
  );
}

const Home = ()=>(
    <div>
        <p1>Home page</p1>
    </div>

)
export default App;
