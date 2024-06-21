import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SearchBar from './components/SearchBar';
import ListaMedicamento from './components/ListaMedicamento';
import { Container } from '@mui/material';
import DrugDetail from './components/DrugDetail';

const App = () => {
  const [drugs, setDrugs] = useState([]);

  return (
    <Router>
      <Container>
      <SearchBar onSearch={setDrugs} />
        <Routes>
          <Route path="/" element={<ListaMedicamento drugs={drugs} />} />
          <Route path="/drug/:id" element={<DrugDetail drugs={drugs} />} />
        </Routes>
      </Container>
    </Router>
  );
};

export default App;
