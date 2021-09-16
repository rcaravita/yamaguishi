#encoding: utf-8

class Admin::ClientChange < ActiveRecord::Base

	belongs_to :client
end
