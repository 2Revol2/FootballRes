import { Footer } from "../components/Footer/Footer";
import { Header } from "../components/Navbar/Navbar";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import { AppRouter } from "../routes/AppRouter";
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
