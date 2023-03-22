import { Button } from '@material-ui/core'
import {
  Container,
  Titulo,
  InputContainer
} from './styles'
import {
  Input,
  InputLabel,
  InputAdornment 
} from '@material-ui/core'
import { useHistory } from 'react-router-dom'
import { useContext } from 'react'
import { UserContext } from 'common/context/User'


export default function Login() {
  const history = useHistory()
  const { name, setName, sale, setSale } = useContext(UserContext)

  return (
    <Container>
      <Titulo>Insira o seu nome</Titulo>
        <InputContainer>
          <InputLabel>Name</InputLabel>
          <Input        
            type="text"
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
        </InputContainer>
        <InputContainer>
          <InputLabel>Saldo</InputLabel>
          <Input
            type="number"
            value={sale}
            onChange={(event) => setSale(event.target.value)}
            startAdornment={
              <InputAdornment position="start">
                R$
              </InputAdornment>
            }
          />
        </InputContainer>
        <Button
          variant="contained"
          color="primary"
          onClick={() => history.push('/market')}
        >
          Next
        </Button> 
    </Container>
  )
};