import './../css/App.css';
import Header from './Header';
import './../css/index.css'
import Toolbar from './Toolbar';
import Textbox from './Textbox';
import { useState } from 'react';

function App() {

  const [sharedState,setSharedState] = useState({
    textBox:''
  });

  return (
    <div className="App">
      <Header/>
      <Toolbar toolbarState={sharedState} setToolbarState = {setSharedState}/>
      <Textbox textboxState={sharedState} setTextboxState = {setSharedState}/>
      <style>
        @import url('https://fonts.googleapis.com/css2?family=Montserrat&family=Ubuntu&display=swap');
      </style>
    </div>
  );
}

export default App;

