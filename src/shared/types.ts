type League = {
  emblem: string;
  name: string;
};
type Team = {
  name: string;
  crest: string;
};
export type Matches = {
  homeTeam: Team;
  awayTeam: Team;
  utcDate: string;
  stage?: string;
  competition: League;
};
