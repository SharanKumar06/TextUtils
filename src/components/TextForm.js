import React,{useState} from 'react'

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
    <div>

      <div className="mb-3">
        <label htmlFor="myBox" className="form-label">{props.heading} </label>
        <textarea className="form-control" onChange={handleOnChange} value={text} id="myBox" rows="3"></textarea>
      </div>
      <button className='btn btn-primary mx-2' onClick={handleUPClick}>Convert to UPPERCASE</button>
      <button className='btn btn-primary mx-3' onClick={handleLOWClick}>Convert to lowercase</button>
      <button className='btn btn-primary mx-3' onClick={handleIFChange}>Clear text</button>
      <button className='btn btn-primary mx-3' onClick={handleCopy}>Copy text</button>
      <button className='btn btn-primary mx-3' onClick={handleSpaces2}>Remove extra spaces</button>
    </div>
    
    <div className='continer my-3'>
      <h1>The second util is here - text summary</h1>
      <p>{text.split(" ").length} words and {text.length} letters takes {0.008 *text.split(" ").length } minutes to read</p>
      <h3>Preview</h3>
      <p>{text.length>0?text:"Enter text in text box to preview here"}</p>
    </div>
    </>
  )
}
