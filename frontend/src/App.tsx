import React, { useContext } from 'react';
import {
  BrowserRouter,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { Home, Login, Register, Password } from './components/pages';
import { LoginProvider } from './components/pages/Login/index.context';
import { Store } from './context/global';

function App() {

  return (
    <BrowserRouter>
      <Switch>
        <Route path="/login">
          <LoginProvider>
            <Login />
          </LoginProvider>
        </Route>
        <Route path="/register">
          <Register />
        </Route>
        <Route path="/password">
          <Password />
        </Route>
        <PrivateRoute>
          <Route exact path="/">
            <Home />
          </Route>
        </PrivateRoute>
      </Switch>
    </BrowserRouter>
  );
}

function PrivateRoute({ children, ...rest }: JSX.ElementChildrenAttribute) {
  const { state } = useContext(Store);
  console.log(state)
  return (
    <Route
      {...rest}
      render={({ location }) =>
        state.isAuthenticated ? (
          children
        ) : (
            <Redirect
              to={{
                pathname: "/login",
                state: { from: location }
              }}
            />
          )
      }
    />
  );
}

export default App;
