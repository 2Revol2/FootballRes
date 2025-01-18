import { useEffect } from "react";
import s from "./FutureMatches.module.scss";
import { matchStore } from "../../store/api/match-store/match-store";
import dayjs from "dayjs";
import { Matches } from "../../shared/api/match/types";
import { useFilteredMatches } from "../../hooks/useFilteredMatches";
import { Loading } from "../../components/Loading/Loading";
import { Title } from "../../components/Title/Title";
import { Input } from "../../components/Input/Input";
import { MatchesList } from "../../components/MatchList/MatchesList";
import { observer } from "mobx-react-lite";

export const FutureMatches = observer(() => {
  const today = new Date();
  today.setDate(today.getDate() + 1);
  const nextWeek = new Date();
  nextWeek.setDate(today.getDate() + 7);
  const { futureMatchData, getFutureMatchAction } = matchStore;
  useEffect(() => {
    getFutureMatchAction(
      dayjs(nextWeek).format("YYYY-MM-DD"),
      dayjs(today).format("YYYY-MM-DD")
    );
  }, []);

  const futureMacthes: Matches[] =
    futureMatchData?.state == "fulfilled" ? futureMatchData?.value.matches : [];

  const { filteredMatches, searchQuery, setSearchQuery } =
    useFilteredMatches(futureMacthes);
  return (
    <main>
      <div
        className={
          futureMatchData?.state === "pending" ? s.loading : s.matchWrapper
        }
      >
        {!futureMatchData ||
          (futureMatchData?.state === "pending" && (
            <Loading variants="lightgreen" />
          ))}
        {futureMatchData &&
          futureMatchData.state === "fulfilled" &&
          futureMacthes.length > 0 && (
            <>
              <div className={s.header}>
                {filteredMatches.length === 0 ? (
                  <Title variants="yellow">Похоже такого матча нет</Title>
                ) : (
                  <Title variants="yellow">Матчи на 7 дней вперед</Title>
                )}
                <Input
                  searchQuery={searchQuery}
                  setSearchQuery={setSearchQuery}
                />
              </div>
              {filteredMatches && (
                <MatchesList
                  showFullDate={true}
                  variants="lightgreen"
                  showDate={true}
                  matches={filteredMatches}
                />
              )}
            </>
          )}
      </div>
    </main>
  );
});
