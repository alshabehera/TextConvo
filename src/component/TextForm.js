import React,{useState} from 'react'

export default function TextForm(props) {
    
const handleOnClick=()=>{
        console.log("Uppercase was clicked");
        let newText=text.toUpperCase();
        setText(newText);
        props.ShowAlert("Upper Case has been Enable","success")
    }
    const handleOnClick1=()=>{
      console.log("lowercase was clicked");
      let newText=text.toLowerCase();
      setText(newText);
      props.ShowAlert("Lower Case has been Enable","success")
    }
    const handleClearClick1=()=>{
      console.log("Clear text");
      let newText='';
      setText(newText);
      props.ShowAlert("Text has been cleared","success")
    }
    const handleOnChange=(event)=>{
        console.log("Text is changed");
        setText(event.target.value);
    }
    const handleExtraSpace =()=>{
      let newText=text.split(/[ ]+/);
      setText(newText.join(" "))
      props.ShowAlert("Extra space has been removed","success")
    }

    const[text,setText]= useState('Enter your Text');

   

  return (
    <>
    <div className="p-40 my-3" style={{color:props.mode==='light'?'#495057':'white'}} width="200" >
        <h3>{props.heading}</h3>
    
     <div className="mb-2">
      <textarea className="form-control"value={text} onChange={handleOnChange}id="myBox" style={{backgroundColor:props.mode==='light'?'white':'#495057',color:props.mode==='light'?'#495057':'white'}} rows="5"></textarea>
    </div>
    <button className="btn btn-primary" onClick={handleOnClick}>Convert to UpperCase</button>
    <button className="btn btn-primary mx-2 " onClick={handleOnClick1}>Convert to LowerCase</button>
    <button className="btn btn-primary mx-1 " onClick={handleClearClick1}>Clear Text</button>
    <button className="btn btn-primary mx-1 " onClick={handleExtraSpace}>Clear Extra space</button>
    </div>
    <div className="container my-3" style={{color:props.mode==='light'?'#495057':'white'}} >
      <h3>Your text Summary</h3>
      <p>{text.split(" ").length} words and {text.length} letters</p>
      <p >{0.08*text.split(" ").length} Minutes</p>
      <h3>Preview</h3>
      <p>{text}</p>

    </div>
    </>
  )
}


