Rails.application.routes.draw do
  get 'users/index'
  namespace :api do
    namespace :v1 do
      resources :shops, only: [:index, :create, :show, :update, :destroy] do
        resources :reviews, only: [:index, :create, :show, :update, :destroy]
      end
    end
  end
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
