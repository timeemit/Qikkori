source 'http://rubygems.org'

gem 'rails', '3.1.3'

gem 'mysql2'
gem 'haml'

# Gems used only for assets and not required
# in production environments by default.
group :assets do
  gem 'sass-rails',   '~> 3.1.5'
  gem 'coffee-rails', '~> 3.1.1'
  gem 'uglifier', '>= 1.0.3'
end

gem 'jquery-rails'

# As suggested by Railscasts Episode 250 
# http://railscasts.com/episodes/250-authentication-from-scratch
gem "bcrypt-ruby", :require => "bcrypt"

# Deploy with Capistrano
gem 'capistrano'

# To use debugger
# gem 'ruby-debug19', :require => 'ruby-debug'

group :test, :development do
	# Rspec doesn't need to be in production =)
  gem "rspec-rails", "~> 2.6"
  gem 'jasmine'
end

group :development do
	# Generators can be written in HAML =)
	gem 'haml-rails'
end

group :test do
  # Pretty printed test output
  gem 'turn', '0.8.2', :require => false
end
