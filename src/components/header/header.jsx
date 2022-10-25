import "./header.scss";

const Header = () => {
  return (
    <div className="freestyle-header">
      <a href="https://www.technodom.kz" className="freestyle-header__link"/>
      <div className="freestyle-header__container">
        <p className="freestyle-header__text">Участвуй и выигрывай в шоу:</p>
        <h1 className="freestyle-header__title">The Freestyle Experiment </h1>
      </div>
    </div>
  );
};

export default Header;
