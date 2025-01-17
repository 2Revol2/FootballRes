import { MatchItem } from "../MatchItem/MatchItem";
import { Matches } from "../../shared/api/match/types";
import s from "./MatchList.module.scss";

type MatchesListProps = {
  todayMatches: Matches[];
};

export const MatchesList = ({ todayMatches }: MatchesListProps) => {
  return (
    <ul className={s.matchList}>
      {todayMatches.map((match, index) => (
        <MatchItem
          key={index}
          homeTeam={match.homeTeam}
          awayTeam={match.awayTeam}
          utcDate={match.utcDate}
          competition={match.competition}
        />
      ))}
    </ul>
  );
};
