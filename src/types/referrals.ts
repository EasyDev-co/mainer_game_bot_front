export type TReferrals = {
  referrals_count: number;
  total_bonuses: number,
  bonuses: [
    {
      referrer_name: string;
      amount: number;
      created_at: string;
    }
  ];
};