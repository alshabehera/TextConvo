//import About from './component/About';//
import Navbar from './component/Navbar';
import TextForm from './component/TextForm';
import React,{useState} from 'react';

function App() {
  const [mode,setMode]=useState('light')
  const [text,setText]=useState('dark')
  const [enable,setEnable]=useState('Change to dark mode')


  const toggleMode = ()=>{
    if(mode==='dark'){
      setMode('light');
      setText('dark');
      setEnable('Change to dark mode')
      
    }
    else{
      setMode('dark');
      setText('light');
      setEnable('Change to Light mode')
    }
  }
  return (
    <>
    <Navbar title="TextUtiles" mode={mode} toggleMode={toggleMode} text={text} enable={enable}/>
    <div className="container mb-3">
    <TextForm heading="Enter the text to analyze"/>
    {/*<About/>*/}
    </div>
    
    </>
  );
}

export default App;
