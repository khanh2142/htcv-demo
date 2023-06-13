import logo from "../../assets/icon.png";

const Header = () => {
  return (
    <div className="h-[56px] bg-[#e8e8e8] w-full flex">
      <div className="container mx-auto">
        <img src={logo} className="h-full mx-auto sm:m-0" />
      </div>
    </div>
  );
};

export default Header;
