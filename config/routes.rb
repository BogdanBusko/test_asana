Rails.application.routes.draw do
  root to: "dashboard#index"

  namespace :account do
    resources :projects do
      resources :tasks, only: :create
    end
  end
end
