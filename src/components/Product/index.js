import { Container } from './styles'
import { memo } from 'react'
import { IconButton } from '@material-ui/core'
import AddIcon from '@material-ui/icons/Add'
import RemoveIcon from '@material-ui/icons/Remove'

import { useShoppingContext } from 'common/context/Shopping'

function Product({ nome, foto, id, valor, unidade }) {
  const { wallet, addProduct } = useShoppingContext()  

  const productIn = wallet.find(item => item.id === id)

  return (
      <Container>
        <div>
          <img
            src={`/assets/${foto}.png`}
            alt={`foto de ${nome}`}
          />
          <p>
            {nome} - R$ {valor?.toFixed(2)} <span>Kg</span>
          </p>
        </div>
        <div>
          <IconButton color="secondary" >
            <RemoveIcon />
          </IconButton>

          {productIn?.qty || 0}

          <IconButton onClick={() => addProduct({nome, foto, id, valor})}>
            <AddIcon />
          </IconButton>
        </div>
      </Container>
  )
}

export default memo(Product)