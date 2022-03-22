# frozen_string_literal: true

Rails.application.routes.draw do
  scope :api, defaults: { format: :json } do
    devise_for :users, controllers: { sessions: :sessions, registrations: :registrations },
                       path_names: { sign_in: :login }
    resources :tasks
  end

  authenticated :user do
    resources :dashboard, only: [:index] do
      collection do
        get :home
      end
    end
  end

  resources :dashboard do
    collection do
      get :about
    end
  end

  resources :contacts

  require 'sidekiq/web'
  authenticate :user, ->(u) { u.admin? } do
    mount Sidekiq::Web => '/sidekiq'

    namespace :admin do
      resources :users
      root to: 'users#index'
    end
  end

  root to: 'static#index'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
