require 'spec_helper'

describe "the layout" do

  context 'when looking at users' do
    before(:each) do
      assign(:user, stub_model(User,
        :username => "girl",
        :email => "liam@infobank.com",
        :password => "LiamisGre4t"
      ).as_new_record)
    end
    
    it 'has the title Qikkori' do
      render :template => 'users/new', :layout => 'layouts/application'
      assert_select 'title', /Qikkori/
    end
  
    it "includes the jQuery, Underscore, and Backbone javascript libraries" do
      render :template => 'users/new', :layout => 'layouts/application'
      scripts = css_select "script"
      assert !scripts.empty?
      assert_select "script"
      assert_select "[type=?]", "text/javascript"
      assert_select "[src*=?]", 'application.js'
      # The following asserts WILL NOT work in the test environment
      # because the asset pipeline groups all of these files into the Application.js file.
      # assert_select "[src=?]", "jquery.js"        
      # assert_select "[src*=?]", 'jquery_ujs.js'
      # assert_select "[src*=?]", 'jquery_ui.js'
      # assert_select "[src*=?]", 'underscore.js'
      # assert_select "[src*=?]", 'backbone.js'
    end
  end
end