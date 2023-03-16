import FindMe from "../components/FindMe";
import Footer from "../components/Footer";
import Nav from "../components/Nav";

function Contact() {
  return (
    <>
      <Nav />
      <div className="section contact__page">
        <section className="contact__card">
          <div className="section__top__title">Obtenir un devis</div>
          <div className="section__title">Me contacter</div>
          <p>
            Merci de donner un maximum de détail sur le projet afin que je
            puisse évaluer correctement la charge de travail que représente
            votre projet. Cela permettra aussi d'avoir un premier chiffrage au
            plus prêt du devis final.
          </p>
          <form action="/contact" className="contact__form">
            <div>
              <input
                type="text"
                name="name"
                placeholder="Nom & Prénom"
                required=""
                minLength="3"
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                required=""
              />
            </div>
            <textarea
              name="description"
              placeholder="Description du projet"
              required=""
              minLength="20"></textarea>
            <div className="btn">
              <button>Obtenir un devis</button>
            </div>
          </form>
        </section>
      </div>

      <FindMe />
      <Footer />
    </>
  );
}

export default Contact;
