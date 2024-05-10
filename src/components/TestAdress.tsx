import { useTonAddress } from '@tonconnect/ui-react';

export const Address = () => {
  const userFriendlyAddress = useTonAddress();
  const rawAddress = useTonAddress(false);

  return (
    <div>
      <span>User-friendly address: {userFriendlyAddress}</span>
      <span>Raw address: {rawAddress}</span>
    </div>
  );
};