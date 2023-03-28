import React, { useState, useRef } from "react" // UseState nos ajuda a criar um estado no React
// UseRef - serve para criar uma referência no item

import axios from 'axios'
import { Image, Container, InputLabel, Input} from './styles'
import people from '../../assets/Consulting_Isometric 1.svg'
import Arrow from '../../assets/􀰑.svg'
import { useHistory } from "react-router-dom"

import H1 from '../../components/title'
import ContainerItens from '../../components/ContainerItens'
import Button  from "../../components/Button"
function App() {

  const history = useHistory()
  const inputName = useRef() // pq usar o useRef e não o useState? 
  //pq no useState, a cada LETRA digitada eu guardaa essas informações, de forma desnecessária. Não ficava tão performático, com o UseHef agora, eu só pego as info dos inputs quando eu CLICAR no Botão "Cadastrar"
  const inputAge = useRef()

  //setUsers = função que vai nos auxiliar a atualizar a variável
  // setUsers - tira tudo q tem lá e poe a informação nova
  const [users, setUsers] = useState([])
  // por padrão chamamos o nome do array e em seguida o "set" + o nome do Array
  //aí nesses parenteses é o valor incial. e dentro desses parenteses tem os  colchetes q é um array vazio, pq oo users.map espera um ARRAY

  // React Hooks -> Ferramentas Auxiliares - Há Diversas

  async function addNewuser() {
    const {data: newUser} = await axios.post("http://localhost:3002/users", {name:inputName.current.value, age:inputAge.current.value })


    console.log(newUser)

    setUsers([...users, newUser])

    history.push('/users')


  }

 
  // Estado -> Variável, quando eu altero o valor de uma variável, o React não renderiza 
  // minha página, agora quando eu altero um estado, SIM. O estado é IMUTÀVEL, sempre quando 
  // renderiza a página, ele pega o novo valor e substitui no lugar do antigo



  return (
    <Container>
      <Image alt="people-image" src={people} />
      <ContainerItens>
        <H1>Olá!</H1>
        <InputLabel>Nome</InputLabel>
        <Input ref={inputName} placeholder="Nome" />
        <InputLabel>Idade</InputLabel>
        <Input ref={inputAge} placeholder="Idade" />
        <Button onClick={addNewuser}>Cadastrar <img alt="arrow" src={Arrow} /></Button>
       
      </ContainerItens>
    </Container>

  )
}

export default App 



//Spread Operator (...) -> isso é JS, n é react não - para manipular dados no React

//derrama os itens numa outra caixa junto com o novo valor adicionado



// Use Effect (efeito colateral) => React Hook
//A minha aplicação inicia(A página carregou, userEffect é chamado)
// quando o estado no Array de dependências for alterado, posso colocar quantos estados quiser (no ex tá "users")