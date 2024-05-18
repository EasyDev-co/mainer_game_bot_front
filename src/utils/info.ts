import { BASE_URL } from "../constants/links";
import { checkResponse } from "./invoice";

export const getInfo = async () => {
  return await fetch(`${BASE_URL}/api/v1/game/info/`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    }
  }).then((res) => checkResponse(res));
};