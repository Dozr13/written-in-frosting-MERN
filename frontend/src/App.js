import React from "react";
import Nav from "./Components/Header/Nav/NavBar";
import Footer from "./Components/Footer/Footer";
import routes from "./routes";

import "./Reset.css";
import "./App.css";

function App() {
  return (
    <div className='App'>
      <main className='main'>
        <Nav />
        {routes}
        <Footer />
      </main>
    </div>
  );
}

export default App;
