import { id } from "../constants/constants";
import { BASE_URL } from "../constants/links";

export const checkTransaction = async (boc: string, amount: number) => {
  await fetch(`${BASE_URL}/api/v1/deposit/check_transaction/`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "User-ID": id,
    },
    body: JSON.stringify({
      amount: amount,
      boc: boc
    })
  });
};