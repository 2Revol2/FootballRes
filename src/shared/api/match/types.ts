type League = {
  emblem: string;
  name: string;
};
export type Team = {
  name: string;
  crest: string;
};
type ScoreTime = {
  home: string;
  away: string;
};

type Score = {
  fullTime: ScoreTime;
};
export type Matches = {
  homeTeam: Team;
  awayTeam: Team;
  utcDate: string;
  stage?: string;
  competition: League;
  score?: Score;
};
