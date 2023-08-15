import { useState } from "react";
import Search from "../components/form/Search";
import Warranty from "../components/form/Warranty";
import Tabs from "../components/tabs/Tabs";

const MainPage = () => {
  const [currentNav, setCurrentNav] = useState<number>(1);

  return (
    <div className="container mx-auto px-3 sm:px-12 md:grid md:grid-cols-12 py-3">
      <Tabs handleChange={setCurrentNav} />
      <div className="w-full md:col-span-8 shadow-3xl rounded-[5px] py-5 md:px-10 bg-white mt-5">
        {currentNav == 1 ? <Warranty /> : <Search />}
      </div>
    </div>
  );
};

export default MainPage;
