module ApplicationHelper
	def current_class?(test_path)
		return 'active' if request.path == test_path
		''
	end

	# Outputs the body classes and adds one that
	# is automatically generated
	# ex: 'admin-users-index-view'
	def body_css_class
	  @body_css_classes ||= []
	  view_css_class = [controller_path.split('/'), action_name, 'view'].flatten.join('-')

	  @body_css_classes.unshift(view_css_class).join(' ')
	end

	def action?(*action)
		action.include?(params[:action])
	end
end
