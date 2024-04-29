import { BASE_URL } from "../constants/links";

function checkResponse(res: Response) {
  if (res.ok) {
    return res.json();
  }
  return Promise.reject(`Произошла ошибка: ${res.status}`);
}

const telegramID = 1234;

export const generInvoice = async (sum: number) => {
  return await fetch(`${BASE_URL}/api/v1/market/deposit/create/${telegramID}/`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      amount: sum,
    }),
  }).then((res) => checkResponse(res));
};
