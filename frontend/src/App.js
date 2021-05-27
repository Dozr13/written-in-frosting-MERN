import React from "react";
import Nav from "./Components/Header/Nav/NavBar";
import Footer from "./Components/Footer/Footer";
import routes from "./routes";

import "./App.css";

function App() {
  return (
    <main className='main'>
      <Nav />
      {routes}
      <Footer />
    </main>
  );
}

export default App;
