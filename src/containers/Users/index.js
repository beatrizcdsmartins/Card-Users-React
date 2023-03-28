import React, { useState, useEffect } from "react" // UseState nos ajuda a criar um estado no React
// UseRef - serve para criar uma referência no item

import axios from 'axios'
import { Image, Container, User } from './styles'
import Avatar from '../../assets/avatars.svg'
import Arrow from '../../assets/􀰑.svg'
import trash from '../../assets/trash.svg'
import { useHistory } from "react-router-dom"

import H1 from './../../components/title'
import ContainerItens from '../../components/ContainerItens'
import Button  from "../../components/Button"

function Users() {

  const history = useHistory()



  //setUsers = função que vai nos auxiliar a atualizar a variável
  // setUsers - tira tudo q tem lá e poe a informação nova
  const [users, setUsers] = useState([])
  // por padrão chamamos o nome do array e em seguida o "set" + o nome do Array
  //aí nesses parenteses é o valor incial. e dentro desses parenteses tem os  colchetes q é um array vazio, pq oo users.map espera um ARRAY

  // React Hooks -> Ferramentas Auxiliares - Há Diversas

 

  useEffect(()=>{ //userEffect não aceita o Async 
    //então precisa criar uma função nova
    async function fetchUsers(){

      const {data: newUsers} = await axios.get("http://localhost:3002/users")

      setUsers(newUsers)


    }
    fetchUsers()


  }, [])

  async function deleteUsers(userId){
    await axios.delete(`http://localhost:3002/users/${userId}`)
    const newUsers = users.filter(user => user.id !== userId )// Só vai deixar  no array os usuários que tiverem um ID diferente daquele que foi chamado para ser apagado
     setUsers(newUsers)
  }



  // Estado -> Variável, quando eu altero o valor de uma variável, o React não renderiza 
  // minha página, agora quando eu altero um estado, SIM. O estado é IMUTÀVEL, sempre quando 
  // renderiza a página, ele pega o novo valor e substitui no lugar do antigo

  function goBackPage(){
    history.push('/') // usar push ou goBack, dá na mesma nessa situação
  }



  return (
    <Container >
      <Image alt="people-image" src={Avatar} />
      <ContainerItens>
        <H1>Usuários</H1>
        <ul>
          {users.map((user) => (
            <User key={user.id}>
              <p>{user.name}</p> <p>{user.age}</p>
              <button onClick={()=>deleteUsers(user.id)}><img src={trash} alt="Lata-de-lixo" /></button>
            </User>
          ))}
        </ul>

        <Button backButton={true} onClick={goBackPage}>
          <img alt="arrow" src={Arrow} /> Voltar</Button>
      </ContainerItens>
    </Container>

  )
}

export default Users



//Spread Operator (...) -> isso é JS, n é react não - para manipular dados no React

//derrama os itens numa outra caixa junto com o novo valor adicionado



// Use Effect (efeito colateral) => React Hook
//A minha aplicação inicia(A página carregou, userEffect é chamado)
// quando o estado no Array de dependências for alterado, posso colocar quantos estados quiser (no ex tá "users")