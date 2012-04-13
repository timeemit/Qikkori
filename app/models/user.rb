class User < ActiveRecord::Base
  attr_accessible :username, :email, :email_confirmation, :password, :password_confirmation
  
  attr_accessor :password, :password_confirmation

  validates :username, :length => {:in => 4..20}, :uniqueness => true
  validates :email, :presence => true, :confirmation => true
  validates :email_confirmation, :presence => true
  validates :password, :presence => true, :confirmation => true
  validates :password_confirmation, :presence => true

  before_save :encrypt_password
  
  def self.authenticate(email, password)
    user = find_by_email(email)
    if user
      db_password = BCrypt::Password.new(user.password_hash)
      (db_password == password) ? user : nil
    else
      nil
    end
  end
  
  def encrypt_password
    if password.present?
      self.password_hash = BCrypt::Password.create(password)
    end
  end
end