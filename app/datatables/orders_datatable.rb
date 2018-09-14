# encoding: UTF-8

class OrdersDatatable
	
	delegate :params, :h, :l, :t, :link_to, :number_to_currency, :number_to_human, :check_box_tag, to: :@view

	def initialize(view)
		@view = view
	end

	def as_json(options = {})
		{
			draw: params[:draw].to_i,
			recordsTotal: params[:filters] ? Admin::Order.where(:status => filter).count : Admin::Order.count,
			recordsFiltered: orders.total_entries,
			data: order
		}
	end

private

	def order
		orders.map do |admin_order|
			[
				link_to(admin_order.id.to_s.rjust(6, "0"), admin_order),
				admin_order.client ? (admin_order.client.yamasis_id ? admin_order.client.yamasis_id.to_s.rjust(6, "0") : "") : "",
				admin_order.client ? link_to(admin_order.client.name, admin_order.client) : "",
				admin_order.delivery ? (admin_order.client ? admin_order.client.route.try(:name) : "") : "[retira]",
				number_to_currency(admin_order.total_value),
				admin_order.delivery_date.present? ? l(admin_order.delivery_date, format: :number) : "",
				#admin_order.status_to_s,
				[2,3].include?(admin_order.status) ? check_box_tag(:atendido, true, admin_order.status == 3, class: "toggleStatus", name: admin_order.id) : "",
				admin_order.confirmed_at ? l(admin_order.confirmed_at, format: :short) : "",
				admin_order.updated_at ? l(admin_order.updated_at, format: :short) : ""
			]
		end
	end

	def orders
		@orders ||= fetch_orders
	end

	def fetch_orders
		if params[:filters]
			orders = Admin::Order.includes(:client => [:route]).where(:status => filter).order("#{sort_column} #{sort_direction}")
		else
			orders = Admin::Order.includes(:client => [:route]).order("#{sort_column} #{sort_direction}")
		end
		orders = orders.page(page).per_page(per_page)
		unless params[:search][:value].empty?
			orders = orders.where("admin_orders.id LIKE :search OR admin_clients.yamasis_id LIKE :search OR admin_clients.name LIKE :search OR admin_routes.name LIKE :search", search: "%#{params[:search][:value]}%")
		end
		orders
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
		result = []
		params[:filters].each do |key, value|
			result << value.to_i
		end
		result
	end
	
end