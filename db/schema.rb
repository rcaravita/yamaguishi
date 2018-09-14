# encoding: UTF-8
# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended to check this file into your version control system.

ActiveRecord::Schema.define(:version => 20160623105508) do

  create_table "admin_addresses", :force => true do |t|
    t.string   "address"
    t.string   "number"
    t.string   "complement"
    t.string   "quarter"
    t.string   "city"
    t.string   "state"
    t.string   "postcode"
    t.string   "kind"
    t.string   "addressable_type"
    t.integer  "addressable_id"
    t.datetime "created_at",       :null => false
    t.datetime "updated_at",       :null => false
    t.string   "complete_address"
  end

  create_table "admin_administrators", :force => true do |t|
    t.string   "name"
    t.string   "email",                  :default => "", :null => false
    t.string   "encrypted_password",     :default => "", :null => false
    t.string   "reset_password_token"
    t.datetime "reset_password_sent_at"
    t.datetime "remember_created_at"
    t.integer  "sign_in_count",          :default => 0
    t.datetime "current_sign_in_at"
    t.datetime "last_sign_in_at"
    t.string   "current_sign_in_ip"
    t.string   "last_sign_in_ip"
    t.datetime "created_at",                             :null => false
    t.datetime "updated_at",                             :null => false
  end

  add_index "admin_administrators", ["email"], :name => "index_admin_administrators_on_email", :unique => true
  add_index "admin_administrators", ["reset_password_token"], :name => "index_admin_administrators_on_reset_password_token", :unique => true

  create_table "admin_attaches", :force => true do |t|
    t.string   "description"
    t.boolean  "slideshow",           :default => false
    t.string   "attach_file_name"
    t.string   "attach_content_type"
    t.integer  "attach_file_size"
    t.datetime "attach_updated_at"
    t.datetime "created_at",                             :null => false
    t.datetime "updated_at",                             :null => false
  end

  create_table "admin_categories", :force => true do |t|
    t.string   "name"
    t.string   "link"
    t.integer  "position"
    t.datetime "created_at", :null => false
    t.datetime "updated_at", :null => false
  end

  create_table "admin_clients", :force => true do |t|
    t.string   "name"
    t.string   "kind"
    t.string   "phone"
    t.datetime "created_at",                             :null => false
    t.datetime "updated_at",                             :null => false
    t.string   "email",                  :default => "", :null => false
    t.string   "encrypted_password",     :default => "", :null => false
    t.string   "reset_password_token"
    t.datetime "reset_password_sent_at"
    t.datetime "remember_created_at"
    t.integer  "sign_in_count",          :default => 0
    t.datetime "current_sign_in_at"
    t.datetime "last_sign_in_at"
    t.string   "current_sign_in_ip"
    t.string   "last_sign_in_ip"
    t.string   "rg"
    t.string   "cpf"
    t.date     "aniversary"
    t.boolean  "gender"
    t.boolean  "optin"
    t.integer  "route_id"
    t.integer  "yamasis_id"
    t.integer  "shopping_id"
    t.string   "ddd"
    t.string   "cnpj"
    t.string   "number"
    t.string   "mobile"
  end

  add_index "admin_clients", ["email"], :name => "index_admin_clients_on_email", :unique => true
  add_index "admin_clients", ["reset_password_token"], :name => "index_admin_clients_on_reset_password_token", :unique => true
  add_index "admin_clients", ["yamasis_id"], :name => "index_admin_clients_on_yamasis_id"

  create_table "admin_items", :force => true do |t|
    t.float    "quantity"
    t.string   "unity"
    t.float    "value"
    t.integer  "product_id"
    t.integer  "producer_id"
    t.integer  "quality_id"
    t.boolean  "visible",            :default => false
    t.datetime "created_at",                            :null => false
    t.datetime "updated_at",                            :null => false
    t.string   "image_file_name"
    t.string   "image_content_type"
    t.integer  "image_file_size"
    t.boolean  "highlight",          :default => false
    t.integer  "code"
  end

  add_index "admin_items", ["producer_id"], :name => "index_admin_items_on_producer_id"
  add_index "admin_items", ["product_id"], :name => "index_admin_items_on_product_id"
  add_index "admin_items", ["quality_id"], :name => "index_admin_items_on_quality_id"

  create_table "admin_order_items", :force => true do |t|
    t.integer  "item_id"
    t.integer  "order_id"
    t.integer  "quantity",    :default => 0
    t.datetime "created_at",                   :null => false
    t.datetime "updated_at",                   :null => false
    t.float    "total_value", :default => 0.0
  end

  add_index "admin_order_items", ["item_id"], :name => "index_admin_order_items_on_item_id"
  add_index "admin_order_items", ["order_id"], :name => "index_admin_order_items_on_order_id"

  create_table "admin_orders", :force => true do |t|
    t.integer  "client_id"
    t.datetime "delivery_date"
    t.integer  "status"
    t.datetime "created_at",                      :null => false
    t.datetime "updated_at",                      :null => false
    t.float    "delivery_value", :default => 0.0
    t.float    "total_value",    :default => 0.0
    t.float    "items_value",    :default => 0.0
    t.integer  "items_quantity", :default => 0
    t.datetime "confirmed_at"
    t.boolean  "delivery"
  end

  add_index "admin_orders", ["client_id"], :name => "index_admin_orders_on_client_id"
  add_index "admin_orders", ["delivery_date"], :name => "index_admin_orders_on_delivery_id"

  create_table "admin_pages", :force => true do |t|
    t.string   "title"
    t.text     "content"
    t.string   "link"
    t.integer  "attach_id"
    t.datetime "created_at", :null => false
    t.datetime "updated_at", :null => false
  end

  add_index "admin_pages", ["link"], :name => "index_admin_pages_on_link", :unique => true

  create_table "admin_producers", :force => true do |t|
    t.string   "name"
    t.string   "link"
    t.text     "description"
    t.datetime "created_at",  :null => false
    t.datetime "updated_at",  :null => false
    t.string   "website"
    t.string   "place"
  end

  create_table "admin_products", :force => true do |t|
    t.string   "code"
    t.string   "name"
    t.string   "link"
    t.text     "description"
    t.integer  "category_id"
    t.datetime "created_at",  :null => false
    t.datetime "updated_at",  :null => false
  end

  add_index "admin_products", ["category_id"], :name => "index_admin_products_on_category_id"

  create_table "admin_qualities", :force => true do |t|
    t.string   "name"
    t.datetime "created_at", :null => false
    t.datetime "updated_at", :null => false
  end

  create_table "admin_route_markers", :force => true do |t|
    t.string   "quarter"
    t.string   "city"
    t.string   "state"
    t.string   "name"
    t.text     "description"
    t.float    "latitude"
    t.float    "longitude"
    t.boolean  "gmaps"
    t.integer  "route_id"
    t.datetime "created_at",  :null => false
    t.datetime "updated_at",  :null => false
  end

  add_index "admin_route_markers", ["route_id"], :name => "index_admin_route_markers_on_route_id"

  create_table "admin_routes", :force => true do |t|
    t.string   "name"
    t.integer  "day"
    t.float    "value"
    t.datetime "created_at",  :null => false
    t.datetime "updated_at",  :null => false
    t.string   "description"
    t.boolean  "visible"
  end

  create_table "admin_shops", :force => true do |t|
    t.string   "name"
    t.text     "description"
    t.string   "address"
    t.string   "number"
    t.string   "complement"
    t.string   "quarter"
    t.string   "city"
    t.string   "state"
    t.string   "postcode"
    t.string   "phone"
    t.float    "latitude"
    t.float    "longitude"
    t.boolean  "gmaps"
    t.string   "kind"
    t.datetime "created_at",  :null => false
    t.datetime "updated_at",  :null => false
  end

  create_table "old_clients", :force => true do |t|
    t.string   "cliente_loja_cpf"
    t.string   "cliente_rg"
    t.string   "cliente_nome_pgto"
    t.string   "cliente_endereco_pgto"
    t.string   "cliente_cidade_pgto"
    t.string   "cliente_bairro_pgto"
    t.string   "cliente_cep_pgto"
    t.string   "cliente_email"
    t.string   "cliente_ddd"
    t.string   "cliente_telefone"
    t.string   "cliente_uf_pgto"
    t.string   "cliente_dia"
    t.string   "cliente_mes"
    t.string   "cliente_ano"
    t.string   "cliente_sexo"
    t.boolean  "cliente_informe"
    t.datetime "created_at",            :null => false
    t.datetime "updated_at",            :null => false
  end

  create_table "old_contents", :force => true do |t|
    t.string   "name"
    t.text     "description"
    t.string   "value"
    t.string   "image"
    t.string   "category"
    t.datetime "created_at",  :null => false
    t.datetime "updated_at",  :null => false
    t.string   "code"
    t.string   "old_value"
    t.string   "weight"
    t.string   "comment"
    t.boolean  "best"
    t.boolean  "promo"
    t.boolean  "quited"
    t.boolean  "highlight"
    t.boolean  "visible"
  end

end
