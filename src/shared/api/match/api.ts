import { baseInstance } from "../base";

export const getTodayMatches = async () =>
  (await baseInstance.get("matches")).data;

export const getResultMatches = async (dateFrom: string, dateTo: string) =>
  (
    await baseInstance.get("matches", {
      params: {
        dateFrom: dateFrom,
        dateTo: dateTo,
      },
    })
  ).data;
