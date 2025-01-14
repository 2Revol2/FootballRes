import { Matches } from "../../shared/types";
import { MatchItem } from "../MatchItem/MatchItem";
import s from "./MatchList.module.scss";

type MatchesListProps = {
  todayMatches: Matches[];
};

export const MatchesList = ({ todayMatches }: MatchesListProps) => {
  return (
    <ul className={s.matchList}>
      {todayMatches.map((match) => (
        <MatchItem
          homeTeam={match.homeTeam}
          awayTeam={match.awayTeam}
          utcDate={match.utcDate}
          competition={match.competition}
        />
      ))}
    </ul>
  );
};
