require 'spec_helper'

describe "layout" do

  it 'has the title Qikkori' do
    assign(:user, stub_model(User,
      :username => "girl",
      :email => "liam@infobank.com",
      :password => "LiamisGre4t"
    ).as_new_record)
    render :template => 'users/new', :layout => 'layouts/application'
    assert_select 'title', /Qikkori/
  end
  
  it "includes the jQuery, Underscore, and Backbone javascript libraries" do
    assign(:user, stub_model(User,
      :username => "girl",
      :email => "liam@infobank.com",
      :password => "LiamisGre4t"
    ).as_new_record)
    render :template => 'users/new', :layout => 'layouts/application'
    assert_select "[src=?]", "/assets/jquery.js?body=1"
    assert_select "[src*=?]", 'jquery_ujs.js'
    assert_select "[src*=?]", 'jquery_ui.js'
    assert_select "[src*=?]", 'underscore.js'
    assert_select "[src*=?]", 'backbone.js'
  end

end