import React,{useState} from 'react'

export default function TextForm1(props) {
    const [text, setText] = useState("");

    const handleUpclick=()=>{
       let newtext = text.toUpperCase();
       setText(newtext)
       props.showAlert("Converted to Uppercase!" , "Success");
    } 
     const handleLwclick=()=>{
       let newtext = text.toLowerCase();
       setText(newtext)
       props.showAlert("Converted to Lowercase!", "Success");
    }  
    const handleClearclick=()=>{
       let newtext ='' ;
       setText(newtext)
       props.showAlert("Cleared!" , "Success");
    } 
    
    const handleOnChange=(event)=>{
       setText(event.target.value)
    }
  return (
        <>
    <div className="container" style={{color: props.mode === 'dark'?'white':'#042743'}}>
        <h1>{props.heading}</h1>
      <div className="mb-3">
  <label htmlFor="myBox" className="form-label">Enter The Text Here</label>

  <textarea className="form-control" value = {text} onChange={handleOnChange} style={{backgroundColor: props.mode=== 'dark'?'grey':'white' , color: props.mode=== 'dark'?'white':'#042743'}} id="myBox" rows="8"></textarea>
</div>
 <buttom className="btn btn-primary" onClick = {handleUpclick}>Convert to Uppercase</buttom>
 
 <buttom 
 className="btn btn-primary mx-3" onClick = {handleLwclick}>Convert to LowerCase</buttom>

 <button className="btn btn-primary mx-3" onClick = {handleClearclick}>Clear Text </button>
 


    </div>
        <div className="container my-3" style={{color: props.mode === 'dark'?'white':'#042743'}} >
            <h1>Your Text Summary</h1>
            <p>{text.split(" ").length} Words and {text.length} Characters </p>
            {/* <p>{0.008 * text.split(" ").length} Minutes read</p> */}
            <h2>Preview</h2>
            <p>{text.length>0?text:"Enter Something in the textbox above to preview it"}</p>

        </div>



    </>
  )
}
