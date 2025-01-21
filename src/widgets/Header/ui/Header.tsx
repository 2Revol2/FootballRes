import { NavLink } from "react-router-dom";
import s from "./header.module.scss";
import { Paths } from "../../../shared/config/routeConfig";
import { Navbar } from "../components/Navbar/Navbar";

export const Header = () => {
  return (
    <header className={s.header}>
      <div className={s.headerWrapper}>
        <h1>
          <NavLink className={s.logo} to={Paths.MAIN}>
            FootballRes
          </NavLink>
        </h1>
        <Navbar />
      </div>
    </header>
  );
};
