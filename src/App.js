
import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';


import TextForm1 from './components/TextForm1';
import Alert from './components/Alert';
import About from './components/About';

import { 
   BrowserRouter as Router, 
   Route, 
   Routes,
   

} from "react-router-dom";

function App() {
   const[mode , setMode] = useState('light');
   const[alert , setAlert] = useState(null);


   const showAlert=(message , type)=>{ 
      setAlert({
         msg : message,
         type : type
      })
      setTimeout(()=>{
         setAlert(null);
      },2000)
      

   }
   
 const toggleMode = ()=>{
      if(mode=== 'light'){
            setMode('dark');
            document.body.style.backgroundColor = '#042743';
            showAlert("Dark Mode Enabled", "Success");
            document.title = "TextUtils - Dark Mode";
         }else{
            setMode('light')
            document.body.style.backgroundColor = 'white'
            showAlert("Light Mode Enabled" , "Success");
            document.title = "TextUtils - Light Mode";
         
         }
   }

  return (
    <>
<Router>
<Navbar title = "TextUtils" mode={mode}  toggleMode ={toggleMode} />
 <Alert alert = {alert}/>
<div className="container my-3">
<Routes>
          <Route  exact path="/" element = { <TextForm1 showAlert={showAlert} heading = "Enter the text to analyze"  mode={mode}/>}/>
         
          <Route exact path="/About" element={<About/>}/>
          
        </Routes>
      </div>
    </Router>
</>   
     );
}

export default App;
