import Test from "./Test";
import "./app.scss";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/hero/Hero";

function App() {
  return (
    <>
      <section id="Homepage">
        <Navbar />
        <Hero />
      </section>
      <section id="Services">Parallax</section>
      <section>Services</section>
      <section id="Portfolio">Parallax</section>
      <section>Portfolio</section>
      <section>Portfolio 2</section>
      <section>Portfolio 3</section>
      <section id="Contacts">contact 3</section>
      {/* <Test /> */}
    </>
  );
}

export default App;
