import { TextField, Button } from "@material-ui/core";
import React, { useState } from "react";

function DadosEntrega({aoEnviar}) {
    const [cep, setCep] = useState("");
    const [adress, setAdress] = useState("");
    const [number, setNumber] = useState("");
    const [estate, setEstate] = useState("");
    const [city, setCity] = useState("");
    return(
        <form
        onSubmit={(event) => {
            event.preventDefault();
            aoEnviar({cep, adress, number, estate, city});
            }}
            >
            <TextField
            value={cep}
            onChange={(event) =>{
                setCep(event.target.value)
            }}
            id="cep" 
            type="number" 
            label="CEP" 
            variant="outlined" 
            margin="normal" 
            autoCapitalize="off"
            autoComplete="off"
            /> 
             <TextField
             value={adress}
             onChange={(event) =>{
                 setAdress(event.target.value)
             }}
            id="adress" 
            type="text" 
            label="Endereço" 
            variant="outlined" 
            margin="normal" 
            fullWidth
            autoCapitalize="off"
            autoComplete="off"
            /> 
             <TextField
             value={number}
             onChange={(event) =>{
                 setNumber(event.target.value)
             }}
            id="number" 
            type="number" 
            label="Numero" 
            variant="outlined" 
            margin="normal" 
            autoCapitalize="off"
            autoComplete="off"
            /> 
             <TextField
             value={estate}
             onChange={(event) =>{
                 setEstate(event.target.value)
             }}
            id="estate" 
            type="text" 
            label="Estado" 
            variant="outlined" 
            margin="normal" 
            autoCapitalize="off"
            autoComplete="off"
            /> 
             <TextField
             value={city}
             onChange={(event) =>{
                 setCity(event.target.value)
             }}
            id="city" 
            type="text" 
            label="Cidade" 
            variant="outlined" 
            margin="normal" 
            autoCapitalize="off"
            autoComplete="off"
            /> 
            <Button 
            type="submit" 
            variant="contained" 
            color="primary"
            fullWidth
            >Finalizar Cadastro
            </Button>

        </form>
    );
}

export default DadosEntrega;