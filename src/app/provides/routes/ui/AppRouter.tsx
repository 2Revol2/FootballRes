import { Route, Routes } from "react-router-dom";
import { Paths } from "../../../../shared/config/routeConfig";
import { Main } from "../../../../pages/Main/index";
import { ResultMatches } from "../../../../pages/ResultMatches/index";
import { FutureMatches } from "../../../../pages/FutureMatches/index";

export const AppRouter = () => {
  return (
    <Routes>
      <Route path={Paths.MAIN} element={<Main />} />
      <Route path={Paths.RESULT} element={<ResultMatches />} />
      <Route path={Paths.FUTURE} element={<FutureMatches />} />
    </Routes>
  );
};
