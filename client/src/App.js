import React from 'react';
import './App.css';
import Container from "reactstrap/es/Container";
import {FormShortenLink} from "./component/FormShortenLink";

function App() {
  return (
    <div className="App">
        <Container>
           <FormShortenLink/>
        </Container>
    </div>
  );
}

export default App;
