import { Button, CheckBox, Form } from "devextreme-react";
import { SimpleItem } from "devextreme-react/form";
import React, { useMemo, useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import { v4 } from "uuid";
import OTPPopup from "../popup/OTPPopup";

const Search = () => {
  const captchaKey = "6Lf8QDAmAAAAAJJcILY1ClDbSOO1EIkmBwcMxhVB";

  const captchaRef: any = React.createRef();

  const [formValue] = useState({
    PhoneNo: null,
    VIN: null,
    Checkbox: true,
    Captcha: false,
  });

  const [isPopupVisible, setIsPopupVisible] = useState(false);

  const togglePopup = () => {
    setIsPopupVisible(!isPopupVisible);
  };

  const checkbox = (value: any) => {
    return (
      <div className="flex items-center gap-3 pb-3">
        <CheckBox value={value.editorOptions.value} />
        <p className="font-medium">Tôi đã đọc và đồng ý</p>
      </div>
    );
  };

  const renderCaptcha = useMemo(() => {
    return <ReCAPTCHA sitekey={captchaKey} ref={captchaRef} />;
  }, [formValue]);

  return (
    <>
      <h3 className="text-center font-medium text-lg uppercase py-5">
        Tra cứu thông tin xe
      </h3>
      <div className="px-10">
        <Form labelLocation="top" formData={formValue}>
          <SimpleItem
            dataField="PhoneNo"
            label={{ text: "Số điện thoại", showColon: false }}
            cssClass="text-[#0f3c6e] font-medium py-4"
            editorOptions={{ placeholder: "Nhập số điện thoại" }}
          ></SimpleItem>
          <SimpleItem
            dataField="VIN"
            label={{ text: "Số khung", showColon: false }}
            cssClass="text-[#0f3c6e] font-medium py-4"
            editorOptions={{ placeholder: "Nhập số khung" }}
          ></SimpleItem>
        </Form>
        {renderCaptcha}
        <Button
          className="text-white items-center justify-center mt-5 rounded-[5px] customBtn-search"
          text="Tìm kiếm"
          type="danger"
          onClick={togglePopup}
        ></Button>
      </div>

      <OTPPopup
        isPopupVisible={isPopupVisible}
        togglePopup={togglePopup}
        uuid={v4()}
      />
    </>
  );
};

export default Search;
