import React, { useState } from 'react'

export default function 

About (props) {

    const [myStyle, setStyle]=useState({
        color:'white',
        backgroundColor: 'black'
    })

  
    const TurnDark =()=>{
setStyle({
    color:'white',
    backgroundColor: 'black'
})
    }
    const TurnLight =()=>{
        setStyle({
            color:'black',
            backgroundColor: 'white'
        })
    }
    const ToggleMode =()=>{
        if(myStyle.backgroundColor=== 'white')
        setStyle({
            color:'white',
            backgroundColor: 'black'
        })
        else
        setStyle({
            color:'black',
            backgroundColor: 'white'
        })

    }
let accorStyle ={
    color: 'solid black',
    backgroundColor: props.mode=== 'dark'? 'grey':'white',
}

  return (<>
    <div className='container my-5' style={{color: props.mode==='dark'?'black': 'white', backgroundColor: props.mode==='dark'?'white': 'grey'  }}>
        <h1>About us</h1>
        <div className="accordion" id="accordionExample">
        <div className="accordion-item">
            <h2 className="accordion-header" id="headingOne">
            <button className="accordion-button" style={accorStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
               <strong>Description:</strong>
            </button>
            </h2>
            <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
            <div className="accordion-body">
                <strong>Utilities:</strong> We can perform various utilities on the text. We can convert the text to uppercase, lowercase, remove extra spaces, copy the text, clear the text, etc.
            </div>
            </div>
        </div>
        <div className="accordion-item">
            <h2 className="accordion-header" id="headingTwo">
            <button className="accordion-button collapsed" style={accorStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
               <strong>Modes:</strong>
            </button>
            </h2>
            <div id="collapseTwo"  className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
            <div className="accordion-body">
                <strong>Dark and Light: </strong>We can operate in two modes: Dark and Light. We can also toggle between the two modes.
            </div>
            </div>
        </div>
        <div className="accordion-item">
            <h2 className="accordion-header" id="headingThree">
            <button className="accordion-button collapsed" style={accorStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                <strong>Others:</strong>
            </button>
            </h2>
            <div id="collapseThree" className="accordion-collapse collapse"  aria-labelledby="headingThree" data-bs-parent="#accordionExample">
            <div className="accordion-body">
                <strong>Whats different from normal wordpad?</strong> It has many included functions over the normal wordpad like converting the text to uppercase, lowercase, removing extra spaces, copying the text, clearing the text, etc.
            </div>
            </div>
        </div>
        </div>
        <div className='container my-2'>

        <button type="button" className="btn btn-dark mx-3" onClick={TurnDark}>Enable Dark-Mode</button>
        <button type="button" className="btn btn-dark mx-3" onClick={TurnLight}>Enable LightMode</button>
        <button type="button" className="btn btn-dark mx-3 my-3" onClick={ToggleMode} >Toggle mode</button>
        </div>
    </div>
    </>
  )
}
