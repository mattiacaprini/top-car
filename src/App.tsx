import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./containers/login";
import GamePage from "./containers/gamePage";
class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<GamePage />} />
        </Routes>
      </BrowserRouter>
    );
  }
}

export default App;
