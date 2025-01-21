import { NavLink } from "react-router-dom";
import s from './Navbar.module.scss'
import { Paths } from "../../../../shared/config/routeConfig";
export const Navbar = () => {
  return (
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
  );
};
