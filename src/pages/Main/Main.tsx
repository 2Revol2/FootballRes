import { useEffect } from "react";
import { MatchesList } from "../../components/MatchList/MatchesList";
import { Title } from "../../shared/ui/Title/Title";
import s from "./Main.module.scss";
import { Matches } from "../../shared/api/match/types";
import { Loading } from "../../shared/ui/Loading/Loading";
import { matchStore } from "../../shared/lib/store/api/match-store/match-store";
import { observer } from "mobx-react-lite";
import { Input } from "../../shared/ui/Input/Input";
import { useFilteredMatches } from "../../shared/lib/hooks/useFilteredMatches";

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
          <Title variants="yellow"> Сегодня нет матчей</Title>
        )}

        {todayMatchData?.state === "fulfilled" && todayMatches.length > 0 && (
          <>
            <div className={s.header}>
              {filteredMatches.length === 0 ? (
                <Title variants="yellow">Похоже такого матча нет</Title>
              ) : (
                <Title variants="yellow">Матчи сегодня</Title>
              )}
              <Input
                searchQuery={searchQuery}
                setSearchQuery={setSearchQuery}
              />
            </div>

            {filteredMatches && (
              <MatchesList
                showFullDate={false}
                variants="yellow"
                showDate={false}
                matches={filteredMatches}
              />
            )}
          </>
        )}
      </div>
    </main>
  );
});
