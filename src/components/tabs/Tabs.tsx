import { useState } from "react";

const Tabs = ({ handleChange }: any) => {
  const listNav = [
    {
      id: 1,
      content: "Kích hoạt bảo hành",
    },
    {
      id: 2,
      content: "Tra cứu thông tin",
    },
  ];

  const [active, setActive] = useState<number>(1);

  return (
    <div className="flex flex-col gap-3 col-span-4">
      <h1 className="font-medium text-2xl pb-3">Dịch vụ</h1>

      {listNav.map((item: any) => {
        return (
          <div className="flex w-auto items-baseline gap-3" key={item.id}>
            <div
              className={`${
                active == item.id ? "bg-[#053367]" : "bg-white"
              } w-6 h-6 rounded-full flex items-center justify-center`}
            >
              <i
                className="fas fa-chevron-right"
                style={{
                  color: active == item.id ? "#fff" : "#053367",
                  fontSize: 12,
                }}
              ></i>
            </div>
            <div
              className={`${active == item.id && "font-medium"} cursor-pointer`}
              onClick={() => {
                setActive(item.id);
                handleChange(item.id);
                document.title = item.content;
              }}
            >
              {item.content}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Tabs;
