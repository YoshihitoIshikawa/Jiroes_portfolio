Rails.application.routes.draw do
  get 'posts/index'
  get 'posts/create'
  get 'posts/show'
  get 'posts/update'
  get 'posts/delete'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
