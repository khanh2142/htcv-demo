import { Form, Popup, ScrollView } from "devextreme-react";
import { SimpleItem } from "devextreme-react/form";
import { useEffect, useState } from "react";

const SearchPopup = ({ formData, uuid, isPopupVisible, togglePopup }: any) => {
  const [formValue, setFormValue] = useState({
    ModelName: "",
    VIN: "",
    PlateNo: "",
    ModelCode: "",
    SpecCode: "",
    DealerCode: "",
    ReceiveDate: "",
    StoreDateExpired: "",
    DealerCodeBuyer: "",
    DeliveryDate: "",
    WarrantyDate: "",
    CustomerConfirmDate: "",
    HTCVDateExpired: "",
    DealerDateExpired: "",
    WarrantyKm: "",
    ColorCode: "",
    EngineNo: "",
    LUDateTime: "",
    LUBy: "",
    WarrantyType: "",
    Remark: "",
    CustomerCode: "",
    CustomerName: "",
    CustomerPhoneNo: "",
    ZaloID: "",
    CreateDTime: "",
    CreateBy: "",
    CarWarrantyStatus: "",
    LogLUDateTime: "",
    LogLUBy: "",
  });

  useEffect(() => {
    const firstChild = formData[0];
    if (firstChild) {
      setFormValue(firstChild);
    }
  }, [uuid]);

  const renderPopup = () => {
    return (
      <>
        {/* <ScrollView showScrollbar="always" /> */}
        <Form
          // disabled={true}
          readOnly={true}
          formData={formValue}
          labelMode="outside"
          className="form-search w-full"
        >
          {/* <SimpleItem
            dataField="CustomerName"
            label={{ text: "Tên khách hàng", showColon: false }}
            cssClass="text-[#0f3c6e] font-medium py-4"
          ></SimpleItem>
          <SimpleItem
            dataField="Address"
            label={{ text: "Địa chỉ", showColon: false }}
            cssClass="text-[#0f3c6e] font-medium py-4"
          ></SimpleItem>
          <SimpleItem
            dataField="CustomerPhoneNo"
            label={{ text: "Số điện thoại", showColon: false }}
            cssClass="text-[#0f3c6e] font-medium py-4"
          ></SimpleItem> */}
          <SimpleItem
            dataField="ModelName"
            label={{ text: "Tên model", showColon: false }}
            cssClass="text-[#0f3c6e] font-medium py-4"
          ></SimpleItem>
          <SimpleItem
            dataField="VIN"
            label={{ text: "Số khung", showColon: false }}
            cssClass="text-[#0f3c6e] font-medium py-4"
          ></SimpleItem>
          <SimpleItem
            dataField="WarrantyDate"
            label={{ text: "Ngày đăng ký bảo hành", showColon: false }}
            cssClass="text-[#0f3c6e] font-medium py-4"
          ></SimpleItem>
          {/* <SimpleItem
            dataField="HTCVDateExpired"
            label={{ text: "Thời hàn bảo hành HTCV", showColon: false }}
            cssClass="text-[#0f3c6e] font-medium py-4"
          ></SimpleItem> */}
          <SimpleItem
            dataField="DealerDateExpired"
            label={{ text: "Thời hạn bảo hành", showColon: false }}
            cssClass="text-[#0f3c6e] font-medium py-4"
          ></SimpleItem>
        </Form>
        <p className="line"></p>

        <h3 className="text-center font-bold uppercase py-5">
          Thông tin chính sách bảo hành
        </h3>
        <p className="font-[500] text-left">
          Xin chúc mừng và cảm ơn quý khách vì đã lựa chọn sử dụng một trong
          những chiếc xe ô tô được ưa chuộng nhất toàn cầu.
        </p>
        <p className="mt-5 font-[500] text-left">
          Thông tin này bổ sung cho cuốn “Hướng dẫn sử dụng”. Các bạn hãy dành
          chút thời gian để đọc kỹ Chính sách bảo hành và các thông tin cần
          thiết về chiếc xe ô tô của bạn.
        </p>
        <p className="mt-2 font-[500] text-left">
          Chính sách bảo hành sẽ giải thích về những điều chủ xe/người điều
          khiển xe cần thực hiện để xe ô tô của bạn được bảo hành theo quy định
          bảo hành xe ô tô mới của Công ty Cổ phần Hyundai Thành Công Thương
          Mại, đồng thời quy định rõ về phạm vi, giới hạn bảo hành và không bảo
          hành.
        </p>
        <p className="mt-2 font-[500] text-left">
          Công ty Cổ phần Hyundai Thành Công Thương Mại <strong>“HTCV”</strong>{" "}
          ban hành Chính sách bảo hành này nhằm mục đích xác định trách nhiệm
          bảo hành cho xe ô tô mới do HTCV phân phối đối với các hư hỏng do
          khuyết tật của vật liệu hoặc lỗi sản xuất, trong các điều kiện sử dụng
          và bảo dưỡng định kỳ đúng và đầy đủ như đã được quy định tại Hướng dẫn
          sử dụng và Sổ bảo hành này. Trong suốt thời gian bảo hành, HTCV chịu
          trách nhiệm bảo hành (bao gồm phụ tùng (chi tiết có thể tháo rời) và
          nhân công) đối với các hư hỏng do khuyết tật của vật liệu hoặc lỗi sản
          xuất theo các điều kiện và điều khoản bảo hành đã được qui định. Việc
          bảo hành được thực hiện bởi các Đại lý của HTCV{" "}
          <strong>“Đại Lý”</strong> trên lãnh thổ Việt Nam. Bảo hành có hiệu lực
          áp dụng khi xe ô tô trong phạm vi, giới hạn bảo hành được chuyển
          nhượng hợp pháp cho chủ xe khác.
        </p>
        <p className="mt-2 font-[500] text-left">
          Tất cả các thông tin trong Chính sách bảo hành này là dựa trên các dữ
          liệu mới nhất có sẵn trong thời gian xuất bản có thể được thay đổi mà
          không cần báo trước.
        </p>
        <p className="mt-5 font-[500] text-left">
          Một lần nữa chúng tôi xin chúc mừng bạn và hy vọng rằng bạn sẽ có được
          cảm giác thú vị khi sử dụng xe. Bất cứ khi nào không hài lòng với chất
          lượng dịch vụ hay thấy xe có dấu hiệu trục trặc thì bạn hãy liên lạc
          ngay với những người quản lý của Đại lý, nơi bạn mua xe. Bên cạnh đó,
          bạn có thể liên lạc với HTCV theo số điện thoại{" "}
          <strong>1900 56 12 12</strong> để nhận được sự trợ giúp kịp thời.
        </p>
      </>
    );
  };

  return (
    <Popup
      visible={isPopupVisible}
      hideOnOutsideClick={false}
      onHiding={togglePopup}
      width={700}
      height={600}
      resizeEnabled={false}
      title="Thông tin xe bảo hành"
    >
      <ScrollView showScrollbar="always" width="100%" height="100%">
        {renderPopup()}
      </ScrollView>
    </Popup>
  );
};

export default SearchPopup;
