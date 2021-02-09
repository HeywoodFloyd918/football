import './App.css';
import FootbalState from './context/FootbalState';
import { FootbalContext } from './context/FootballContext';
import { useContext } from 'react';
import Container from './components/Container/Container';
function App() {
  const footbal = useContext(FootbalContext);

  return (
    <div className="App">
      <FootbalState>
        <Container></Container>
      </FootbalState>
    </div>
  );
}

export default App;
