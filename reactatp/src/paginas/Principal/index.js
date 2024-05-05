import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import firebase from '../../Firebase';


class Principal extends Component{
    constructor(props){
      super(props);
      this.state = {
        nome: "",
        sobronome: "",
        datanasc: ""

      }
    }

    async componentDidMount(){
        await firebase.auth().onAuthStateChanged(async (usuario)=> {
            if(usuario){
                var uid = usuario.uid;

                await firebase.firestore().collection("usuario").doc(uid).get()
                .then((retorno)=>{
                    this.setState({
                        nome: retorno.data().nome,
                        sobrenome: retorno.data().sobrenome,
                        datanasc: retorno.data().datanasc
                    });
                });
            }
        });
    }

    render(){
      return(
        <div>
          <h1>Tela Principal</h1>
              Nome: { this.state.nome} <br/>
              sobrenome: {this.state.sobrenome} <br/>
              Data de Nascimento: {this.state.datanasc} <br/>
              <Link to="/"><button>Cadastrar usuario</button></Link>
            

            
        </div>
      )
    }
}

export default Principal;