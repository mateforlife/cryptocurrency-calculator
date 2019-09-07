class Currency < ApplicationRecord
  API_KEY = 'f1843f75-f5a6-4fc2-977c-40d34c916536'.freeze
  BASE_URI = 'https://api.coinmarketcap.com/v1/ticker/'.freeze

  def calculate_value(amount)
    (current_price.to_f * amount.to_f).round(4)
  end

  def current_price
    # options = { headers: { "x-cmc_pro_api_key": API_KEY } }
    request = HTTParty.get("#{BASE_URI}/#{slug}?convert=USD")
    response = JSON.parse(request.body)[0]['price_usd'].to_f
  end
end
