import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import Header from "home/Header";
import Footer from "home/Footer";
import Home from "home";

const App = () => (
  <div className="container">
    <Header />
    <div>Name: micro-frontends</div>
    <div>Framework: react</div>
    <div>Language: JavaScript</div>
    <div>CSS: Empty CSS</div>
    <Home />
    <Footer />
  </div>
);
const rootElement = document.getElementById("app")
if (!rootElement) throw new Error("Failed to find the root element")

const root = ReactDOM.createRoot(rootElement)

root.render(<App />)