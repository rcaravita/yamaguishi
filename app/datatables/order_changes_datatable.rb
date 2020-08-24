# encoding: UTF-8

class OrderChangesDatatable

	delegate :params, :h, :l, :t, :link_to, :number_to_currency, :number_to_human, :check_box_tag, to: :@view

	def initialize(view)
		@view = view
	end

	def as_json(options = {})
		{
			draw: params[:draw].to_i,
			recordsTotal: params[:filters] ? Admin::OrderChange.where(:status => filter).count : Admin::OrderChange.count,
			recordsFiltered: changes.total_entries,
			data: change
		}
	end

private

	def change
		changes.map do |admin_change|
			[
				admin_change.id,
				link_to(admin_change.id.to_s.rjust(6, "0"), admin_change),
				admin_change.order.client ? link_to(admin_change.order.client.name, admin_change.order.client) : "",
				admin_change.status_to_s,
				admin_change.order.status_to_s,
				admin_change.administrator.name,
				l(admin_change.created_at, format: :full)
			]
		end
	end

	def changes
		@changes ||= fetch_changes
	end

	def fetch_changes
		changes = Admin::OrderChange.includes(:order => [:client]).order("#{sort_column} #{sort_direction}")
		changes = changes.page(page).per_page(per_page)
		unless params[:search][:value].empty?
			changes = changes.where("admin_order_changes.id LIKE :search OR admin_clients.name LIKE :search OR admin_orders.id LIKE :search", search: "%#{params[:search][:value]}%")
		end
		changes
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
		params[:order]["0"][:dir] == "asc" ? "asc" : "desc"
	end

	def filter
		result = []
		params[:filters].each do |key, value|
			result << value.to_i
		end
		result
	end

end
