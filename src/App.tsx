import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/Home/Home';
import Landing from './components/Landing/Landing';
import SignUp from './components/Signup/Signup';
import PrivateRoute from './PrivateRoute';
import './App.scss';

function App() {
  return (
    <Router>
      <div className='App'>
        <Switch>
          <PrivateRoute exact path='/' component={Home} />
          <Route exact path='/halser' component={Landing} />
          <Route path='/signup' component={SignUp} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;