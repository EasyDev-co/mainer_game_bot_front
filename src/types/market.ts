export type TMarketDeal = {
  id: string;
  seller: {
    id: number;
    user_id: number;
    first_name: string | null;
    last_name: string | null;
    username: string | null;
  };
  buyer: number;
  price_per_mineral: string;
  created: string;
  modified: string;
  minerals_count: string;
  ton_count: string;
  status: number;
};

export type TMarket = {
  count: number;
  next: string | null;
  previous: string | null;
  results: TMarketDeal[];
};