import React from "react";
import NavigationBar from "./components/NavigationBar";
import Footer from "./components/Footer";
import Beranda from "./components/Beranda";

function App() {
  return (
    <div className="App">
      <NavigationBar />
      <Beranda />
      <Footer />
    </div>
  );
}

export default App;
