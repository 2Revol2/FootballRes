import { useEffect } from "react";
import { MatchesList } from "../../components/MatchList/MatchesList";
import { Title } from "../../components/Title/Title";
import s from "./Main.module.scss";
import { Matches } from "../../shared/api/match/types";
import { Loading } from "../../components/Loading/Loading";
import { matchStore } from "../../store/api/match-store/match-store";
import { observer } from "mobx-react-lite";
import { Input } from "../../components/Input/Input";
import { useFilteredMatches } from "../../hooks/useFilteredMatches";

export const Main = observer(() => {
  const { todayMatchData, getTodayMatchAction } = matchStore;

  useEffect(() => {
    getTodayMatchAction();
  }, []);

  const todayMatches: Matches[] =
    todayMatchData?.state == "fulfilled" ? todayMatchData?.value.matches : [];

  const { filteredMatches, searchQuery, setSearchQuery } =
    useFilteredMatches(todayMatches);

  return (
    <main>
      <div
        className={
          todayMatchData?.state === "pending" ? s.loading : s.matchWrapper
        }
      >
        {!todayMatches ||
          (todayMatchData?.state === "pending" && (
            <Loading variants="yellow" />
          ))}
        {todayMatchData?.state === "fulfilled" && todayMatches.length === 0 && (
          <Title> Сегодня нет матчей</Title>
        )}

        {todayMatchData?.state === "fulfilled" && todayMatches.length > 0 && (
          <>
            <div className={s.header}>
              {filteredMatches.length === 0 ? (
                <Title>Похоже такого матча нет</Title>
              ) : (
                <Title>Матчи сегодня</Title>
              )}
              <Input
                searchQuery={searchQuery}
                setSearchQuery={setSearchQuery}
              />
            </div>

            {filteredMatches && <MatchesList showDate={false} matches={filteredMatches} />}
          </>
        )}
      </div>
    </main>
  );
});
