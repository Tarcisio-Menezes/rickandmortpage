import { Switch, Route } from 'react-router-dom';
import Provider from './context/Provider';
import Home from './pages/Home';
import Episode from './pages/Episode';
import About from './pages/About';
import ErrorPage from './pages/ErrorPage';

function App() {
  return (
    <Provider>
      <Switch>
        <Route exact path="/" component={ Home } />
        <Route path="/episode" component={ Episode } />
        <Route path="/about" component={ About } />
        <Route path="*" component={ ErrorPage } />
      </Switch>
    </Provider>
  );
}

export default App;
