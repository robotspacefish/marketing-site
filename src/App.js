import HomePage from './pages/HomePage/HomePage.component';
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import FeaturePage from './pages/FeaturePage/FeaturePage.component';
import PRODUCT_DATA from './product.data';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      productInfo: []
    };
  }

  componentDidMount() {
    this.setState({ productInfo: PRODUCT_DATA });
  }

  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route exact path={`/features/:feature`} component={FeaturePage} />
        </Switch>
      </div>
    );
  }
}

export default App;
