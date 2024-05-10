import { useTonWallet } from '@tonconnect/ui-react';

export const Address = () => {
  const wallet = useTonWallet();

  console.log(wallet);

  return wallet && (
    <div>
      <span>Connected wallet: {wallet?.device.platform}</span>
      <span>Device: {wallet.device.appName}</span>
    </div>
  );
};