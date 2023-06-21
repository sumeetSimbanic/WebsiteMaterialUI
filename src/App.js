import React from "react";
import Header from "./Header/Header";
import Content from "./content/Content";
import Footer from "./Footer/Footer";

const App = () => {
  return (
    <div>
      <header>
        <Header />
      </header>
      <section>
        <Content />
      </section>
      <Footer />
    </div>
  );
};

export default App;
