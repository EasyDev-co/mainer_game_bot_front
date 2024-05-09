import { id } from "../constants/constants";
import { BASE_URL } from "../constants/links";
import { checkResponse } from "./invoice";

export const checkUser = async () => {
  return await fetch(`${BASE_URL}/api/v1/users/get/`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "User-ID": id
    }
  }).then((res) => checkResponse(res));
};