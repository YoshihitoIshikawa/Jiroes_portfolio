Rails.application.routes.draw do
  get 'reviews/index'
  get 'reviews/create'
  get 'reviews/show'
  get 'reviews/update'
  get 'reviews/destroy'
  namespace :api do
    namespace :v1 do
      resources :shops, only: [:index, :create, :show, :update, :destroy]
    end
  end
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
