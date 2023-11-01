require 'rails_helper'

describe 'GET /shops', type: :request do
  it 'gets all shops' do
    FactoryBot.create_list(:shop, 10)
    get api_v1_shops_path
    json = JSON.parse(response.body)

    expect(response.status).to eq(200)
    expect(json.length).to eq(10)
  end
end
