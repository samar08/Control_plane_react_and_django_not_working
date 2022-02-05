import React from 'react';
import Dashboard from './pages/Dashboard';
import Nodesinfo from './pages/Nodesinfo';
import { BrowserRouter as Router,Route,Routes} from 'react-router-dom';

const App = () => {
  return (
      <Router>
          <Routes>
              <Route exact path="/" element={<Dashboard />}/>
              <Route exact path="/nodesinfo" element={<Nodesinfo/>}/>
          </Routes>
      </Router>
  );
};

export default App;