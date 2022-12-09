import './App.css';
import React,{useState} from 'react'
function App() {
  const [height,setHeight]=useState('');
  const [weight,setWeight]=useState('');
  const [bmi,setBmi]=useState(' ');
  const [message,setMessage]=useState('there is no message');
  const calculate =()=>{
    let value=([weight/(height*height)]*10000).toFixed(2);
    if(height ===' ' || weight===''){
      alert('enter the value');
    }
    else{
      setBmi(value)
    }
    if(value <=30 || value >30){
      if(value===30 ||value>30){
        setMessage('obessed');
      }
      else if(value>=25&&value<30  ){
            setMessage('overweighted');
      }
      else if(value<25 && value>=18.5){
        setMessage('Normal');
      }
       else{
        setMessage('underweighted');
       }
    }
    }
  return (
    <div className="App">
      <h1>BMI CALCULATOR</h1>
      <div className='outer'>
      <input className='input' value={weight} placeholder='enter the Weight in kg' onChange={e=>setWeight(e.target.value)}/>
      <input className='input' value={height} placeholder='enter the Height in cm' onChange={e=>setHeight(e.target.value)}/>
<button className='button' onClick={calculate}>claculate</button>
<h2>your BMI is {bmi}</h2>
<h2>you are {message}</h2>
    </div>
    </div>
  );

  }

export default App;
