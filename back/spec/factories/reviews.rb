FactoryBot.define do
  factory :review do
    title { "Test title" }
    caption { "Test caption" }
    score { 5 }
    image { "test.png" }
    association :user
    association :shop
  end
end
