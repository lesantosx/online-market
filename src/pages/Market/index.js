import {
  Container,
  Header,
  Lista,
} from './styles'
import feira from './feira.json'
import Product from 'components/Product'
import NavBar from './NavBar'

import { useContext } from 'react'
import { UserContext } from 'common/context/User'


export default function Market() {
  const { name, wallet } = useContext(UserContext)
  return (
    <Container>
      <NavBar />
      <Header>
        <div>
          <h2> Hello, {name}</h2>
          <h3> wallet: R$ {wallet}</h3>
        </div>
        <p>Encontre os melhores produtos orgânicos!</p>
      </Header>
      <Lista>
        <h2>
          Products:
        </h2>
        {feira.map(produto => (
          <Product
            {...produto}
            key={produto.id}
          />
        ))}
      </Lista>
    </Container>
  )
}