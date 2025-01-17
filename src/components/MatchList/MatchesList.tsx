import { MatchItem } from "../MatchItem/MatchItem";
import { Matches } from "../../shared/api/match/types";
import s from "./MatchList.module.scss";

type MatchesListProps = {
  matches: Matches[];
  showDate: boolean
};

export const MatchesList = ({ matches, showDate }: MatchesListProps) => {
  return (
    <ul className={s.matchList}>
      {matches.map((match, index) => (
        <MatchItem
          key={index}
          homeTeam={match.homeTeam}
          awayTeam={match.awayTeam}
          utcDate={match.utcDate}
          competition={match.competition}
          score={match?.score}
          showDate={showDate}
        />
      ))}
    </ul>
  );
};
