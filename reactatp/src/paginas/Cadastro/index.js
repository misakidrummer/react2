import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import firebase from "firebase";
import "../../estilos.css";

class Cadastro extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      senha: "",
      nome: "",
      sobrenome: "",
      datanasc: "",
      mensagem: "" 
    }

    this.gravar = this.gravar.bind(this);
  }

  async gravar() {
    try {
      const retorno = await firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.senha);

      
      await firebase.firestore().collection("usuario").doc(retorno.user.uid).set({
        nome: this.state.nome,
        sobrenome: this.state.sobrenome,
        datanasc: this.state.datanasc
      });

      
      this.setState({ mensagem: "Usuário cadastrado com sucesso!" });
    } catch (error) {
      
      this.setState({ mensagem: "Erro ao cadastrar usuário. Verifique seus dados e tente novamente." });
    }
  }

  render() {
    return (
      <div>
        <h1>Cadastro</h1>
        <input type="text" placeholder='Email' onChange={(e) => this.setState({ email: e.target.value })} /> <br />
        <input type="password" placeholder='Senha' onChange={(e) => this.setState({ senha: e.target.value })} /> <br />
        <input type="text" placeholder="Nome" onChange={(e) => this.setState({ nome: e.target.value })} /> <br />
        <input type="text" placeholder="Sobrenome" onChange={(e) => this.setState({ sobrenome: e.target.value })} /> <br />
        <input type="date" placeholder="Data de Nascimento" onChange={(e) => this.setState({ datanasc: e.target.value })} /> <br />
        <button onClick={this.gravar}>Gravar dados</button>
        <Link to="/login"><button>Login</button></Link>

        {this.state.mensagem && <p>{this.state.mensagem}</p>}
      </div>
    );
  }
}

export default Cadastro;
