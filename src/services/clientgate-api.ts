import axios from "axios";
import { Tid } from "./Tid";
import { InvCarWarrantyApi } from "./apis/InvCarWarranty";

export const useClientGate = () => {
  const api = axios.create({
    baseURL: import.meta.env.VITE_API_ENTRY_CENTER_GATE_URL,
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
      "Content-Type": "application/x-www-form-urlencoded",
      AppAgent: import.meta.env.VITE_AGENT,
      GwUserCode: import.meta.env.VITE_GW_USER_CODE,
      GwPassword: import.meta.env.VITE_GW_PASSWORD,
      PartnerCode: import.meta.env.VITE_PARTNER_CODE,
      PartnerUserCode: import.meta.env.VITE_PARTNER_USERCODE,
      Tid: Tid(),
      AppTid: Tid(),
      LanguageCode: "en-US",
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Credentials": "true",
      "Access-Control-Allow-Methods": "GET, DELETE, HEAD, OPTIONS",
    },
  });

  return api;
};

export const useClientGateApi = () => {
  const apiBase = useClientGate();

  const useInvCarWarrantyApi = InvCarWarrantyApi(apiBase);

  return {
    ...useInvCarWarrantyApi,
  };
};
