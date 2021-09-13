import './App.css';

import { HashRouter as Router, Link } from "react-router-dom";
import RouteConfig from './route';

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/news">News</Link>
            </li>
            <li>
              <Link to="/me">Me</Link>
            </li>
          </ul>
        </nav>
      </div>
      <RouteConfig />
    </Router>
  );
}

export default App;
