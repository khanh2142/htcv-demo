import { atom } from "jotai";
import Breadcrumb from "./components/breadcrumb/Breadcrumb";
import Header from "./components/header/Header";
import MainPage from "./pages/MainPage";

export const titleAtom = atom("Bảo hành điện tử xe Thương mại (Truck & Bus)");

function App() {
  return (
    <>
      <Header />
      <Breadcrumb />
      <MainPage />
    </>
  );
}

export default App;
