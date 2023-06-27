import { useAtomValue } from "jotai";
import { titleAtom } from "../../App";

const Breadcrumb = () => {
  const title = useAtomValue(titleAtom);

  return (
    <div className="container mx-auto flex gap-2 py-3 px-2 text-sm sm:text-base">
      <span>
        <i className="fas fa-home"></i>
      </span>
      <span>/</span>
      <span>Dịch vụ</span>
      <span>/</span>

      <span className="font-medium">{title}</span>
    </div>
  );
};

export default Breadcrumb;
