import React,{useState} from 'react'

export default function About () {
   const[myStyle,setMyStyle] =useState( {color:'black',
   backgroundColor:'white'
  })

  const[btnText,setBtnText] =useState('Enable Dark Mode')
  
  const toggleStyle=()=>{ if(myStyle.color === 'white'){
    setMyStyle({
      color:'black',
      backgroundColor:'white'
    
    },
    setBtnText("Enable Dark Mode"))
  }
  else
  {setMyStyle({
      color:'white',
      backgroundColor:'black',
      border: '1px Solid white'
},
setBtnText("Enable Light Mode"))
}}
   



   
  return (
    <div className="container my-3" style={myStyle}>
        <h3>About Us</h3>
      <div className="accordion my-2" id="accordionExample">
        <div className="accordion-item">
         <h2 className="accordion-header">
      <button className="accordion-button" type="button" data-bs-toggle="collapse" style={myStyle}  data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
        Accordion Item #1
      </button>
          </h2>
        <div id="collapseOne" className="accordion-collapse collapse show" style={myStyle} data-bs-parent="#accordionExample">
      <div className="accordion-body">
        <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" style={myStyle} data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
        Accordion Item #2
      </button>
    </h2>
    <div id="collapseTwo" className="accordion-collapse collapse" style={myStyle} data-bs-parent="#accordionExample">
      <div className="accordion-body">
        <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" style={myStyle} data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
        Accordion Item #3
      </button>
    </h2>
    <div id="collapseThree" className="accordion-collapse collapse" style={myStyle} data-bs-parent="#accordionExample">
      <div className="accordion-body">
        <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
  </div>
</div>
<div clasName="container">
  <button onClick={toggleStyle} type="button" className="btn btn-primary my-2">{btnText}</button></div>

    </div>
  )
}



