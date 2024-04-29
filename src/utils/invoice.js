export const BASE_URL = "https://d859-213-88-25-127.ngrok-free.app";
function checkResponse(res) {
  if (res.ok) {
    return res.json();
  }
  return Promise.reject(`Произошла ошибка: ${res.status}`);
}

export const generInvoice = async (sum) => {
  return await fetch(`${BASE_URL}/api/v1/market/deposit/create/1234/`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
        amount: sum,
    }),
  }).then((res) => checkResponse(res));
};
