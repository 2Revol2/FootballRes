import s from "./PageError.module.scss";
export const PageError = () => {
  return (
    <div className={s.error}>
      <h1>Oops! Something went wrong.</h1>
      <p>Please try refreshing the page</p>
    </div>
  );
};
