#COPIA CLIENTES DA BASE OLD PARA A BASE REAL
#-> PRECISA DESABILITAR A PROPRIEDADE 'DEVISE' DO MODEL CLIENTS

OldClient.all.each do |client|
	aniversary = nil
	begin
		aniversary = DateTime.parse("#{client.cliente_ano}-#{client.cliente_mes}-01")
	rescue
		aniversary = nil
	end
	newclient = Admin::Client.new(
		name: client.cliente_nome_pgto,
		kind: 0,
		cpf: client.cliente_loja_cpf,
		rg: client.cliente_rg,
		phone: "(#{client.cliente_ddd}) #{client.cliente_telefone}",
		email: client.cliente_email,
		aniversary: aniversary,
		gender: client.cliente_sexo == "M" ? 1 : 0,
		optin: client.cliente_informe
	)
	newclient.addresses.build(
		address: client.cliente_endereco_pgto,
		quarter: client.cliente_bairro_pgto,
		city: client.cliente_cidade_pgto,
		state: client.cliente_uf_pgto,
		postcode: "#{client.cliente_cep_pgto.to_s.gsub('-','').gsub(' ','')[0..4]}-#{client.cliente_cep_pgto.to_s.gsub('-','').gsub(' ','')[5..7]}"
	)
	#newclient.valid?
	#puts newclient.errors.inspect
	begin
		if newclient.save
			#puts "Client created: #{newclient.id} - #{newclient.name}"
		else
			puts newclient.errors.inspect
		end
	rescue => error
		puts "Error: #{newclient.name} (#{error})"
	end
end