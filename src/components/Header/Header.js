import s from './Header.module.css';

const Header = () => {
  return (
    <header className={s.header}>
      <div className="container">
        <div className={s.flexContainer}>
          <div className={s.logo}>
            <p className={s.text}>Currency</p>
            <p className={s.text}>Exchange</p>
          </div>
          <p className={s.date}>{new Date().toLocaleDateString()}</p>
        </div>
      </div>
    </header>
  );
};

export default Header;
