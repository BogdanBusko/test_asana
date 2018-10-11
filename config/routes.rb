Rails.application.routes.draw do
  get '/dashboard', to: "dashboard#index"

  namespace :account do
    resources :projects, only: [:index, :show, :create]
  end
end
