Rails.application.routes.draw do
  devise_for :users
  resources :notes, only: [:create, :update, :index, :show, :destroy]
end
