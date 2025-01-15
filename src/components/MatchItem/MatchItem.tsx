import s from "./MatchItem.module.scss";
import { Matches } from "../../shared/types";
import { TeamInfo } from "../TeamInfo/TeamInfo";
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
        
        <TeamInfo crest={homeTeam.crest} name={homeTeam.name} />

        <div className={s.center}>
          <div className={s.matchDate}>
            <span>vs</span>
            <p>{utcDate.split("T").join(" ").slice(0, -1)} UTC</p>
          </div>
        </div>

        <TeamInfo crest={awayTeam.crest} name={awayTeam.name} />
      </div>

    </li>
  );
};
