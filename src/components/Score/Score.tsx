import s from "./Score.module.scss";
type Props = {
  score: string | undefined;
};
export const Score = ({ score }: Props) => {
  return <p className={s.score}>{score}</p>;
};
