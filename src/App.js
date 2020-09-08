import React from 'react';
import { BrowserRouter, Route, NavLink } from 'react-router-dom';
import Page1 from './pages/Page1';
import Page2 from './pages/Page2';

// import './common.scss';
import './reset.scss';

export default function App() {
  return (
    <BrowserRouter>
      <>
        <Route
          path="/"
          render={() => (
            <div>
              <br />
              <NavLink to="/1">&#39;/1&#39;</NavLink>
              <br />
              <br />
              <NavLink to="/2">&#39;/2&#39;</NavLink>
            </div>
          )}
          exact
        />
        <Route path="/1" render={Page1} exact />
        <Route path="/2" render={Page2} exact />
      </>
    </BrowserRouter>
  );
}
