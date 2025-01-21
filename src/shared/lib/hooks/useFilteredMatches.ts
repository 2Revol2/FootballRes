import { useState, useMemo } from "react";
import { Matches } from "../../api/match/types";

export function useFilteredMatches(matches: Matches[]) {
  const [searchQuery, setSearchQuery] = useState<string>("");

  const filteredMatches = useMemo(() => {
    return matches.filter(
      (match) =>
        match.homeTeam.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        match.awayTeam.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        match.competition.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [matches, searchQuery]);

  return { filteredMatches, searchQuery, setSearchQuery };
}
