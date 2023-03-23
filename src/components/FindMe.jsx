import { useRef } from "react";
import useElementOnScreen from "../hooks/useElementOnScreen";

function FindMe() {
  const topTitleRef = useRef(null);
  const titleRef = useRef(null);
  const link1 = useRef(null);
  const link2 = useRef(null);
  const link3 = useRef(null);

  useElementOnScreen({}, topTitleRef, "reveal-visible");
  useElementOnScreen({}, titleRef, "reveal-visible");
  useElementOnScreen({}, link1, "reveal-visible");
  useElementOnScreen({}, link2, "reveal-visible");
  useElementOnScreen({}, link3, "reveal-visible");

  return (
    <section className="section social">
      <div className="section__top__title reveal-1" ref={topTitleRef}>
        Réseaux sociaux
      </div>
      <div className="section__title reveal-2" ref={titleRef}>
        Me retrouver
      </div>
      <div className="social-links">
        <a
          href="https://github.com/GadSnow"
          className="reveal-3"
          rel="noreferrer"
          target="_blank"
          ref={link1}
        >
          <strong>Github</strong>
          <span>github.com/GadSnow</span>
        </a>
        <a
          href="https://www.youtube.com/"
          className="reveal-3"
          rel="noreferrer"
          target="_blank"
          ref={link2}
        >
          <strong>Youtube</strong>
          <span>youtube.com/abdoulgadiry</span>
        </a>
        <a
          href="https://www.facebook.com/abdoulgadiry.barry.1253"
          rel="noreferrer"
          target="_blank"
          className="reveal-3"
          ref={link3}
        >
          <strong>Facebook</strong>
          <span>facebook.com/abdoulgadiry</span>
        </a>
      </div>
    </section>
  );
}

export default FindMe;
