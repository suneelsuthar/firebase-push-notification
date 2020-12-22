import logo from './logo.svg';
import React from 'react'
import './App.css';
import firebase from './firebase'

  export default class App extends React.Component{
    constructor(){
      super()
      this.state={

      }
    }
    componentDidMount(){
      const messaging =firebase.messaging()
      messaging.requestPermission().then(()=>{
        return messaging.getToken()
      }).then(token=>{
        console.log("Token",token)
      }).catch(err=>{
        console.log("error",err)
      })
    }
    render(){
  return (
    <div className="App">
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
    </div>
  );
}
  }


