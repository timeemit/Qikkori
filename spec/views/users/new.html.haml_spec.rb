require 'spec_helper'

describe "users/new" do
  before(:each) do
    assign(:user, stub_model(User,
      :username => "girl",
      :email => "liam@infobank.com",
      :password => "LiamisGre4t"
    ).as_new_record)
  end

  it "beckons the user to play" do
    render
    assert_select 'h2', 'How to Play'
  end


  it "renders new user form" do
    render
    assert_select "form", :action => users_path, :method => "post" do
      assert_select "input#user_username", :name => "user[username]"
      assert_select "input#user_email", :name => "user[email]"
      assert_select "input#user_password", :name => "user[password]"
    end
  end
end
