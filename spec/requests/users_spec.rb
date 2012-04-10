# require 'capybara/rspec' # https://github.com/jnicklas/capybara
require 'spec_helper'

describe "Users" do
  describe "GET /users" do
    it "should have an OK response" do
      get users_path
      response.status.should be(200)
    end
  end
end
