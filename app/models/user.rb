class User < ActiveRecord::Base
  attr_accessible :username, :email, :password, :email_confirmation, :password_confirmation
  
  attr_accessor :password, :password_salt, :password_hash

  validates :username, :length => {:in => 4..20}, :uniqueness => true
  validates :email, :confirmation => true
  validates :email_confirmation, :presence => true
  validates :password, :confirmation => true
  validates :password_confirmation, :presence => true

  # Railscasts Episode 250 
  # http://railscasts.com/episodes/250-authentication-from-scratch

  before_save :encrypt_password
  
  def self.authenticate(email, password)
    user = find_by_email(email)
    if user && user.password_hash == BCrypt::Engine.hash_secret(password, user.password_salt)
      user
    else
      nil
    end
  end
  
  def encrypt_password
    if password.present?
      self.password_salt = BCrypt::Engine.generate_salt
      self.password_hash = BCrypt::Engine.hash_secret(password, password_salt)
    end
  end
end
