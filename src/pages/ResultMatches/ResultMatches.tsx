import { observer } from "mobx-react-lite";
import { matchStore } from "../../store/api/match-store/match-store";
import dayjs from "dayjs";
import { useEffect } from "react";
import { Matches } from "../../shared/api/match/types";
import { Title } from "../../components/Title/Title";
import s from "./ResultMatches.module.scss";
import { Loading } from "../../components/Loading/Loading";
import { useFilteredMatches } from "../../hooks/useFilteredMatches";
import { Input } from "../../components/Input/Input";
import { MatchesList } from "../../components/MatchList/MatchesList";
export const ResultMatches = observer(() => {
  const { resultMatchData, getResultMatchAction } = matchStore;

  const today = new Date();
  const twoWeeksAgo = new Date();
  twoWeeksAgo.setDate(today.getDate() - 7);

  useEffect(() => {
    getResultMatchAction(
      dayjs(today).format("YYYY-MM-DD"),
      dayjs(twoWeeksAgo).format("YYYY-MM-DD")
    );
  }, []);
  const matchesResult: Matches[] =
    resultMatchData?.state == "fulfilled" ? resultMatchData?.value.matches : [];

  const { filteredMatches, searchQuery, setSearchQuery } =
    useFilteredMatches(matchesResult);

  return (
    <main>
      <div
        className={
          resultMatchData?.state === "pending" ? s.loading : s.matchWrapper
        }
      >
        {!resultMatchData ||
          (resultMatchData?.state === "pending" && (
            <Loading variants="green" />
          ))}
        {resultMatchData &&
          resultMatchData.state === "fulfilled" &&
          matchesResult.length > 0 && (
            <>
              <div className={s.header}>
                {filteredMatches.length === 0 ? (
                  <Title variants="lightgreen">Похоже такого матча нет</Title>
                ) : (
                  <Title variants="lightgreen">Результаты матчей за последнии 7 дней</Title>
                )}
                <Input
                  searchQuery={searchQuery}
                  setSearchQuery={setSearchQuery}
                />
              </div>
              {filteredMatches && <MatchesList variants="green" showDate={true} matches={filteredMatches} />}
            </>
          )}
      </div>
    </main>
  );
});
