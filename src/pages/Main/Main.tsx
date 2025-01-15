import { useEffect, useState } from "react";
import { MatchesList } from "../../components/MatchList/MatchesList";
import { Title } from "../../components/Title/Title";
import s from "./Main.module.scss";
import { getTodayMactches } from "../../api/getTodayMatches";
import { Matches } from "../../shared/types";
import { Loading } from "../../components/Loading/Loading";
export const Main = () => {
  const [todayMatches, setTodayMatches] = useState<Matches[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  useEffect(() => {
    const fetchTodayMatches = async () => {
      try {
        const response = await getTodayMactches();
        setTodayMatches(response.matches);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    fetchTodayMatches();
  }, []);

  return (
    <main>
      <div className={s.matchWrapper}>
        {isLoading && <Loading />}

        {!isLoading && todayMatches.length === 0 && (
          <Title> Сегодня нет матчей</Title>
        )}

        {!isLoading && todayMatches.length > 0 && (
          <>
            <Title>Матчи сегодня</Title>
            <MatchesList todayMatches={todayMatches} />
          </>
        )}
        
      </div>
    </main>
  );
};
