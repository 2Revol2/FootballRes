import "react-toastify/dist/ReactToastify.css";
import { Footer } from "../widgets/Footer/index";
import { Header } from "../widgets/Header/index";
import { ToastContainer } from "react-toastify";
import { AppRouter } from "./provides/routes/index";
export const App = () => {
  return (
    <div className="app">
      <Header />
      <div className="container">
        <AppRouter />
      </div>
      <Footer />
      <ToastContainer />
    </div>
  );
};
