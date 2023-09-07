class User < ApplicationRecord
  has_many :reviews

  def self.from_token_payload(payload)
    find_by(sub: payload['sub']) || create!(sub: payload['sub'])
  end
end
