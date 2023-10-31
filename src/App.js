import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dash from './components/Dash';
import EmailLinkExtractor from "./components/EmailLinkExtractor";

const App = () => {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Dash/> }></Route>
          <Route exact path="/email" element={<EmailLinkExtractor/> }></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;