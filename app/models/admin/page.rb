class Admin::Page < ActiveRecord::Base
  attr_protected
	belongs_to :attach
end
