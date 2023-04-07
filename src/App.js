//import About from './component/About';//
import Navbar from './component/Navbar';
import TextForm from './component/TextForm';
import React,{useState} from 'react';

function App() {
  const [mode,setMode]=useState('light')
  const [text,setText]=useState('dark')
  const [enable,setEnable]=useState('Enable dark mode')


  const toggleMode = ()=>{
    if(mode==='dark'){
      setMode('light');
      setText('dark');
      setEnable('Enable dark mode');
      document.body.style.backgroundColor="white";
      
    }
    else{
      setMode('dark');
      setText('light');
      setEnable('Enable Light mode');
      document.body.style.backgroundColor='#082949';
    }
  }
  return (
    <>
    <Navbar title="TextUtiles" mode={mode} toggleMode={toggleMode} text={text} enable={enable}/>
    <div className="container mb-3">
    <TextForm heading="Enter the text to analyze" mode= {mode} text1={text}/>
    {/*<About/>*/}
    </div>
    
    </>
  );
}

export default App;
