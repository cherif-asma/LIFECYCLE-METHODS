
import React,{Component}from 'react'; 
import logo from './logo.svg';
import './App.css';
export default class extends Component {      
  componentDidMount(){  
  // setTimeout(function(){ alert("Hello"); }, 2000); 
  setTimeout(()=>{
    alert("Hello");
  },2000)
     }
render(){
  return (
    <div >
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>)

}
}

