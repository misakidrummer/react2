import React, { Component } from 'react';
import { Link } from "react-router-dom";
import "../../estilos.css";
import firebase from '../../Firebase';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      senha: "",
      errorMessage: "" 
    };
    this.acessar = this.acessar.bind(this);
  }

  async acessar() {
    const { email, senha } = this.state;
    
    try {
      await firebase.auth().signInWithEmailAndPassword(email, senha);
      window.location.href = "./principal";
    } catch (error) {
      
      this.setState({ errorMessage: "Usuário não cadastrado." });
    }
  }

  render() {
    return (
      <div>
        <h1>Login</h1>
        <input type="text" placeholder='Email' onChange={(e) => this.setState({ email: e.target.value })} /> <br />
        <input type="password" placeholder='Senha' onChange={(e) => this.setState({ senha: e.target.value })} /> <br />
        <button onClick={this.acessar}>Acessar aqui</button>
        {this.state.errorMessage && <p>{this.state.errorMessage}</p>} 
      </div>
    );
  }
}

export default Login;