import { Route, Routes } from "react-router-dom"
import { Paths } from "../shared/config"
import { Main } from "../pages/Main/Main"
import { ResultMatches } from "../pages/ResultMatches/ResultMatches"
import { FutureMatches } from "../pages/FutureMatches/FutureMatches"


export const AppRouter = () => {
  return (
    <Routes>
          <Route path={Paths.MAIN} element={<Main />} />
          <Route path={Paths.RESULT} element={<ResultMatches />} />
          <Route path={Paths.FUTURE} element={<FutureMatches />} />
        </Routes>
  )
}
