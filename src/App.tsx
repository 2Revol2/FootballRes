import { Footer } from "./components/Footer/Footer";
import { Header } from "./components/Navbar/Navbar";

import { AppRouter } from "./routes/AppRouter";
export const App = () => {
  return (
    <div className="app">
      <Header />
      <div className="container">
        <AppRouter />
      </div>
      <Footer />
    </div>
  );
};
