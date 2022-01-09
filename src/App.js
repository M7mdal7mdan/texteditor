import logo from './logo.svg';
import './App.css';
import React,{useState} from "react";


function App() {
  const [style, setStyle] = useState("");
  
  

  const styles = {
    bold: { fontWeight: "bold" },
    italic: { fontStyle: "italic" },
    underline: { textDecorationLine: "underline" },
    yellow:{color: "yellow"},
    blue:{color: "blue"},
    red:{color: "red"},
    black:{color: "black"},
    purple:{color: "purple"}
  };
  
  
  return (
    
    <div className="login-box">
      
      <h1 className='h1'> Text Editor</h1>
      <button className='button' onClick={() => setStyle(style === ""? "bold" :"")}>Bold</button>
      <button className='button' onClick={() => setStyle(style === ""? "italic":"")}>Italic</button>
      <button className='button' onClick={() => setStyle(style === ""? "underline":"")}>Underline</button>
         <div>
         <textarea  style = {styles[style]} placeholder="Type your text" />

         </div>
         <div>
         <button onClick={() => setStyle(style === ""? "yellow" :"")}>Yellow</button>
         <button onClick={() => setStyle(style === ""? "blue":"")}>Blue</button>
         <button onClick={() => setStyle(style === ""? "red":"")}>Red</button>
         <button onClick={() => setStyle(style === ""? "black" :"")}>Black</button>
         <button onClick={() => setStyle(style === ""? "purple":"")}>Purple</button>
     
         </div>
    </div>
  );
}

export default App;
