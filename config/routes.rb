Rails.application.routes.draw do
  devise_for :users
  devise_scope :user do
    authenticated :user do
      root 'dashboards#index', as: :authenticated_root
    end
  
    unauthenticated do
      root 'devise/sessions#new', as: :unauthenticated_root
    end
  end

  namespace :api do
    namespace :v1 do
      get '/dashboard', to: 'dashboards#index', as: 'dashboard'
      resources :notes, only: [:create, :update, :index, :show, :destroy]
      resources :tags, only: [:index, :create, :destroy]
      resources :tag_notes, only: [:create, :destroy]
    end
  end
  
end
