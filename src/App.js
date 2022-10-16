import { Fragment } from "react";
import "./App.css";

import Hero from "./components/Hero";
import Header from "./components/Header";
import How from "./components/How";
import Featured from "./components/Featured";
import Meals from "./components/Meals";
import Testimonials from "./components/Testimonials";
import Pricing from "./components/Pricing";
import Features from "./components/Features";
import Cta from "./components/Cta";
import Footer from "./components/Footer";

import "./queries.css";

function App() {
  return (
    <Fragment>
      <Header />
      <main>
        <Hero />
        <Featured />
        <How />
        <Meals />
        <Testimonials />
        <Pricing />
        <Features />
        <Cta />
      </main>
      <Footer />
    </Fragment>
  );
}

export default App;
