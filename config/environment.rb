# Load the rails application
require File.expand_path('../application', __FILE__)

# Initialize the rails application
Qikkori::Application.initialize!

# As commanded by Backbone.js
ActiveRecord::Base.include_root_in_json = false