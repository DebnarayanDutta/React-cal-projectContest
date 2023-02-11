import React, {useState} from 'react';
import './App.css';


function App() {

  const[adduser,setAddUser]=useState("")
  const[err,setErr]=useState("")
  const[colors,setColors]=useState("")

  function addHandler(){
 
    let addnum1 = document.querySelector('#num1').value
    let addnum2 = document.querySelector('#num2').value
    let sum = parseInt(addnum1) + parseInt(addnum2)
    if(addnum1=== ""){
      setErr("Error : Num1 cannot be empty")
      setAddUser("")
      setColors("red")
    }
    else if(addnum2===""){
      setErr("Error : Num2 cannot be empty")
      setAddUser("")
      setColors("red")
      
    }else{
    setAddUser("Result="+sum)
     setErr("Success: Your result is shown above!")
     setColors("green")
    }
  }
  function subHandler(){
    let addnum1 = document.querySelector('#num1').value
    let addnum2 = document.querySelector('#num2').value
    let sum = parseInt(addnum1) - parseInt(addnum2)
    if(addnum1=== ""){
      setErr("Error : Num1 cannot be empty")
      setAddUser("")
      setColors("red")
    }
    else if(addnum2===""){
      setErr("Error : Num2 cannot be empty")
      setAddUser("")
      setColors("red")
    }else{
    setAddUser("Result="+sum)
    setErr("Success: Your result is shown above!")
    setColors("green")
    }
  }
  function multiHandler(){
    let addnum1 = document.querySelector('#num1').value
    let addnum2 = document.querySelector('#num2').value
    let sum = parseInt(addnum1) * parseInt(addnum2)
    if(addnum1=== ""){
      setErr("Error : Num1 cannot be empty")
      setAddUser("")
      setColors("red")
    }
    else if(addnum2===""){
      setErr("Error : Num2 cannot be empty")
      setAddUser("")
      setColors("red")
    }else{
    setAddUser("Result="+sum)
    setErr("Success: Your result is shown above!")
    setColors("green")
    }
  }
  function divHandler(){
    let addnum1 = document.querySelector('#num1').value
    let addnum2 = document.querySelector('#num2').value
    let sum = parseInt(addnum1) / parseInt(addnum2)
    if(addnum1=== ""){
      setErr("Error : Num1 cannot be empty")
      setAddUser("")
      setColors("red")       
    }
    else if(addnum2===""){
      setErr("Error : Num2 cannot be empty")
      setAddUser("")
      setColors("red")
    }else{
    setAddUser("Result="+sum)
    setErr("Success: Your result is shown above!")
    setColors("green")
    }
  }
  return (
    <div className="App">
    <h1>React Calculator</h1>
      <input type="text" id='num1' placeholder='Num 1'/>
      <br/>
      <br/>
      <input type="text" id='num2' placeholder='Num 2'/>
      <br/>
      <br/>
      <div className='Btn-div'>
      <button id='addButtons' onClick={addHandler}>+</button>
      <button id='subButtons' onClick={subHandler}>-</button>
      <button id='multiButtons' onClick={multiHandler}>*</button>
      <button id='divButtons' onClick={divHandler}>/</button>
      </div>
      <br/>
      <br/>
      <h2>{adduser}</h2>
      <p style={{color: colors}}>{err}</p>
    </div>
  );
}

export default App;
