# config/routes.rb

# Define routes for the application.
# This file defines the endpoints and their corresponding controller actions 
Rails.application.routes.draw do
  resources :posts
  root 'pages#home'
  
end
