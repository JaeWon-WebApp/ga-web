import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Landing from './Components/Landing/Landing';
import Dashboard from './Components/Admin/Dashboard';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route exact path="/admin" component={Dashboard} />
      </Switch>
    </BrowserRouter>
  );
}

export default App