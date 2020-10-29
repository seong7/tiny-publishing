import React from 'react';
import { BrowserRouter, Route, NavLink } from 'react-router-dom';
import Page1 from './pages/Page1';
import Page2 from './pages/Page2';

import './common.scss';
import './reset.scss';
import './App.scss';

export default function App() {
  return (
    <BrowserRouter>
      <>
        <Route
          path="/"
          render={() => (
            <div className="app-wrapper">
              <h1>페이지 버튼을 클릭하세요.</h1>
              <div className="app-button-wrapper">
                <NavLink to="/1">
                  <button>Page 1</button>
                </NavLink>
                <NavLink to="/2">
                  <button>Page 2</button>
                </NavLink>
              </div>
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
