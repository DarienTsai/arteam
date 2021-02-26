/* global data */
import Auth from './components/Auth';
import Home from './components/Home';
import Add from './components/Add';
import {BrowserRouter, Switch, Route} from "react-router-dom"

function App() {
  console.clear();
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/" exact>
            <Auth/>
          </Route>
          <Route path="/home" exact>
            <Home/>
          </Route>
          <Route path="/add" exact>
            <Add/>
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
