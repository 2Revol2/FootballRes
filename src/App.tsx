import { Header } from "./components/Navbar/Navbar";

import { AppRouter } from "./routes/AppRouter";
export const App = () => {
  return (
    <>
      <Header />
      <div className="container">
        <AppRouter />
      </div>
    </>
  );
};
