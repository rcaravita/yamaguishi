Yamaguishi::Application.routes.draw do

	devise_for :clients,
		:class_name => "Admin::Client",
		:path => 'cliente',
		:path_names => {:sign_in => 'login', :sign_out => 'logout', :sign_up => 'cadastro'},
		:controllers => {
				:orders => "orders",
				:confirmations => "website/clients/confirmations",
				:passwords => "website/clients/passwords",
				:registrations => "website/clients/registrations",
				:sessions => "website/clients/sessions",
				:unlocks => "website/clients/unlocks"}

	devise_for :administrators,
		:class_name => "Admin::Administrator",
		:path => 'admin',
		:path_names => {:sign_in => 'login', :sign_out => 'logout'},
		:controllers => {
				:confirmations => "admin/administrators/confirmations",
				:passwords => "admin/administrators/passwords",
				:registrations => "admin/administrators/registrations",
				:sessions => "admin/administrators/sessions",
				:unlocks => "admin/administrators/unlocks"}

	get "/admin" => "admin#index", as: :administrator_root

	namespace :admin do
		resources :shops
		resources :routes
		resources :orders
		resources :clients
		resources :client_changes
		resources :order_changes
		resources :items
		resources :producers
		resources :products
		resources :administrators
		resources :categories do
			collection { post :sort }
		end
		resources :pages
		get "attaches/gallery" => "attaches#gallery"
		resources :attaches
		get "items/:id/toggleVisibility" => "items#toggleVisibility"
		get "items/:id/toggleHighlight" => "items#toggleHighlight"
		get "attaches/:id/toggleSlideshow" => "attaches#toggleSlideshow"
		get "orders/:id/toggleStatus" => "orders#toggleStatus"

		get "maintenance" => "maintenance#index", as: :maintenance
		post "maintenance/import_clients" => "maintenance#import_clients", as: :import_clients
		get "maintenance/export_clients" => "maintenance#export_clients", as: :export_clients
		get "maintenance/export_orders_yamasis" => "maintenance#export_orders_yamasis", as: :export_orders_yamasis

		get "client_changes/:id/markAsViewed" => "client_changes#markAsViewed"

	end

	get "/pedido" => "website#order", as: :order #Store module
	patch "/pedido/atualizar" => "website#order_update", as: :order_update #Store module
	get "/pedido/confirmar" => "website#order_confirmed", as: :order_confirmed #Store module
	get "/pedido/mesclar" => "website#order_merge", as: :order_merge #Store module
	get "/pedido/manter" => "website#order_keep", as: :order_keep #Store module
	get "/pedido/manter_outro" => "website#order_keep_other", as: :order_keep_other #Store module
	patch "/pedido/entrega" => "website#order_update_delivery", as: :order_update_delivery #Store module
	get "/pedido/fechar" => "website#order_checkout", as: :order_checkout #Store module
	get "/pedido/excluir" => "website#order_destroy", as: :order_destroy #Store module
	get "/pedido/cancelar/:id" => "website#order_cancel", as: :order_cancel #Store module
	get "/pedido/adicionar/:id" => "website#add_to_cart", as: :add_to_cart #Store module
	delete "/produto/excluir/:id" => "website#remove_item", as: :remove_item #Store module

	get "/localizar" => "website#find_local", as: :find_local
	get "/onde-comprar" => "website#where_to_buy", as: :where_to_buy

	get "/pedidos" => "website#client_orders", as: :client_orders
	get "/area" => "website#client_area", as: :client_area

	get "/cliente" => "website#client", as: :client

	get "c/:link" => "website#category", as: :category
	get "p/:link" => "website#product", as: :product


	get 'atendimento' => 'website#contact_form_new', :as => :contact_form_new
	post 'atendimento' => 'website#contact_form_create', :as => :contact_form

	get "*page" => "website#page", as: :page

	# Sample of regular route:
	#		match 'products/:id' => 'catalog#view'
	# Keep in mind you can assign values other than :controller and :action

	# Sample of named route:
	#		match 'products/:id/purchase' => 'catalog#purchase', :as => :purchase
	# This route can be invoked with purchase_url(:id => product.id)

	# Sample resource route (maps HTTP verbs to controller actions automatically):
	#		resources :products

	# Sample resource route with options:
	#		resources :products do
	#			member do
	#				get 'short'
	#				post 'toggle'
	#			end
	#
	#			collection do
	#				get 'sold'
	#			end
	#		end

	# Sample resource route with sub-resources:
	#		resources :products do
	#			resources :comments, :sales
	#			resource :seller
	#		end

	# Sample resource route with more complex sub-resources
	#		resources :products do
	#			resources :comments
	#			resources :sales do
	#				get 'recent', :on => :collection
	#			end
	#		end

	# Sample resource route within a namespace:
	#		namespace :admin do
	#			# Directs /admin/products/* to Admin::ProductsController
	#			# (app/controllers/admin/products_controller.rb)
	#			resources :products
	#		end

	# You can have the root of your site routed with "root"
	# just remember to delete public/index.html.
	root :to => 'website#index'

	# See how all your routes lay out with "rake routes"

	# This is a legacy wild controller route that's not recommended for RESTful applications.
	# Note: This route will make all actions in every controller accessible via GET requests.
	# match ':controller(/:action(/:id))(.:format)'
end
