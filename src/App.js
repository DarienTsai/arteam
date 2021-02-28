/* global data */
import Auth from './components/Auth';
import Home from './components/Home';
import Add from './components/Add';
import Edit from './components/Edit';
import ProfileEdit from './components/ProfileEdit';
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
          <Route path="/edit" exact>
            <Edit/>
          </Route>
          <Route path="/editProfile" exact>
            <ProfileEdit/>
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
