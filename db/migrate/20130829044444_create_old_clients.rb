class CreateOldClients < ActiveRecord::Migration
  def change
    create_table :old_clients do |t|

			t.string :cliente_loja_cpf
			t.string :cliente_rg
			t.string :cliente_nome_pgto
			t.string :cliente_endereco_pgto
			t.string :cliente_cidade_pgto
			t.string :cliente_bairro_pgto
			t.string :cliente_cep_pgto
			t.string :cliente_email
			t.string :cliente_ddd
			t.string :cliente_telefone

			t.string :cliente_uf_pgto
			t.string :cliente_dia
			t.string :cliente_mes
			t.string :cliente_ano
			t.string :cliente_sexo

			t.boolean :cliente_informe
			
      t.timestamps
    end
  end
end
