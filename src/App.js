import { BrowserRouter, Switch, Route } from 'react-router-dom/cjs/react-router-dom';
import SignIn from './views/Auth/SignIn';

import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/" exact>
            <SignIn />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
