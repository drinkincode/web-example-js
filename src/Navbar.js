import React from 'react';
import {  Link } from "react-router-dom";
import Dup from './pages/Dup';
const Navbar= () =>{
  return (
    <Router>
      <navbar />
      <Switch>
        <Route path='/Page' exact component={Page} />
      </Switch>
    </Router>
  );
}
export default Navbar;