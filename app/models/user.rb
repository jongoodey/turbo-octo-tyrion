class User < ActiveRecord::Base
  attr_accessible :email, :first_name, :last_name, :message
  validates :email, presence: true
  # validates :email, uniqueness: true
  validates :first_name, presence: true
  validates :last_name, presence: true
  validates :message, presence: true
end
