//import About from './component/About';//
import Navbar from './component/Navbar';
import TextForm from './component/TextForm';
import About from './component/About';

import React,{useState} from 'react';
import Alert from './component/Alert';
import { BrowserRouter as Router ,Routes ,Route } from 'react-router-dom';

function App() {
  const [mode,setMode]=useState('light');
  const [text,setText]=useState('dark');
  const [enable,setEnable]=useState('Enable dark mode');
  const[alert,setAlert]=useState(null);

  const ShowAlert =(message,type)=>{
  setAlert({ 
     msg:message,
    type:type}
  
  )
 setTimeout(()=>{
  setAlert(null);
 },2000);
}


  const toggleMode = ()=>{
    if(mode==='dark'){
      setMode('light');
      setText('dark');
      setEnable('Enable dark mode');
      document.body.style.backgroundColor="white";
      ShowAlert("Light Mode has been Enable","success");
      document.title='TextUtils - Light Mode'
      
    }
    else{
      setMode('dark');
      setText('light');
      setEnable('Enable Light mode');
      document.body.style.backgroundColor='#082949';
      ShowAlert("Dark Mode has been Enable","success");
      document.title='TextUtils - Dark Mode'
    }

  }
  return (
    <>
    <Router>
    <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} text={text} enable={enable}/>
    <Alert alert={alert}/>
    <div className="container mb-3">
      <Routes>
      <Route exact path='/' element={<TextForm ShowAlert={ShowAlert} heading="Enter the text to analyze" mode= {mode} text1={text} alert={alert}/>} >
       
       </Route>
         <Route exact path='/about' element={<About/>}>
         
         </Route>
         
         
      </Routes>
      </div>
      </Router>
   
   
   
    </>
  );
}

export default App;
