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
      resources :tags, only: [:index, :create]
      post '/users/:id/add_note/:note_id', to: 'users#add_note'
      delete '/users/:id/remove_note/:note_id', to: 'users#remove_note'
      
      # post '/tags/:title/add_to_note/:note_id', to: 'tags#add_to_note'
      # delete '/tags/:title/remove_from_note/:note_id', to: 'tags#remove_from_note'
    end
  end
  
end
