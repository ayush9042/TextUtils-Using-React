import React, { useState } from 'react';


export default function Textform(props) {
  const [ text, setText ] = useState("Enter Text Here");

  const handleOnChange = (event) => {
    console.log("Something Changed");
    setText(event.target.value);
  }

  const handleUpClick = () => {
    let newTEXT = text.toUpperCase();
    setText(newTEXT);
    props.showAlert("Converted to UpperCase", "success");
  }

  const handleLowClick = () => {
    let lowText = text.toLocaleLowerCase();
    setText(lowText);
    props.showAlert("Converted to LowerCase", "success");
  }

  const handleClearClick = () => {
    setText('');
    props.showAlert("Text cleared", "success");
  }

  return (
    <>
    <div>
      <div className="container mb-3" style={{color : props.mode === 'light' ? 'black' : 'white'}}>
        <h1>{props.heading}</h1>
        <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8" style={{ backgroundColor : props.mode === 'light' ? 'white' : 'grey', color : props.mode === 'light' ? 'black' : 'white'}}></textarea>
      </div>
      <button className="btn btn-primary" onClick={handleUpClick}>Convert to Uppercase</button>
      <button className="btn btn-primary mx-3" onClick={handleLowClick}>Convert to Lowercase</button>
      <button className="btn btn-primary mx-3" onClick={handleClearClick}>Clear Text</button>
    </div>

    <div className="container my-3" style={{color : props.mode === 'light' ? 'black' : 'white'}}>
      <h1>Your Text Summary</h1>
      <p>{text.split(" ").length} total words and {text.length} total characters.</p>
      <p>{0.008 * text.split(" ").length} minutes read</p>
      <h2>Preview</h2>
      <p>{text}</p>
    </div>
    </>
  )
}
