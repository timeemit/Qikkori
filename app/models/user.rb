class User < ActiveRecord::Base

  validates :username, :length => {:in => 4..20}
  validates :email, :confirmation => true
  validates :email_confirmation, :presence => true
  validates :password, :confirmation => true
  validates :password_confirmation, :presence => true

end
