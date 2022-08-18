import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import './App.css';
import Home from './Components/Home';
import Shop from './Components/Shop';
import Login from './Components/Login';
import Forget from './Components/Forget';
import Deposite from './Components/dashboard/Deposite';
import Transaction from './Components/dashboard/Transaction';
import Profile from './Components/dashboard/Profile';
import Dashboard from './Components/dashboard/Dashboard';
import Register from './Components/Register'
import { useSelector } from 'react-redux';
import { selectUser } from './features/userSlice';
import Terms from './Components/Terms';
import Withdraw from './Components/dashboard/Withdraw';
import { useEffect } from 'react';

function App() {

  // useEffect(() => {
  //   setInterval(() => {
  //     console.clear();
  //   }, 1000);
  // }, [])

  const userState = useSelector(selectUser)

  return (
    <>
      <Router>
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route exact path='/shop'>
            <Shop />
          </Route>
          <Route exact path='/term-of-service'>
            <Terms />
          </Route>
          <Route exact path='/login'>
            {
              userState == null ?
                <Login />
                :
                <Redirect to='/' />
            }
          </Route>
          <Route exact path='/forget'>
            <Forget />
          </Route>
          <Route exact path='/register'>
            <Register />
          </Route>
          <Route exact path='/deposit'>
            {
              userState == null ?
                <Redirect to='/' />
                :
                <Deposite />
            }
          </Route>
          <Route exact path='/transaction'>
            {
              userState == null ?
                <Redirect to='/' />
                :
                <Transaction />
            }
          </Route>
          <Route exact path='/profile'>
            {
              userState == null ?
                <Redirect to='/' />
                :
                <Profile />
            }
          </Route>
          <Route exact path='/dashboard'>
            {
              userState == null ?
                <Redirect to='/' />
                :
                <Dashboard />
            }
          </Route>
          <Route exact path='/withdraw'>
            {
              userState == null ?
                <Redirect to='/' />
                :
                <Withdraw />
            }
          </Route>
        </Switch>
      </Router>

    </>
  );
}

export default App;
