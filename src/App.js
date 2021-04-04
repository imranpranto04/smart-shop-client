import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import AddProduct from './components/AddProduct/AddProduct';
import Home from './components/Home/Home';


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
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/addProduct">Admin</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/about">

          </Route>

          <Route path="/addProduct">
            <AddProduct />
          </Route>

          <Route path="/">
            <Home></Home>
          </Route>
          
        </Switch>
      </div>
    </Router>
  );
}

export default App;
