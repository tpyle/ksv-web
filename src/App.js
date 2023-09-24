import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';

// import './App.css';
import Header from './components/Header';
import DataController from './components/DataController';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  return (
    <>
      <Header isAuthenticated={isAuthenticated} />
      <Container className="flex-fill">
        <DataController setAuthenticated={setIsAuthenticated} />
      </Container>
    </>
  );
}

export default App;
