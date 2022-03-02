import React from 'react';
import { Component } from 'react/cjs/react.production.min';
import './App.css';
import FormularioCadastro from './components/FormularioCadastro/FormularioCadastro';
import { Container, Typography } from "@material-ui/core";
import '@fontsource/roboto/300.css';
import {validaCpf, validaSenha } from './models/cadastro';

class App extends Component {
  render (){
  return (
    <Container component="article" maxWidth="xs">
   <Typography variant="h2" component="h2" align="center">Formulário de Cadastro</Typography>
   <FormularioCadastro aoEnviar={onSubmitForm} validacoes={{cpf:validaCpf, password:validaSenha}}/>
   </Container>
  );
}
}

function onSubmitForm(dados){
  console.log(dados)
}

export default App;
