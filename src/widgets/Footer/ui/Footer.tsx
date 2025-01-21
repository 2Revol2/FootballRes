import s from "./Footer.module.scss";

export const Footer = () => {
  return (
    <footer className={s.footer}>
      <div className={s.footerWrapper}>
        <div className={s.linkWrapp}>
          <p className={s.copyright}>© Site by Revol</p>
        </div>

        <ul className={s.linkWrapp}>
          <li>
            <a href="https://github.com/2Revol2" target="_blank">
              GitHub
            </a>
          </li>
          <li>
            <a href="https://github.com/2Revol2/FootballRes" target="_blank">
              Source Code
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};
