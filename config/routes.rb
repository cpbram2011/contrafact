# == Route Map
#
#                    Prefix Verb   URI Pattern                                                                              Controller#Action
#    api_users_findusername GET    /api/users/findusername(.:format)                                                        api/users#findusername
#       api_users_findemail GET    /api/users/findemail(.:format)                                                           api/users#findemail
#                 api_users GET    /api/users(.:format)                                                                     api/users#index
#          api_songs_recent GET    /api/songs/recent(.:format)                                                              api/songs#recent
#                           GET    /api/users/:id/songs(.:format)                                                           api/songs#indexByUploader
#                           GET    /api/users/:id/playlists(.:format)                                                       api/playlists#index
#                           POST   /api/playlists/:id/add(.:format)                                                         api/playlists#addSong
#                           POST   /api/users(.:format)                                                                     api/users#create {:format=>"json"}
#                  api_user GET    /api/users/:id(.:format)                                                                 api/users#show {:format=>"json"}
#             api_playlists POST   /api/playlists(.:format)                                                                 api/playlists#create {:format=>"json"}
#              api_playlist GET    /api/playlists/:id(.:format)                                                             api/playlists#show {:format=>"json"}
#                           PATCH  /api/playlists/:id(.:format)                                                             api/playlists#update {:format=>"json"}
#                           PUT    /api/playlists/:id(.:format)                                                             api/playlists#update {:format=>"json"}
#                           DELETE /api/playlists/:id(.:format)                                                             api/playlists#destroy {:format=>"json"}
#               api_session DELETE /api/session(.:format)                                                                   api/sessions#destroy {:format=>"json"}
#                           POST   /api/session(.:format)                                                                   api/sessions#create {:format=>"json"}
#                 api_songs GET    /api/songs(.:format)                                                                     api/songs#index {:format=>"json"}
#                           POST   /api/songs(.:format)                                                                     api/songs#create {:format=>"json"}
#                  api_song GET    /api/songs/:id(.:format)                                                                 api/songs#show {:format=>"json"}
#                           DELETE /api/songs/:id(.:format)                                                                 api/songs#destroy {:format=>"json"}
#                      root GET    /                                                                                        static_pages#root
#        rails_service_blob GET    /rails/active_storage/blobs/:signed_id/*filename(.:format)                               active_storage/blobs#show
# rails_blob_representation GET    /rails/active_storage/representations/:signed_blob_id/:variation_key/*filename(.:format) active_storage/representations#show
#        rails_disk_service GET    /rails/active_storage/disk/:encoded_key/*filename(.:format)                              active_storage/disk#show
# update_rails_disk_service PUT    /rails/active_storage/disk/:encoded_token(.:format)                                      active_storage/disk#update
#      rails_direct_uploads POST   /rails/active_storage/direct_uploads(.:format)                                           active_storage/direct_uploads#create

Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  
    get '/api/users/findusername', to: 'api/users#findusername'
    get '/api/users/findemail', to: 'api/users#findemail'
    get '/api/users', to: 'api/users#index'
    get '/api/songs/recent', to: 'api/songs#recent'
    get '/api/users/:id/songs', to: 'api/songs#indexByUploader'
    get '/api/users/:id/playlists', to: 'api/playlists#index'
    get 'api/playlists/:id/name', to: 'api/playlists#name'
    post 'api/playlists/:id/add', to: 'api/playlists#addSong'

  namespace :api, defaults: {format: "json"} do
    resources :users, only: [:create, :show]
    resources :comments, only: [:create]
    resources :playlists, only: [:create, :show, :update, :destroy]
    resource :session, only: [:create, :destroy]
    resources :songs, only: [:index, :show, :create, :destroy]
  end

  root to: 'static_pages#root'
end
