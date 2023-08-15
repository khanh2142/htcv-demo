import { Button, TextBox } from "devextreme-react";
import { useSetAtom } from "jotai";
import { useState } from "react";
import { toast } from "react-toastify";
import { v4 } from "uuid";
import { useClientGateApi } from "../../services/clientgate-api";
import Descriptions from "../contents/Descriptions";
import SearchPopup from "../popup/SearchPopup";
import { showErrorAtom } from "../store/error";

const Search = () => {
  const api = useClientGateApi();
  const [currentCode, setCurrentCode] = useState(<></>);
  const [loading, setLoading] = useState(false);
  const [isValidated, setIsValidated] = useState(false);
  const showError = useSetAtom(showErrorAtom);
  const [formValue, setFormValue] = useState({
    VIN: undefined,
  });

  const togglePopup = () => {
    setCurrentCode(<></>);
  };

  const handleSubmit = async () => {
    setIsValidated(true);
    // e.preventDefault();
    setLoading(true);
    const resp = await api.InvCarWarranty_Search({
      VIN: formValue.VIN,
      CustomerPhoneNo: "",
    });

    if (resp.data.Data._objResult?.Success) {
      const dataValue = resp.data.Data._objResult.Data.Lst_Inv_CarWarranty;
      if (dataValue) {
        if (dataValue?.length) {
          setCurrentCode(
            <SearchPopup
              formData={dataValue}
              uuid={v4()}
              isPopupVisible={currentCode}
              togglePopup={togglePopup}
            />
          );
          setLoading(false);
        } else {
          toast.error("Không có dữ liệu nào cả", {
            hideProgressBar: true,
          });
          setLoading(false);
        }
      } else {
        toast.error("Không có dữ liệu", {
          hideProgressBar: true,
        });
        setLoading(false);
      }
    } else {
      showError({
        message: resp.data.Data._strErrCode,
        debugInfo: resp.data.Data._excResult,
        errorInfo:
          resp.data.Data._excResult.InnerException.Exception.ExceptionMethod,
      });
      setLoading(false);
    }
  };

  return (
    <>
      <h3 className="text-center text-base sm:text-lg font-medium uppercase py-5">
        Tra cứu thông tin xe
      </h3>
      <div className="px-3 sm:px-10">
        <label className="font-medium">
          Số khung <span className="text-red-500">*</span>
        </label>
        <TextBox
          placeholder="Nhập số khung"
          value={formValue.VIN}
          onValueChange={(value: any) =>
            setFormValue({ ...formValue, VIN: value })
          }
          className="mt-2 mb-3"
        />

        {!formValue.VIN && isValidated && (
          <p className="text-[0.85em] font-medium text-[#d9534f] pl-1">
            Vui lòng nhập số khung!
          </p>
        )}

        <Button
          disabled={loading}
          className="text-white items-center justify-center mt-5 rounded-[5px] customBtn-search"
          text="Tìm kiếm"
          type="default"
          validationGroup="form"
          useSubmitBehavior={true}
          onClick={handleSubmit}
        ></Button>
      </div>

      <div className="h-[1px] w-full bg-[#0f3c6e] mt-10"></div>
      <div className="h-[350px] overflow-scroll overflow-x-hidden my-[20px] pb-2">
        <Descriptions />
      </div>

      {currentCode}
    </>
  );
};

export default Search;
