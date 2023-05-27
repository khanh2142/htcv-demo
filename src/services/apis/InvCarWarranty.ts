import { AxiosInstance } from "axios";

export const InvCarWarrantyApi = (apiBase: AxiosInstance) => {
  return {
    InvCarWarranty_Active: async (params: any) => {
      return await apiBase.post("InvCarWarranty/Active", {
        ...params,
      });
    },
    InvCarWarranty_SendOTP: async (params: any) => {
      return await apiBase.post("Message/SendOTP", {
        ...params,
      });
    },
  };
};
