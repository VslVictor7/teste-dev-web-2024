import React, { useState } from "react";
import "./App.css";

function App() {

    const [nome, setnome] = React.useState('');
    const [cpf, setcpf] = React.useState('');
    const [email, setemail] = React.useState('');
    const [telefone, settelefone] = React.useState('');
    const [sexo, setsexo] = React.useState('');
    const [nascimento, setnascimento] = React.useState('');

    const onSubmit = (e) => {

        e.preventDefault();

        if (!nome || !cpf || !email || !telefone || !sexo || !nascimento) {
            console.debug('Todos os campos do formulário são obrigatórios.');
            return;
        }

        console.debug(JSON.stringify({

            nome,
            cpf,
            email,
            telefone,
            sexo,
            nascimento

        }));

    }
    
    return ( 
        <form onSubmit={onSubmit}>

          <fieldset>

            <label>

                Nome:
                <input type="text" name="nome" value={nome} onChange={(e) => setnome(e.target.value)}/>

            </label>

            <label>

                CPF:
                <input type="text" name="cpf" value={cpf} onChange={(e) => setcpf(e.target.value)}/>

            </label>

            <label>

                Email:
                <input type="email" name="email" value={email} onChange={(e) => setemail(e.target.value)}/>

            </label>

            <label>
                
                Telefone:
                <input type="tel" name="telefone" value={telefone} onChange={(e) => settelefone(e.target.value)}/>

            </label>

            <label>

                Sexo:

                <select value={sexo} onChange={(e) => setsexo(e.target.value)}>

                  <option value="">Selecione</option>
                  <option value="Masculino">Masculino</option>
                  <option value="Feminino">Feminino</option>
                  <option value="Outro">Outro</option>

                </select>

            </label>

            <label>

                Nascimento:
                <input type="date" name="nascimento" value={nascimento} onChange={(e) => setnascimento(e.target.value)}/>

            </label>

            <button type="submit">Enviar</button>

          </fieldset>

        </form>
    );
}

export default App;

