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
import About from './Components/About';
import Invest from './Components/Invest';
import Verify from './Components/Verify';
import Review from './Components/dashboard/Review';

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
          <Route exact path='/about'>
            <About />
          </Route>
          <Route exact path='/invest'>
            <Invest />
          </Route>
          <Route exact path='/login'>
            {
              userState?.loginStatus == 2 ?
                <Redirect to='/' />
                :
                <Login />
            }
          </Route>
          <Route exact path='/verify'>
            {
              userState?.loginStatus == 1 ?
                <Verify />
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
              userState?.loginStatus == 2 ?
                <Deposite />
                :
                <Redirect to='/login' />
            }
          </Route>
          <Route exact path='/transaction'>
            {
              userState?.loginStatus == 2 ?
                <Transaction />
                :
                <Redirect to='/' />
            }
          </Route>
          <Route exact path='/profile'>
            {
              userState?.loginStatus == 2 ?
                <Profile />
                :
                <Redirect to='/' />
            }
          </Route>
          <Route exact path='/dashboard'>
            {
              userState?.loginStatus == 2 ?
                <Dashboard />
                :
                <Redirect to='/' />
            }
          </Route>
          <Route exact path='/withdraw'>
            {
              userState?.loginStatus == 2 ?
                <Withdraw />
                :
                <Redirect to='/' />
            }
          </Route>
          <Route exact path='/review'>
            {
              userState?.loginStatus == 2 ?
                <Review />
                :
                <Redirect to='/' />
            }
          </Route>
        </Switch>
      </Router>

    </>
  );
}

export default App;
