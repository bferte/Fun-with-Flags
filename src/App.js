import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './pages/Home'
import Contact from './pages/Contact';
import Quizz from './pages/Quizz';


function App() {
  return (
   <>
      <div className="nameApp">
        <h1><span style={{color: 'red' }}>Fun</span> with Flags</h1>
        <h3>à qui appartient ce drapeau ?</h3>               
      </div>
   <BrowserRouter>
      <Switch>
        <Route path='/' exact component={Home}/>
        <Route path='/quizz' component={Quizz}/>
        <Route path='/contact' component={Contact}/>
       
      </Switch>
      </BrowserRouter>
      <footer>
        <div className="signature">
          <p>Briac Ferté - 2020</p>
        </div>
      </footer>

   </>
  );
}

export default App;
