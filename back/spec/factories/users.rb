FactoryBot.define do
  factory :user do
    nickname { "Test nickname" }
    email { "Test email" }
    picture { "Test picture" }
    association :review
  end
end
