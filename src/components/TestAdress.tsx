import { useTonAddress, useTonWallet } from '@tonconnect/ui-react';

export const Address = () => {
  const wallet = useTonWallet();
  const userFriendlyAddress = useTonAddress();
  const rawAddress = useTonAddress(false);

  console.log(wallet);

  return (
    <div>
      <span>User-friendly address: {userFriendlyAddress}</span>
      <span>Raw address: {rawAddress}</span>
    </div>
  );
};