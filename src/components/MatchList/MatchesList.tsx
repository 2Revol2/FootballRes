import { MatchItem } from "../MatchItem/MatchItem";
import { Matches } from "../../shared/api/match/types";
import s from "./MatchList.module.scss";

type MatchesListProps = {
  matches: Matches[];
  showDate: boolean
  showFullDate: boolean
  variants: "green" | "yellow" | "lightgreen";
};

export const MatchesList = ({ matches, showDate, variants, showFullDate }: MatchesListProps) => {
  return (
    <ul className={s.matchList}>
      {matches.map((match, index) => (
        <MatchItem
        variants={variants}
          key={index}
          homeTeam={match.homeTeam}
          awayTeam={match.awayTeam}
          utcDate={match.utcDate}
          competition={match.competition}
          score={match?.score}
          showDate={showDate}
          showFullDate={showFullDate}
        />
      ))}
    </ul>
  );
};
