import { AxiosInstance } from "axios";

export const InvCarWarrantyApi = (apiBase: AxiosInstance) => {
  return {
    InvCarWarranty_Active: async (params: any) => {
      return await apiBase.post("InvCarWarranty/Active", {
        ...params,
      });
    },
  };
};
