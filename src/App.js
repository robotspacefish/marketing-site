import HomePage from './pages/HomePage/HomePage.component';
import { Route, Switch } from 'react-router-dom';

import './App.css';
import FeaturePage from './pages/FeaturePage/FeaturePage.component';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path="/features" component={FeaturePage} />
      </Switch>
    </div>
  );
}

export default App;
