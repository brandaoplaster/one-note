Rails.application.routes.draw do
  devise_for :users
  devise_scope :user do
    authenticated :user do
      root 'notes#index', as: :authenticated_root
    end
  
    unauthenticated do
      root 'devise/sessions#new', as: :unauthenticated_root
    end
  end
  
  resources :notes, only: [:create, :update, :index, :show, :destroy]
  post '/users/:id/add_note/:note_id', to: 'users#add_note'
  delete '/users/:id/remove_note/:note_id', to: 'users#remove_note'
  post '/tags/:title/add_to_note/:note_id', to: 'tags#add_to_note'
  delete '/tags/:title/remove_from_note/:note_id', to: 'tags#remove_from_note'
end
