import { useEffect } from "react";
import s from "./FutureMatches.module.scss";
import { matchStore } from "../../../shared/lib/store/api/match-store/match-store";
import dayjs from "dayjs";
import { Matches } from "../../../shared/api/match/types";
import { useFilteredMatches } from "../../../shared/lib/hooks/useFilteredMatches";
import { Loading } from "../../../shared/ui/Loading/Loading";
import { Title } from "../../../shared/ui/Title/Title";
import { Input } from "../../../shared/ui/Input/Input";
import { MatchesList } from "../../../widgets/MatchList/index";
import { observer } from "mobx-react-lite";

export const FutureMatches = observer(() => {
  const today = new Date();
  today.setDate(today.getDate() + 1);
  const nextWeek = new Date();
  nextWeek.setDate(today.getDate() + 8);
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
                  <Title variants="green">Похоже такого матча нет</Title>
                ) : (
                  <Title variants="green">Матчи на 7 дней вперед</Title>
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
