#encoding: utf-8

class Admin::ClientChange < ActiveRecord::Base

	attr_protected :id

	belongs_to :client
end
