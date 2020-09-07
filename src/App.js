import React from "react";
import { BrowserRouter, Route, NavLink } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <>
        <Route
          path="/"
          render={() => (
            <div>
              <NavLink to="/a">'/a'</NavLink> 또는{" "}
              <NavLink to="/b">'/b'</NavLink> 로 이동
            </div>
          )}
          exact
        />
        <Route path="/a" render={() => <div>hello world1</div>} exact />
        <Route path="/b" render={() => <div>hello world2</div>} exact />
      </>
    </BrowserRouter>
  );
};

export default App;
