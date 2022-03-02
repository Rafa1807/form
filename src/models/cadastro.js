function validaCpf(cpf) {
    if(cpf.length !== 11){
      return {valido: false, text:"CPF deve ter 11 dígitos"}
    }else {
      return {valido: true, text:""}
    }
  }
  function validaSenha(password) {
    if(password.length < 4 || password.length > 72){
      return {valido: false, text:"Senha deve ter 4 e 72 dígitos."}
    }else {
      return {valido: true, text:""}
    }
  }

  export {validaCpf, validaSenha}; 