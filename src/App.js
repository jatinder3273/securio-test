
import React from 'react';
import "../src/assets/css/style.scss";
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import AppRoutes from './components/AppRoutes';
// import DashbordLayout from "./components/layouts/DashbordLayout";
import MainLayout from "./components/layouts/MainLayout";
import Home from './pages/Home/Home';
// import About from './pages/About';
function App() {
  return (
    <>
      <Router>
        <Switch>
          <AppRoutes exact path="/" Layout={MainLayout} Component={Home} />
          {/* <AppRoutes exact path="/" Layout={DashbordLayout} Component={About} /> */}
        </Switch>
      </Router>
    </>
  );
}

export default App;
