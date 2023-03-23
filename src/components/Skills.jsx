import { useRef } from "react";
import useElementOnScreen from "../hooks/useElementOnScreen";

function Skills() {
  const topTitleRef = useRef(null);
  const titleRef = useRef(null);
  const service1 = useRef(null);
  const service2 = useRef(null);
  const service3 = useRef(null);

  useElementOnScreen({}, topTitleRef, "reveal-visible");
  useElementOnScreen({}, titleRef, "reveal-visible");
  useElementOnScreen({}, service1, "reveal-visible");
  useElementOnScreen({}, service2, "reveal-visible");
  useElementOnScreen({}, service3, "reveal-visible");

  return (
    <section className="section section__skills">
      <div className="section__top__title reveal-1" ref={topTitleRef}>
        Mes compétences
      </div>
      <div className="section__title reveal-2" ref={titleRef}>
        Services
      </div>
      <div className="services">
        <div className="service reveal-3" ref={service1}>
          <div className="service__title">Frontend React</div>
          <p>
            Si vous avez besoin de développer une application dynamique et
            réactive, je maitrise le framework React.
          </p>
        </div>
        <div className="service reveal-3" ref={service2}>
          <div className="service__title">Backend PHP</div>
          <p>
            Un site dynamique ? Je développe des applications PHP depuis un
            certain bout de temps.
          </p>
        </div>
        <div className="service reveal-3" ref={service3}>
          <div className="service__title">Desktop C#</div>
          <p>
            Vous voulez avoir votre propre application desktop pour vos besoins
            ? Je maîtrise C#.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Skills;
