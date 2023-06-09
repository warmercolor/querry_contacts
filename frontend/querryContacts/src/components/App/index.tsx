import GlobalStyles from '../../styles/global'
import { Container } from './style'
import { RoutesUrl } from '../../Routes';
import { Authorization } from '../../context/AuthContext';

function App() {
  return(
  <Authorization>
    <Container>
      <GlobalStyles />
      <RoutesUrl/>
    </Container>
  </Authorization>
  )
}

export default App
