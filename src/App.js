import { Switch, Route } from 'react-router-dom';
import Provider from './context/Provider';
import Home from './pages/Home';
import Episode from './pages/Episode';
import About from './pages/About';
import ErrorPage from './pages/ErrorPage';

function App() {
  return (
    <Provider basename="/tarcisio-menezes">
      <Switch>
        <Route exact path="/rickandmortpage" component={ Home } />
        <Route path="/rickandmortpage/episode" component={ Episode } />
        <Route path="/rickandmortpage/about" component={ About } />
        <Route path="/rickandmortpage/*" component={ ErrorPage } />
      </Switch>
    </Provider>
  );
}

export default App;
