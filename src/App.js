import React from 'react';
import Header from './Header';
import TindeCards from './TinderCards'
import SwipeButtons from './SwipeButtons'
import { BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import './App.css';
import Chats from './Chats'
import './Chats.css'
import ChatScreen from './ChatScreen'

function App() {
  return (
    <div className="App">
      
      <Router>
        <Switch>
          <Route path="/chat/:person">
            <Header backButton="/chat" />
            <ChatScreen />
          </Route>

          <Route path="/chat">
           <Header backButton="/"/>
           <Chats />

          </Route>

          <Route path="/">
            <Header />

            <TindeCards />
            <SwipeButtons />
          </Route>


        </Switch>
        {/* header */}
        
        {/* tinder card */}
        {/* buttons below tinder card */}

        {/* chat screen */}
        {/* Individual chat screen */}
      </Router>

    </div>
  );
}

export default App;
