import { Form, Popup } from "devextreme-react";
import { SimpleItem } from "devextreme-react/form";
import { useMemo, useState, useEffect } from "react";

const SearchPopup = ({ formData, uuid, isPopupVisible, togglePopup }: any) => {
  const [formValue, setFormValue] = useState({
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
    console.log("formData ", formData);
    const firstChild = formData[0];
    if (firstChild) {
      setFormValue(firstChild);
    }
  }, [uuid]);

  const renderPopup = () => {
    return (
      <>
        <Form
          // disabled={true}
          readOnly={true}
          formData={formValue}
          labelMode="outside"
          className="form-search"
        >
          <SimpleItem
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
          ></SimpleItem>
          <SimpleItem
            
            dataField="VIN"
            label={{ text: "Số khung", showColon: false }}
            cssClass="text-[#0f3c6e] font-medium py-4"
          ></SimpleItem>
          <SimpleItem
            dataField="CustomerConfirmDate"
            label={{ text: "Ngày đăng ký bảo hành", showColon: false }}
            cssClass="text-[#0f3c6e] font-medium py-4"
          ></SimpleItem>
          <SimpleItem
            dataField="HTCVDateExpired"
            label={{ text: "Thời hàn bảo hành HTCV", showColon: false }}
            cssClass="text-[#0f3c6e] font-medium py-4"
          ></SimpleItem>
          <SimpleItem
            dataField="DealerDateExpired"
            label={{ text: "Thời hạn bảo hành đại lý", showColon: false }}
            cssClass="text-[#0f3c6e] font-medium py-4"
          ></SimpleItem>
        </Form>
        <p className="line"></p>

        <p className="text-center font-medium">THÔNG TIN CHÍNH HÃNG BÃO HÀNH</p>
        <p className="text-left my-1 font-medium">
          Xin chức màng và cảm ơn quý khách vì đã lựa chọn sử dụng một trong
          những chiếc xe ô to được ưa chuộng nhất toàn cầu{" "}
        </p>
        <p className="text-left py-1">
          Đây là sổ bảo hành điện tử được Công tu Coor phần Liên Doanh Ô tô
          Huynhdai Thành Công Việt Nam (HTV) phát hành cho các xe ô tô du lịch
          Hyundai do HTV phân phối. Sổ này hỗ bổ sung cho cuốn "Hướng dẫn sử
          dụng". Quý khách vui lòng dành chút thời gian để đọc cuốn sổ này và
          điền đầy đủ các sthoong tin cần thiết trong sổ vì đây là nguồn lưu trữ
          các thông tin về chiếc xe ô tô của bạn
        </p>
        <p className="text-left py-1 font-medium">
          Cuốn sổ này sẽ giải thích về những điều chủ xe/người điều khiển xe cần
          thực hiện để xe ô tô của quý khánh được bảo hành theo quy định bảo
          hành xe ô tô mới của HTV đồng thời quy định rõ về phạm vi , giới hạn
          bảo hành và không bảo hành{" "}
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
      resizeEnabled={false}
      title="Thông tin khách hàng và xe"
      contentRender={renderPopup}
    />
  );
};

export default SearchPopup;
