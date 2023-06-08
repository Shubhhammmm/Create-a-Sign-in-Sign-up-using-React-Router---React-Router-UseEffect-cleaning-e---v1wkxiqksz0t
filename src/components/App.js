import React, { useState } from 'react';
import '../styles/App.css';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import Login from './Login';
import Register from './Register';
import Dashboard from './Dashboard';

const App = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [navigate, setNavigate] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    if (email === email && password === password) {
      setLoggedIn(true);
      setNavigate(true);
    }
  };

  return (
    <div id="App">
      <Router>
        <Switch>
          <Route path="/" exact>
            {loggedIn ? (
              <Redirect to="/dashboard" />
            ) : (
              <Login
                email={email}
                password={password}
                setLoggedIn={setLoggedIn}
                setNavigate={setNavigate}
                setEmail={setEmail}
                setPassword={setPassword}
                handleLogin={handleLogin}
              />
            )}
          </Route>

          <Route path="/Register" exact>
            {navigate ? (
              <Redirect to="/" />
            ) : (
              <Register
                emailChange={setEmail}
                passwordChange={setPassword}
                setNavigate={setNavigate}
              />
            )}
          </Route>

          <Route path="/dashboard" exact>
            {loggedIn ? (
              <Dashboard setLoggedIn={setLoggedIn} />
            ) : (
              <Redirect to="/" />
            )}
          </Route>
        </Switch>
      </Router>
    </div>
  );
};

export default App;