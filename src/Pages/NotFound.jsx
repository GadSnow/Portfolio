import React from "react";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
function NotFound() {
  return (
    <>
      <Nav />
      <section class="section__notfound">
        <h1 class="notfound__title">Erreur 404</h1>
        <p className="notfound__text">
          Oops! Cette page <br /> n'existe pas.
        </p>
      </section>
      <Footer />
    </>
  );
}

export default NotFound;
