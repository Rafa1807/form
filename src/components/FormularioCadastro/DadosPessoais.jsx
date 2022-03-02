import React, {useState} from "react";
import { TextField, Button, Switch, FormControlLabel} from "@material-ui/core";



function DadosPessoais({aoEnviar, validacoes}) {
    const [nome, setNome] = useState("");
    const [sobrenome, setSobrenome] = useState("");
    const [cpf, setCpf] = useState("");
    const [promocoes, setPromocoes] = useState(true);
    const [novidades, setNovidades] = useState(false);
    const [erros, setErros] = useState({cpf:{valido: true, text: ""}})

    function validarCampos(event){
            const {name, value} = event.target;
            const novoEstado = {...erros};
            novoEstado[name] = validacoes[name](value);
                setErros(novoEstado);
            }

    function possoEnviar(){
           for(let campo in erros){
           if(!erros[campo].valido){
           return false
            }
          }
            return true
      }

    return (
        <form 
            onSubmit={(event) => {
            event.preventDefault();
            aoEnviar({nome, sobrenome, cpf, novidades, promocoes});
            if(possoEnviar()){
                aoEnviar({cpf});

            }
            }}
            >
            <TextField
                value={nome}
                onChange={(event) => {
                    setNome(event.target.value);
            }}
            id="nome" 
            label="Nome" 
            variant="outlined" 
            margin="normal" 
            fullWidth 
            />
            <TextField 
            value={sobrenome}
            onChange={(event) => {
                setSobrenome(event.target.value);
               
        }}
            id="sobrenome" 
            label="Sobrenome" 
            variant="outlined" 
            margin="normal" 
            fullWidth 
            />
            <TextField 
            value={cpf}
            onChange={(event) => {
                setCpf(event.target.value);
                
            }}
            onBlur={validarCampos}
            error={!erros.cpf.valido}
            helperText={erros.cpf.text}
            id="cpf"
            name="cpf" 
            type="text" 
            label="CPF" 
            variant="outlined" 
            margin="normal" 
            fullWidth 
            />

            <FormControlLabel 
            label="Promoções" 
            control={<Switch
            onChange={(event) => {
                setPromocoes(event.target.checked)
            }}
            name="Promoções" 
            defaultChecked={promocoes} 
            color="primary" 
            />} 
            />  
            <FormControlLabel 
            label="Novidades" 
            control={<Switch 
            onChange={(event) => {
                setNovidades(event.target.checked)
            }}
            name="Novidades" 
            defaultChecked={novidades} 
            color="primary" 
            />} 
            />

            <Button 
            type="submit" 
            variant="contained" 
            color="primary">Cadastrar
            </Button>

        </form>
    );
}

export default DadosPessoais;
