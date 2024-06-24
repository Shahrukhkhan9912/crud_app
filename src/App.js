import React from "react";
import "./App.css";
import Read from "./CRUD/Read";
import Create from "./CRUD/Create";
import Update from "./CRUD/Update";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import { Button } from "react-bootstrap";

function App() {
  return (
    <div className="App">
      <Router>
      <div className="App_box">
        <h1 style={{ textAlign: "center" }}>React CRUD App</h1>
        <Link to="/">
          <Button> Back To Home Page </Button>
        </Link>
        <Link to="/create">
          <Button variant="success"> Create Form </Button>
        </Link>
      </div>
        <Routes>
          <Route exact path="/" Component={Read} />
        </Routes>
        <Routes>
          <Route exact path="/create" Component={Create} />
        </Routes>
        <Routes>
          <Route exact path="/cpdate" Component={Update} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
