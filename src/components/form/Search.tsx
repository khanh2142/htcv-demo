import { Button, TextBox } from "devextreme-react";
import { useSetAtom } from "jotai";
import React, { useMemo, useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import { toast } from "react-toastify";
import { v4 } from "uuid";
import { useClientGateApi } from "../../services/clientgate-api";
import OTPPopup from "../popup/OTPPopup";
import { showErrorAtom } from "../store/error";

const Search = () => {
  const captchaKey = "6Lf8QDAmAAAAAJJcILY1ClDbSOO1EIkmBwcMxhVB";
  const api = useClientGateApi();
  const captchaRef: any = React.createRef();
  const [currentCode, setCurrentCode] = useState(<></>);
  const [loading, setLoading] = useState(false);
  const [isValidated, setIsValidated] = useState(false);
  const [captcha, setCaptcha] = useState<string | null>(null);
  const showError = useSetAtom(showErrorAtom);
  const [formValue, setFormValue] = useState({
    PhoneNo: undefined,
    VIN: undefined,
    f: "",
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
      CustomerPhoneNo: formValue.PhoneNo,
    });
    if (resp.data.Data._objResult?.Success) {
      const dataValue = resp.data.Data._objResult.Data.Lst_Inv_CarWarranty;
      if (dataValue) {
        if (dataValue?.length) {
          setLoading(false);
          const sendOtp = await api.InvCarWarranty_SendOTP(formValue);
          if (sendOtp.data.Data._objResult?.Success) {
            setCurrentCode(
              <OTPPopup
                isPopupVisible={true}
                togglePopup={togglePopup}
                uuid={v4()}
                otpCode={sendOtp.data.Data._objResult.Data.RT_OTP}
                closePopup={togglePopup}
                formValue={formValue}
                flagSearch={true}
                dataSearch={dataValue}
              />
            );
          } else {
            showError({
              message: sendOtp.data.Data._strErrCode,
              debugInfo: sendOtp.data.Data._excResult,
              errorInfo:
                sendOtp.data.Data._excResult.InnerException.Exception
                  .ExceptionMethod,
            });
          }
          return;
        } else {
          toast.error("Không có dữ liệu nào cả");
          setLoading(false);
        }
      } else {
        toast.error("Không có dữ liệu");
        setLoading(false);
        return;
      }
    } else {
      showError({
        message: resp.data.Data._strErrCode,
        debugInfo: resp.data.Data._excResult,
        errorInfo:
          resp.data.Data._excResult.InnerException.Exception.ExceptionMethod,
      });
    }
  };
  const renderCaptcha = useMemo(() => {
    return (
      <>
        <ReCAPTCHA
          sitekey={captchaKey}
          ref={captchaRef}
          className="mt-5"
          onChange={(value: any) => {
            setCaptcha(value);
          }}
          hl="vi"
        />
      </>
    );
  }, []);

  return (
    <>
      <h3 className="text-center font-medium text-lg uppercase py-5">
        Tra cứu thông tin xe
      </h3>
      <div className="px-10" content={formValue.PhoneNo}>
        <label className="font-medium">Số điện thoại</label>
        <TextBox
          placeholder="Nhập số điện thoại"
          value={formValue.PhoneNo}
          onValueChange={(value: any) =>
            setFormValue({ ...formValue, PhoneNo: value })
          }
          className="mt-2 mb-3"
        />

        {!formValue.PhoneNo && isValidated && (
          <p className="text-[0.85em] font-medium text-[#d9534f] pl-1">
            Vui lòng nhập số điện thoại!
          </p>
        )}

        <label className="font-medium">Số khung</label>
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

        {renderCaptcha}
        {(!captcha || captcha == null) && isValidated && (
          <p className="text-[0.85em] font-medium text-[#d9534f] pl-1">
            Vui lòng xác thực captcha!
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

      {currentCode}
    </>
  );
};

export default Search;
