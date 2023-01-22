import React,{useState} from 'react'
// import { Link } from 'react-router-dom'

export default function TextForm(props) {
  const [text,setText]= useState("");
 
const handleUPClick= ()=>{
  console.log("changed tp UPPERCASE! ");
  let NewText= text.toUpperCase();
  setText(NewText);
  props.showAlert("changed tp UPPERCASE!", "success");
      setTimeout (()=>{props.setAlert(null)},3000);
}
const handleLOWClick= ()=>{  
  console.log("changed tp lowercase! ");
  let NewText= text.toLowerCase();
  setText(NewText);
  props.showAlert("changed tp lowercase!", "success");
      setTimeout (()=>{props.setAlert(null)},3000);
}
const handleOnChange= (event)=>{
  console.log("On Change triggered!");
  setText(event.target.value);
}
const handleIFChange= (event)=>{
  console.log("On Change triggered!");
  setText('');
  props.showAlert("Text cleared!", "success");
      setTimeout (()=>{props.setAlert(null)},3000);
}
const handleCopy= (event)=>{
  console.log("Text copied!");
  
  navigator.clipboard.writeText(text);
}
// const handleSpaces= (event)=>{
//   console.log("Extra spaces removed");
//     let NewText= text.replace(/[  ]+/g, " ");
  
//     setText(NewText);
//     props.showAlert("Extra spaces removed", "success");
//     setTimeout (()=>{props.setAlert(null)},3000);
// }
const handleSpaces2= (event)=>{
  console.log("Extra spaces removed");
  let NewText= text.split(/[  ]+/);
 
  setText(NewText.join(" "));
      props.showAlert("Extra spaces removed", "success");
    setTimeout (()=>{props.setAlert(null)},3000);
}

  return (
    <>
    <div className='container'>

      <div className="mb-3">
        <label htmlFor="myBox" className="form-label"><h2>{props.heading} </h2></label>
        <textarea className="form-control" onChange={handleOnChange} value={text} id="myBox" rows="3"></textarea>
      </div>
      <button disabled={text.length===0} className='btn btn-primary my-1' onClick={handleUPClick}>Convert to UPPERCASE</button>
      <button  disabled={text.length===0} className='btn btn-primary mx-3 my-1' onClick={handleLOWClick}>Convert to lowercase</button>
      <button  disabled={text.length===0} className='btn btn-primary mx-3 my-1' onClick={handleIFChange}>Clear text</button>
      <button  disabled={text.length===0} className='btn btn-primary mx-3 my-1' onClick={handleCopy}>Copy text</button>
      <button  disabled={text.length===0} className='btn btn-primary mx-3 my-1' onClick={handleSpaces2}>Remove extra spaces</button>
    </div>
    
    <div className='continer my-3'>
      <h2>The second util is here - text summary</h2>
      <p>{text.split(" ").filter((element)=> {return element.length!==0}).length} words and {text.length} letters takes {0.008 *text.split(" ").filter((element)=> {return element.length!==0}).length } minutes to read</p>
      <h3>Preview</h3>
      <p>{text.length>0?text:"Enter text in text box to preview here"}</p>
    </div>
    </>
  )
}
