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
  const [searchQuery, setSearchQuery] = useState<string>("");
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

  const filteredMatches = todayMatches.filter(
    (match) =>
      match.homeTeam.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      match.awayTeam.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      match.competition.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <main>
      <div className={isLoading ? s.loading : s.matchWrapper}>
        {isLoading && <Loading />}
        {!isLoading && todayMatches.length === 0 && (
          <Title> Сегодня нет матчей</Title>
        )}

        {!isLoading && todayMatches.length > 0 && (
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
};
