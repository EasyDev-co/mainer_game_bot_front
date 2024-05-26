export type TStatistics = {
  min_withdraw_amount: string | number;
  claim_commission: string,
  miner_price: string,
  miner_price_for_minerals: number,
  min_amount_minerals_for_sale: string,
  p2p_commission: string,
  withdraw_commission: string,
  is_presale: boolean,
  presale_miners_count: number,
  purchased_miners_packs: number,
  miners_per_pack: number,
  total_miners: number,
  total_minerals: number,
  placed_minerals: number,
  market_minimum_price: string,
  market_minimum_price_gt_5: string,
  market_daily_volume: string;
};