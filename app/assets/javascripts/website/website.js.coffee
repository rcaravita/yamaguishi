# Place all the behaviors and hooks related to the matching controller here.
# All this logic will automatically be available in application.js.
# You can use CoffeeScript in this file: http://jashkenas.github.com/coffee-script/

#$('#client_addresses_attributes_0_postcode').val()

@find_address_by_postcode = (x) ->
	$.get "http://cep.republicavirtual.com.br/web_cep.php?cep=" + x + "&formato=xml", (data) ->
		switch $(data).find('resultado').text()
			when '1'
				$("#client_addresses_attributes_0_state").val($(data).find('uf').text())
				$("#client_addresses_attributes_0_city").val($(data).find('cidade').text())
				$("#client_addresses_attributes_0_quarter").val($(data).find('bairro').text())
				$("#client_addresses_attributes_0_address").val($(data).find('tipo_logradouro').text() + ' ' + $(data).find('logradouro').text())
			when '2'
				$("#client_addresses_attributes_0_state").val($(data).find('uf').text())
				$("#client_addresses_attributes_0_city").val($(data).find('cidade').text())
			else
				alert('CEP não encontrado.')
	return false;

$(document).ready ->

	$("input[name='admin_client[kind]']").change ->
		#alert $(this).attr('scope')
		$("input#document").attr('name', "admin_client[#{$(this).attr('scope')}]")

	$("input[name='client[kind]']").change ->
		#alert $(this).attr('scope')
		$("input#document").attr('name', "client[#{$(this).attr('scope')}]")

	$(".toggle").click ->
		$(this).next('.toggled').toggle()

	$(window).scroll ->
		if ($(window).scrollTop() > 345)
			$("#step_by_step").addClass("fixed")
		else
			$("#step_by_step").removeClass("fixed")

