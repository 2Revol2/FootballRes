import s from "./MatchItem.module.scss";
import { Matches } from "../../shared/types";
export const MatchItem = ({
  homeTeam,
  awayTeam,
  utcDate,
  competition,
}: Matches) => {
  return (
    <li className={s.card}>
        
      <div className={s.league}>
        <img width={30} height={30} src={competition.emblem} alt="" />
        <p>{competition.name}</p>
      </div>

      <div className={s.matchInfo}>
        <div className={s.team}>
          <img
            width={40}
            height={40}
            src={homeTeam.crest}
            alt={homeTeam.name}
          />
          <p>{homeTeam.name}</p>
        </div>

        <div className={s.center}>
          <div className={s.matchDate}>
            <span>vs</span>
            <p>{utcDate.split("T").join(" ").slice(0, -1)} UTC</p>
          </div>
        </div>

        <div className={s.team}>
          <img
            width={40}
            height={40}
            src={awayTeam.crest}
            alt={awayTeam.name}
          />
          <p>{awayTeam.name}</p>
        </div>

      </div>
    </li>
  );
};
