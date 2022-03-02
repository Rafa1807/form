import { Button, TextField } from "@material-ui/core";
import React, { useState } from "react";

function DadosUsuario({aoEnviar, validacoes}) {
const [email, setEmail] = useState("")
const [password, setPassword] = useState("")

const [erros, setErros] = useState({password:{valido: true, text: ""}})

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

    return(
        <form 
            onSubmit={(event)=>{
            event.preventDefault();
            if(possoEnviar()){
                aoEnviar({email, password});

            }
        }}>
            <TextField
        value={email}
        onChange={(event) =>{ setEmail(event.target.value)}} 
            id="email"
            label="email" 
            type="email"
            required 
            variant="outlined" 
            margin="normal" 
            fullWidth 
            />
            <TextField 
         value={password}
         onChange={(event) =>{ setPassword(event.target.value)}} 
            onBlur={validarCampos}
            error={!erros.password.valido}
            helperText={erros.password.text}
            id="password" 
            name="password"
            label="password" 
            type="password" 
            required
            variant="outlined" 
            margin="normal" 
            fullWidth 
            />
            <Button type="submit" 
            variant="contained" 
            color="primary">Próximo</Button>
        </form>
    )

}

export default DadosUsuario;