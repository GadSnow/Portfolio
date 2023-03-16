import Nav from "../components/Nav";
import Hero from "../components/Hero";
import Skills from "../components/Skills";
import FindMe from "../components/FindMe";
import Footer from "../components/Footer";
import Projects from "../components/Projects";
function Welcome() {
  return (
    <>
      <Nav />
      <Hero />
      <Skills />
      {/* <Projects /> */}
      <FindMe />
      <Footer />
    </>
  );
}

export default Welcome;
