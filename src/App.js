//import About from './component/About';//
import Navbar from './component/Navbar';
import TextForm from './component/TextForm';

import React,{useState} from 'react';
import Alert from './component/Alert';

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
      
    }
    else{
      setMode('dark');
      setText('light');
      setEnable('Enable Light mode');
      document.body.style.backgroundColor='#082949';
      ShowAlert("Dark Mode has been Enable","success");
    }
  }
  return (
    <>
    <Navbar title="TextUtiles" mode={mode} toggleMode={toggleMode} text={text} enable={enable}/>
    <Alert alert={alert}/>
    <div className="container mb-3">
    <TextForm ShowAlert={ShowAlert} heading="Enter the text to analyze" mode= {mode} text1={text} alert={alert}/>
    {/*<About/>*/}
    </div>
    
    </>
  );
}

export default App;
