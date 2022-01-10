import { BrowserRouter, Switch, Route } from 'react-router-dom/cjs/react-router-dom';
import SignIn from './views/Auth/SignIn';
import { useState } from 'react';
import { getUser } from './services/users';

import './App.css';

function App() {
  const [currentUser] = useState(getUser());
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/signin" exact>
            <SignIn />
          </Route>
          <Route path="/">
            {currentUser && <h1>I am signed in!</h1>}
            {!currentUser && <h1>I am not signed in!</h1>}
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
