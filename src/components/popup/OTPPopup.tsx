import { Button, Popup } from "devextreme-react";
import { useEffect, useState } from "react";
import OTPInput from "react-otp-input";
import { toast } from "react-toastify";

const OTPPopup = ({
  isPopupVisible,
  togglePopup,
  uuid,
  otpCode,
  closePopup,
}: any) => {
  const [otp, setOtp] = useState("");
  const [currentOtpCode, setCurrentOtpCode] = useState<any>("");

  const expireTime = 300000;

  const handleSubmit = () => {
    console.log(otp);
    if (otp == currentOtpCode) {
      toast.success("Đã kích hoạt bảo hành thành công!", {
        hideProgressBar: true,
      });
    } else {
      toast.error("Mã OTP không chính xác!", {
        hideProgressBar: true,
      });
    }
  };

  useEffect(() => {
    if (isPopupVisible) {
      const timer = setTimeout(() => {
        setOtp("");
        setCurrentOtpCode(otpCode);
        closePopup();
        toast.error("Mã OTP đã hết hạn!", {
          hideProgressBar: true,
        });
      }, 5000);

      return () => {
        clearTimeout(timer);
      };
    }
  }, [uuid]);

  const renderPopup = () => {
    return (
      <>
        <p className="text-center font-medium">
          Vui lòng nhập mật khẩu được gửi đến số điện thoại di động của bạn để
          xác thực thông tin. Hiệu lực 5 phút.
        </p>
        <p className="text-center my-5 font-medium">Nhập mã OTP</p>
        <OTPInput
          value={otp}
          onChange={setOtp}
          numInputs={6}
          renderInput={(props) => (
            <input
              {...props}
              className="border-[1px] w-[50px] h-[50px] min-h-[50px] min-w-[50px] rounded-[5px]"
            />
          )}
          shouldAutoFocus
          inputStyle={{
            boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
            fontSize: 20,
          }}
          containerStyle="justify-center"
          renderSeparator={<div className="px-2"></div>}
        />
        <div className="w-full flex justify-center py-4">
          {otp.length === 6 ? (
            <Button
              className="text-white items-center justify-center mt-5 rounded-[5px] customBtn"
              text="Gửi"
              type="danger"
              onClick={handleSubmit}
            ></Button>
          ) : (
            <Button
              className="text-white items-center justify-center mt-5 rounded-[5px] cursor-not-allowed"
              text="Gửi"
              type="normal"
            ></Button>
          )}
        </div>
        <p className="text-center py-3">Bạn không nhận được mã OTP?</p>
        <p className="text-md font-medium uppercase text-center text-[#e10b13] cursor-pointer">
          Lấy lại mã otp
        </p>
      </>
    );
  };
  return (
    <Popup
      visible={isPopupVisible}
      hideOnOutsideClick={false}
      onHiding={togglePopup}
      width={500}
      height={400}
      resizeEnabled={false}
      title="Xác thực thông tin"
      contentRender={renderPopup}
    />
  );
};

export default OTPPopup;
