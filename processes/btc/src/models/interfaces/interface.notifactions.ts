export interface NotificationInterface {
  notification_id?: number;
  message: string;
  amount: number,
  alert_price: any | null,
  fiat_type: string | null,
  from_user_id: number;
  to_user_id?: number | null;
  notification_type: string;
  tx_id?: number | null;
  tx_type?: string;
  coin_symbol: string | null;
  coin_id: number;
  resent_count?: number | null;
  view_status?: string | null;
  state: string | null;
  coin_price_in_usd?: {} | null;
  wallet_address?: string | null;
}