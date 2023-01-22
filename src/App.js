// import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
import Alert from './components/Alert';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
// import React from 'react'

// import ReactDOM from "react-dom/client";
// import { createRoot } from "react-dom/client";
import {
  // createBrowserRouter,
  BrowserRouter as Router,
 Routes,
  // RouterProvider,
  Route,
  // Link
} from "react-router-dom";

function App() {  //function based component

  
  const[Mode,setMode]= useState('light');
  const[alert,setAlert]= useState(null);

  const showAlert=(msg,type) =>{
    setAlert({
msg: msg,
type: type
    });
  }   

  const toggleMode=() =>{
    if(Mode==='light'){
      let bd= document.getElementsByTagName('body')[0];
      bd.style.backgroundColor= 'black';
      bd.style.color= 'white';
      setMode('dark');
      showAlert("Dark mode enabled", "success");
      
      
      setTimeout (()=>{setAlert(null)},3000);
      
      
    }
    else{
      
      setMode('light');
      let bd= document.getElementsByTagName('body')[0];
      bd.style.backgroundColor= 'white';
      bd.style.color= 'black';
      showAlert("Dark mode disabled", "success");
      setTimeout (()=>{setAlert(null)},3000);
    }
  }
  return (        // returns JSX
 
<>

 
  <Router>
    <div >

 <Navbar alert={alert}  title="TextUtils" aboutText="About us" mode={Mode} toggleMode={toggleMode}/>
 <div className='pb-15' style={{height:'70px'}}>

  <Alert alert={alert}/> 
 </div>
    </div>
  <div className='container'>

  <Routes>
    {/* <Link to="/"> hello</Link> */}
      
  <Route exact path="/TextUtils"  element={<TextForm  setAlert={setAlert} showAlert={showAlert} heading="Enter the text u want" />}/> 
    <Route exact path="/about" element={<About mode={Mode}/>}/>
  {/* <TextForm  setAlert={setAlert} showAlert={showAlert} heading="Enter the text u want" /> */}
 {/* <About></About> */}

  </Routes>
  </div>
  </Router>
 
 </>   
   
  );
}
 

export default App;
