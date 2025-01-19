import s from "./MatchItem.module.scss";
import { Matches } from "../../shared/api/match/types";
import { TeamInfo } from "../TeamInfo/TeamInfo";
import { Score } from "../Score/Score";

interface Props extends Matches {
  showDate: boolean;
  variants: "green" | "yellow" | "lightgreen";
  showFullDate: boolean;
}

export const MatchItem = (props: Props) => {

  const {
    homeTeam,
    awayTeam,
    utcDate,
    competition,
    score,
    showDate,
    showFullDate,
    variants = "yellow",
  } = props;

  const justTime = utcDate.split("T")[1].split(":").slice(0, -1).join(":");
  const onlyDate = utcDate.split("T")[0];
  return (
    <li className={`${s.card} ${s[variants]}`}>
      <div className={s.league}>
        <img width={30} height={30} src={competition.emblem} alt="" />
        <p>{competition.name}</p>
      </div>

      <div className={s.matchInfo}>
        <TeamInfo crest={homeTeam.crest} name={homeTeam.name} />
        <Score score={score?.fullTime.home} />
        <div className={s.center}>
          <div className={s.matchDate}>
            <span>vs</span>
            <div>
              {showFullDate ? (
                <div>
                  <p>{`${justTime} UTC`}</p>
                  <p>{onlyDate}</p>
                </div>
              ) : showDate ? (
                <p>{onlyDate}</p>
              ) : (
                <p>{`${justTime} UTC`}</p>
              )}
            </div>
          </div>
        </div>
        <Score score={score?.fullTime.away} />
        <TeamInfo crest={awayTeam.crest} name={awayTeam.name} />
      </div>
    </li>
  );
};
