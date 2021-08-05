import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/Home/Home';
import Landing from './components/Landing/Landing';
import Create from './components/Create/Create';
import Profile from './components/Profile/Profile';
import UserRegister from './components/UserRegister/UserRegister';
import PrivateRoute from './PrivateRoute';
import OtherProfile from './components/OtherProfiles/OtherProfiles';
import './App.scss';

function App() {
  return (
    <Router>
      <div className='App'>
        <Switch>
          <PrivateRoute exact path='/' component={Home} />
          <PrivateRoute exact path='/create' component={Create} />
          <PrivateRoute exact path='/profile' component={Profile} />
          <PrivateRoute exact path='/profile/:id' component={OtherProfile} />
          <Route path='/halser' component={Landing} />
          <Route path='/signup' component={UserRegister} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;