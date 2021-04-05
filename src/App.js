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
import Login from './components/Login/Login';
import Checkout from './components/Checkout/Checkout';
import Header from './components/Header/Header';
import { createContext, useState } from 'react';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import Order from './components/Order/Order';

export const UserContext = createContext();

function App() {

  const [loggedInUser, setLoggedInUser] = useState({});

  return (

    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>

    <Router>
      <div>
        {/* <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/order">Order</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/addProduct">Admin</Link>
            </li>
          </ul>
        </nav> */}

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
          <Header></Header>
          <h4 className="text-center">User: {loggedInUser.name}</h4>
        <Switch>

        <Route path="/home">
            <Home></Home>
          </Route>

          <PrivateRoute path="/order">
            <Order></Order>
          </PrivateRoute>

          <PrivateRoute path="/addProduct">
            <AddProduct />
          </PrivateRoute>

          <Route path="/login">
            <Login></Login>
          </Route>

          <PrivateRoute path="/checkout/:_id">
            <Checkout/>
          </PrivateRoute>

          <Route exact path="/">
            <Home></Home>
          </Route>

          <Route  path="*">
            <h2 className="text-center text-danger">404 Not Found!</h2>
          </Route>
          
        </Switch>
      </div>
    </Router>

    </UserContext.Provider>
  );
}

export default App;
