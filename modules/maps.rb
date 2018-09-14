module Maps
	require "uri"
	require "net/http"

	def find_postcode(postcode)
		url = URI.parse("http://maps.googleapis.com/maps/api/geocode/json?address=#{postcode}&language=pt-BR&components=country:BR&sensor=false")
		req = Net::HTTP::Get.new(url.to_s)
		res = Net::HTTP.start(url.host, url.port) { |http| http.request(req) }
		json = JSON.parse(res.body)
		@lat = json["results"][0]["geometry"]["location"]["lat"]
		@lng = json["results"][0]["geometry"]["location"]["lng"]
	end
	
	def find_route(postcode)
		find_postcode(postcode)
		@route = Admin::RouteMarker.near([@lat, @lng], 999999999, :units => :km).first.route #if Admin::RouteMarker.near([@lat, @lng], 30, :units => :km).first
		#puts "Nome: #{@route.name}"
		#puts "Dia: #{I18n.translate(Date::DAYNAMES[@route.day])}"
		#puts "Valor: #{@route.value}"
		return @route
	end

end