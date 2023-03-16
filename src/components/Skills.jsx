function Skills() {
  return (
    <section className="section section__skills">
      <div className="section__top__title">Mes compétences</div>
      <div className="section__title">Services</div>
      <div className="services">
        <div className="service">
          <div className="service__title">Frontend React</div>
          <p>
            Si vous avez besoin de développer une application dynamique et
            réactive, je maitrise le framework React.
          </p>
        </div>
        <div className="service">
          <div className="service__title">Backend PHP</div>
          <p>
            Un site dynamique ? Je développe des applications PHP depuis un
            certain bout de temps.
          </p>
        </div>
        <div className="service">
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
