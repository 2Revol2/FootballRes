import s from "./TeamInfo.module.scss";
import { Team } from "../../api/match/types";

export const TeamInfo = ({ name, crest }: Team) => {
  return (
    <div className={s.team}>
      <img width={40} height={40} src={crest} alt={crest} />
      <p>{name}</p>
    </div>
  );
};
