import { Header } from "./components/Navbar/Navbar";
import { Routes, Route } from "react-router-dom";
import { ResultMatches } from "./pages/ResultMatches/ResultMatches";
import { FutureMatches } from "./pages/FutureMatches/FutureMatches";
import { Paths } from "./shared/config";
import { Main } from "./pages/Main/Main";
export const App = () => {
  return (
    <>
      <Header />
      <div className="container">
        <Routes>
          <Route path={Paths.MAIN} element={<Main />} />
          <Route path={Paths.RESULT} element={<ResultMatches />} />
          <Route path={Paths.FUTURE} element={<FutureMatches />} />
        </Routes>
      </div>
    </>
  );
};
