module WebsiteHelper
	def link_to_product(item)
		return product_path(link: item.product.link)
	end
	
	def link_to_category(category)
		return category_path(link: category.link)
	end
end
