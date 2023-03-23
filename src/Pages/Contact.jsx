// import axios from "axios";
import { useRef, useState } from "react";
import useElementOnScreen from "../hooks/useElementOnScreen";
// import { useNavigate } from "react-router-dom";
// import axios from "axios";
import FindMe from "../components/FindMe";
import Footer from "../components/Footer";
import Nav from "../components/Nav";
import Confirmation from "../components/Confirmation";

function Contact() {
  const [submit, setSubmit] = useState(false);
  // const navigate = useNavigate();
  const [inputs, setInputs] = useState({});
  const form = useRef();

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setInputs((values) => ({ ...values, [name]: value }));
    console.log(inputs);
  };

  const handleSubmit = (e) => {
    // e.preventDefault();
    form.current.style.display = "none";
    setSubmit(true);
    // axios({
    //   method: "POST",
    //   url: "http://localhost:80/portfolioAPI/user",
    //   data: inputs,
    // });
  };

  const topTitleRef = useRef(null);
  const titleRef = useRef(null);
  const text = useRef(null);

  useElementOnScreen({}, topTitleRef, "reveal-visible");
  useElementOnScreen({}, titleRef, "reveal-visible");
  useElementOnScreen({}, form, "reveal-visible");
  useElementOnScreen({}, text, "reveal-visible");

  return (
    <>
      <Nav />
      <div className="section contact__page">
        <section className="contact__card">
          <div className="section__top__title reveal-1" ref={topTitleRef}>
            Obtenir un devis
          </div>
          <div className="section__title reveal-2" ref={titleRef}>
            Me contacter
          </div>
          <p ref={text} className="reveal-2">
            Merci de donner un maximum de détail sur le projet afin que je
            puisse évaluer correctement la charge de travail que représente
            votre projet. Cela permettra aussi d'avoir un premier chiffrage au
            plus prêt du devis final.
          </p>
          <form
            onSubmit={handleSubmit}
            className="contact__form reveal-3"
            ref={form}
            name="contact"
            method="POST"
          >
            <input type="hidden" name="form-name" value="contact" />
            <div>
              <input
                type="text"
                name="name"
                placeholder="Nom & Prénom"
                required
                minLength="3"
                onChange={handleChange}
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                required
                onChange={handleChange}
              />
            </div>
            <textarea
              name="description"
              placeholder="Description du projet"
              required
              minLength="20"
              onChange={handleChange}
            ></textarea>
            <div className="btn">
              <button type="submit">Obtenir un devis</button>
            </div>
          </form>
          {submit && <Confirmation />}
        </section>
      </div>

      <FindMe />
      <Footer />
    </>
  );
}

export default Contact;
