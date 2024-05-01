import { id } from "../constants/constants";
import { BASE_URL } from "../constants/links";

export function checkResponse(res: Response) {
  if (res.ok) {
    return res.json();
  }
  return Promise.reject(`Произошла ошибка: ${res.status}`);
}

export const generInvoice = async (sum: number) => {
  return await fetch(`${BASE_URL}/api/v1/deposit/create/`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "User-ID": id,
    },
    body: JSON.stringify({
      amount: sum,
    }),
  }).then((res) => checkResponse(res));
};
