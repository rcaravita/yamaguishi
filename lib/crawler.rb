# encoding: utf-8

module Crawler
	require 'mechanize'

	class ShoppingNatural
	
		def initialize
			@agent = Mechanize.new
		end

	# BUSCA PRODUTOS NO SITE
	#categories = agent.get("http://www.shoppingnatural.com.br/subgrupo.php?lj_numero=0013&lj_nome=Yamaguishi&grupo=0001&lj_club_in=")
	#categories.links.each do |category|
	#	category.click.links_with(:class => "linkloja").each do |product|
	#		content = product.click
	#		description = content.search("div .tam_letra").to_s.encode("UTF-8")
	#		value = content.search("td~ td+ td .tam_letra").to_s.encode("UTF-8")
	#		image_src = content.search("td td td img").first.attributes['src']
	#		image_url = "http://www.shoppingnatural.com.br/#{content.search("td td td img").first.attributes['src']}"
	#		begin
	#			image = agent.get(image_url)
	#		rescue Exception => e
	#		  #page = e.force_parse
	#		else
	#			image.save_as "/Users/Diego/Sites/yamaguishi/tmp/old_content/#{image_src}"
	#		end
	#		OldContent.create(
	#			name: product.to_s,
	#			category: category.to_s,
	#			description: description,
	#			value: value,
	#			image: image_src.to_s
	#		)
	#	end
	#end

	## BUSCA PRODUTOS NO ADMIN
	#shoppingnatural = agent.get("http://www.shoppingnatural.com.br")
	## LOGIN
	#login = shoppingnatural.form_with(name: "loga_shopping")
	#login["shop_usuario"] = "yamaguishi"
	#login["shop_senha"] = "lj0013pkl04pst"
	#login.submit
	## LISTA CATEGORIAS DE PRODUTOS
	#produtos_page = agent.get("http://www.shoppingnatural.com.br/loja_pro_sub.php?grupo_numero=0001")
	## LOOP PARA CADA CATEGORIA
	#categorias = produtos_page.links()[9..15].each do |categoria|
	#	produtos_index = categoria.click
	#	# CALCULA O NÚMERO DE PÁGINAS D CATEGORIA E MONTA O LINK
	#	paginas = produtos_index.links_with(class: /movto_pg/).length - 1
	#	x = 0
	#	paginas.times do
	#		# ACESSA A LISTAGEM DE PRODUTOS PAGINADA
	#		produtos = agent.get("#{produtos_index.uri}&pagina=#{x}&ctrl=1")
	#		puts "#{categoria} - Página: #{x+1}/#{paginas}"
	#		# ACESSA CADA PRODUTO DESTA PÁGINA
	#		produtos.links_with(href: /produto_codigo/).each do |link|
	#			produto = link.click
	#			produto_form = produto.form_with("loja_pro_cad")
	#			
	#			# GRAVA OS DADOS DO PRODUTO
	#			
	#			OldContent.create(
	#				image: produto_form["produto_figura_ant"].to_s.encode("UTF-8"),
	#				code: produto_form["produto_codigo"].to_s.encode("UTF-8"),
	#				name: produto_form["produto_descricao"].to_s.encode("UTF-8"),
	#				value: produto_form["produto_preco"].to_s.encode("UTF-8"),
	#				old_value: produto_form["produto_preco_anterior"].to_s.encode("UTF-8"),
	#				weight: produto_form["produto_peso_calculo_kg"].to_s.encode("UTF-8"),
	#				comment: produto_form["produto_comentario"].to_s.encode("UTF-8"),
	#				description: produto_form["produto_explicacao"].to_s.encode("UTF-8"),
	#				best: produto_form.checkbox_with("produto_mais_vendido")['checked'] == "checked",
	#				promo: produto_form.checkbox_with("produto_promocao")['checked'] == "checked",
	#				quited: produto_form.checkbox_with("produto_esgotado")['checked'] == "checked",
	#				highlight: produto_form.checkbox_with("produto_lancamento")['checked'] == "checked",
	#				visible: !(produto_form.checkbox_with("produto_inativo")['checked'] == "checked"),
	#				category: categoria.to_s.encode("UTF-8")
	#			)
	#			
	#			# GRAVA A IMAGEM
	#			
	#			image_url = "http://www.shoppingnatural.com.br/#{produto_form["produto_figura_ant"]}"
	#			begin
	#				image = agent.get(image_url)
	#			rescue Exception => e
	#			  #page = e.force_parse
	#			else
	#				image.save_as "/Users/Diego/Sites/yamaguishi/tmp/old_content/#{produto_form["produto_figura_ant"]}"
	#			end
	#			
	#			puts "#{produto_form["produto_descricao"].to_s.encode("UTF-8")} saved."
	#		end
	#		
	#		x += 1
	#	end
	#end
	
		def getClients
		
			# BUSCA CLIENTES NO ADMIN
			shoppingnatural = @agent.get("http://www.shoppingnatural.com.br")
			# LOGIN
			login = shoppingnatural.form_with(name: "loga_shopping")
			login["shop_usuario"] = "yamaguishi"
			login["shop_senha"] = "lj0013pkl04pst"
			login.submit
			# LISTA CATEGORIAS DE PRODUTOS
			clients_index = @agent.get("http://www.shoppingnatural.com.br/loja_cli.php")
			# DEFINE O NÚMERO DE PÁGINAS MONTA O LINK
			paginas = 199
			x = 0
			paginas.times do
				# ACESSA A LISTAGEM DE PRODUTOS PAGINADA
				clientes = @agent.get("#{clients_index.uri}?pagina=#{x}")
				puts "CLIENTES - Página: #{x+1}/#{paginas}"
				# ACESSA CADA PRODUTO DESTA PÁGINA
				clientes.links_with(href: /cliente_loja_cpf/).each do |link|
					cliente = link.click
					cliente_form = cliente.form_with("loja_cli_cad")
		
					# GRAVA OS DADOS DO CLIENTE
		
					OldClient.create(
		
					cliente_loja_cpf:      cliente_form["cliente_loja_cpf"].to_s.encode("UTF-8"),
					cliente_rg:            cliente_form["cliente_rg"].to_s.encode("UTF-8"),
					cliente_nome_pgto:     cliente_form["cliente_nome_pgto"].to_s.encode("UTF-8"),
					cliente_endereco_pgto: cliente_form["cliente_endereco_pgto"].to_s.encode("UTF-8"),
					cliente_cidade_pgto:   cliente_form["cliente_cidade_pgto"].to_s.encode("UTF-8"),
					cliente_bairro_pgto:   cliente_form["cliente_bairro_pgto"].to_s.encode("UTF-8"),
					cliente_cep_pgto:      cliente_form["cliente_cep_pgto"].to_s.encode("UTF-8"),
					cliente_email:         cliente_form["cliente_email"].to_s.encode("UTF-8"),
					cliente_ddd:           cliente_form["cliente_ddd"].to_s.encode("UTF-8"),
					cliente_telefone:      cliente_form["cliente_telefone"].to_s.encode("UTF-8"),
					cliente_uf_pgto:       cliente_form["cliente_uf_pgto"].to_s.encode("UTF-8"),
					cliente_dia:           cliente_form["cliente_dia"].to_s.encode("UTF-8"),
					cliente_mes:           cliente_form["cliente_mes"].to_s.encode("UTF-8"),
					cliente_ano:           cliente_form["cliente_ano"].to_s.encode("UTF-8"),
					cliente_sexo:          cliente_form["cliente_sexo"].to_s.encode("UTF-8"),
					cliente_informe:       cliente_form.checkbox_with("cliente_informe")['checked'] == "checked"
					)
					puts "#{cliente_form["cliente_nome_pgto"].to_s.encode("UTF-8")} saved."
				end
				x += 1
			end
	
		end
	
	end

end




