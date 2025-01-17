import s from "./Navbar.module.scss";
import { NavLink } from "react-router-dom";
import { Paths } from "../../shared/routerPaths/config";
export const Header = () => {
  return (
    <header className={s.header}>
      <div className={s.headerWrapper}>
        <h1>
          <NavLink className={s.logo} to={Paths.MAIN}>
            FootballRes
          </NavLink>
        </h1>

        <nav>
          <ul className={s.navList}>
            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive ? `${s.active}` : `${s.link}`
                }
                to={Paths.RESULT}
              >
                Результаты матчей
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive ? `${s.active}` : `${s.link}`
                }
                to={Paths.FUTURE}
              >
                Будущие матчи
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};
