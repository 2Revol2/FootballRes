import { useEffect, useState } from "react";
import { MatchesList } from "../../components/MatchList/MatchesList";
import { Title } from "../../components/Title/Title";
import s from "./Main.module.scss";
import { Matches } from "../../shared/api/match/types";
import { Loading } from "../../components/Loading/Loading";
import { matchStore } from "../../store/api/match-store/match-store";
import { observer } from "mobx-react-lite";

export const Main = observer(() => {
  const [searchQuery, setSearchQuery] = useState<string>("");
  const { todayMatchData, getTodayMatchAction } = matchStore;

  useEffect(() => {
    getTodayMatchAction();
  }, []);

  const TodayMatches =
    todayMatchData?.state == "fulfilled" ? todayMatchData?.value.matches : [];

  const filteredMatches = TodayMatches.filter(
    (match: Matches) =>
      match.homeTeam.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      match.awayTeam.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      match.competition.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <main>
      <div
        className={
          todayMatchData?.state === "pending" ? s.loading : s.matchWrapper
        }
      >
        {!TodayMatches || (todayMatchData?.state === "pending" && <Loading />)}
        {todayMatchData?.state === "fulfilled" && TodayMatches.length === 0 && (
          <Title> Сегодня нет матчей</Title>
        )}

        {todayMatchData?.state === "fulfilled" && TodayMatches.length > 0 && (
          <>
            <div className={s.header}>
              {filteredMatches.length === 0 ? (
                <Title>Похоже такого матча нет</Title>
              ) : (
                <Title>Матчи сегодня</Title>
              )}
              <input
                type="text"
                placeholder="Search..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>

            {filteredMatches && <MatchesList todayMatches={filteredMatches} />}
          </>
        )}
      </div>
    </main>
  );
});
