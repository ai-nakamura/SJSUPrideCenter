import './App.css';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import Splash from './Splash';
import Home from './Home';
import NavBar from './NavBar';

// every page needs to have a nav link up top?
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <NavBar/>
        <Switch>
          <Route path='/' exact component={Splash}/>
          <Route path='/home' component={Home}/>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
