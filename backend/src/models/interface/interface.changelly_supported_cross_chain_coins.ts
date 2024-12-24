export interface ChangellySupportedCrossChainCoinsInterface {
    id: number,
    name: string | null,
    coin_id: number | null,
    status: number | null,
    coin_family: number | null,
    is_token: number | null,
    ticker: string | null,
    full_name: string | null,
    enabled: string | null,
    enabled_from: string | null,
    enabled_to: string | null,
    fix_rate_enabled: string | null,
    payin_confirmations: number | null,
    address_url: string | null,
    transaction_url: string | null,
    image: string | null,
    fixed_time: number | null,
    contract_address: string | null,
    protocol: string | null,
    blockchain: string | null,
    blockchain_precision: number | null,
    created_at: Date,
    updated_at: Date
}