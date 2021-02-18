import Auth from './components/Auth';
import Home from './components/Home';
import {BrowserRouter, Switch, Route} from "react-router-dom"

function App() {
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
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
