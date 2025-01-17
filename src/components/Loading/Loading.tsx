import s from "./Loading.module.scss";
type Props = {
  variants: "yellow" | "green";
}
export const Loading = ({variants = 'yellow'}:Props) => {
  return <div className={`${s.spinner} ${s[variants]}`}></div>;
};
