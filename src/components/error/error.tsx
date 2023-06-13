import { ScrollView } from "devextreme-react";
import { Popup, Position, ToolbarItem } from "devextreme-react/popup";
import { useSetAtom } from "jotai";
import { ErrorMessage, clearErrorAtom, useErrorStore } from "./../store/error";

import Button from "devextreme-react/button";
import { useState } from "react";

const ErrorDetail = ({ error }: { error: ErrorMessage }) => {
  return (
    <div>
      {!!error.debugInfo && (
        <div className="error__debuginfo">
          <div className="error__debuginfo-title">{"Debug information"}</div>
          {Object.entries(error.debugInfo).map(([key, value]) => {
            return (
              <div key={key}>
                <div className="error__debuginfo__key">
                  {key}:{JSON.stringify(value, null, 2)}
                </div>
              </div>
            );
          })}
        </div>
      )}
      {!!error.errorInfo && (
        <div className="error__excresult">
          <div className="error__excresult-title">{"Exception result"}</div>
          {Object.entries(error.errorInfo).map(([key, value]) => {
            return (
              <div key={key}>
                <div className="error__excresult__key">
                  {key}:{JSON.stringify(value, null, 2)}
                </div>
              </div>
            );
          })}
        </div>
      )}
      {JSON.stringify(error)}
    </div>
  );
};
export default function Error() {
  const [size, setSize] = useState<"short" | "full">("short");
  const viewModeSizes = {
    short: {
      width: 400,
      height: 200,
    },
    full: {
      width: 550,
      height: 600,
    },
  };

  const { errors } = useErrorStore();
  const clear = useSetAtom(clearErrorAtom);
  const hasErrors = !!errors && errors.length > 0;

  const handleClose = () => {
    clear();
  };

  const handleZoom = () => {
    setSize(size === "short" ? "full" : "short");
  };

  return (
    <Popup
      titleRender={() => (
        <div className="error-title">
          <Button
            icon={"/images/icons/warning.svg"}
            hoverStateEnabled={false}
            activeStateEnabled={false}
            focusStateEnabled={false}
            stylingMode={"text"}
          />
        </div>
      )}
      // container=".dx-viewport"
      visible={hasErrors}
      position={"center"}
      width={viewModeSizes[size].width}
      height={viewModeSizes[size].height}
      onHiding={() => setSize("short")}
    >
      <Position at="bottom" my="center" />
      <ToolbarItem
        widget="dxButton"
        toolbar="bottom"
        location="after"
        options={{
          text: size === "short" ? "ViewDetail" : "Collapse",
          onClick: handleZoom,
          stylingMode: "contained",
        }}
      />
      <ToolbarItem toolbar="bottom" location="after">
        <Button text="Close" onClick={handleClose} />
      </ToolbarItem>
      <ScrollView width={520} showScrollbar={"always"}>
        <div className="error-body overflow-scroll">
          {errors.map((item: any, index: any) => {
            if (item) {
              return (
                <div className="error-item" key={index}>
                  <div className="error__main">{item.message}</div>
                  {size === "full" && (
                    <div className="error__detail">
                      <ErrorDetail error={item} />
                    </div>
                  )}
                </div>
              );
            }
          })}
        </div>
      </ScrollView>
    </Popup>
  );
}
