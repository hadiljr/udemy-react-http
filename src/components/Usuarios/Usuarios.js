import React, { useState,useEffect } from 'react'

import AdicionarUsuario from '../AdicionarUsuario/AdicionarUsuario'
import Usuario from '../Usuario/Usuario'

function Usuarios () {

  const [usuarios,setUsuarios] = useState([]);

  useEffect(() =>{
    fetch('https://reqres.in/api/users')
    .then( resposta => resposta.json())
    .then(dados => {
      console.log(dados.data);
      const usuarios = dados.data.map(usr =>
         ({
        id: usr.id,
        nome: usr.first_name,
        sobrenome: usr.last_name,
        email: usr.email
        })
      );
      setUsuarios(usuarios)
    });
  },[])

  const adicionarUsuario = (usuario) => {
    setUsuarios(usrs => [...usrs,usuario]);
  }

  const removerUsuario = (usuario) => {
    if (window.confirm(`Tem certeza que deseja remover "${usuario.nome} ${usuario.sobrenome}"?`)) {

      fetch(`http://reqres.in/api/users/${usuario.id}`,{
        method:"DELETE"
      })
      .then(res=>{
        if(res.ok){
          setUsuarios(usrs => usrs.filter(x => x.id !== usuario.id));
        }
      })

    }
  }

  
    return (
      <>
        <AdicionarUsuario adicionarUsuario={adicionarUsuario} />

        {usuarios.map(usuario => (
          <Usuario key={usuario.id}
            usuario={usuario}
            removerUsuario={() =>removerUsuario(usuario)}
          />
        ))}
      </>
    )
}

export default Usuarios