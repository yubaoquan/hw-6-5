import './App.css';

import { HashRouter as Router } from "react-router-dom";
import RouteConfig from './route';

function App() {
  return (
    <Router>
      <RouteConfig />
    </Router>
  );
}

export default App;
