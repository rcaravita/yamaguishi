# encoding: UTF-8

class ClientsDatatable

	delegate :params, :h, :l, :t, :link_to, :number_to_currency, :number_to_human, :check_box_tag, to: :@view

	def initialize(view)
		@view = view
	end

	def as_json(options = {})
		{
			draw: params[:draw].to_i,
			recordsTotal: params[:filters] ? Admin::Client.where(:yamasis_id => filter).count : Admin::Client.count,
			recordsFiltered: clients.total_entries,
			data: client
		}
	end

private

	def client
		clients.map do |admin_client|
			[
				admin_client.yamasis_id.to_s.rjust(6, "0"),
				link_to(admin_client.name, admin_client),
				admin_client.route ? admin_client.route.name : ""
			]
		end
	end

	def clients
		@clients ||= fetch_clients
	end

	def fetch_clients
		if params[:filters]
			clients = Admin::Client.includes(:route).where(:yamasis_id => filter).order("#{sort_column} #{sort_direction}")
		else
			clients = Admin::Client.includes(:route).order("#{sort_column} #{sort_direction}")
		end
		clients = clients.page(page).per_page(per_page)
		unless params[:search][:value].empty?
			clients = clients.where("admin_clients.id LIKE :search OR admin_clients.name LIKE :search OR admin_routes.name LIKE :search OR admin_clients.email LIKE :search", search: "%#{params[:search][:value]}%")
		end
		clients
	end

	def page
		params[:start].to_i/per_page + 1
	end

	def per_page
		params[:length].to_i > 0 ? params[:length].to_i : 10
	end

	def sort_column
		params[:columns][params[:order]["0"][:column]][:name]
	end

	def sort_direction
		params[:order]["0"][:dir] == "desc" ? "desc" : "asc"
	end

	def filter
		result = ""
		params[:filters].each do |key, value|
			result = nil
		end
		result
	end

end
