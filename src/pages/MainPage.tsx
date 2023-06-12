import { useState } from "react";
import Descriptions from "../components/contents/Descriptions";
import Search from "../components/form/Search";
import Warranty from "../components/form/Warranty";
import Tabs from "../components/tabs/Tabs";

const MainPage = () => {
  const [currentNav, setCurrentNav] = useState<number>(1);

  return (
    <div className="container mx-auto px-12 grid grid-cols-12 py-3">
      <Tabs handleChange={setCurrentNav} />
      <div className="w-full col-span-8 shadow-3xl rounded-[5px] py-5 px-10 bg-white">
        {currentNav == 1 ? <Warranty /> : <Search />}

        <div className="h-[1px] w-full bg-[#0f3c6e] mt-10"></div>
        <Descriptions />
      </div>
    </div>
  );
};

export default MainPage;
