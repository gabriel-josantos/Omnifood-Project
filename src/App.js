import { Fragment } from "react";
import "./App.css";

import Hero from "./components/jsx/Hero";
import Header from "./components/jsx/Header";
import How from "./components/jsx/How";
import Featured from "./components/jsx/Featured";
import Meals from "./components/jsx/Meals";
import Testimonials from "./components/jsx/Testimonials";
import Pricing from "./components/jsx/Pricing";
import Features from "./components/jsx/Features";
import Cta from "./components/jsx/Cta";
import Footer from "./components/jsx/Footer";

import "./queries.css";
import LoginProvider from "./components/context/LoginProvider";
/*Funcinalidades a serem implmentadas
1) Validação basica de usuario e senha, e apos login a parte de Login some e aparece "Profile"
2) Usar Use Effect 




*/

function App() {
  return (
    <Fragment>
      <LoginProvider>
        <Header />
      </LoginProvider>
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
