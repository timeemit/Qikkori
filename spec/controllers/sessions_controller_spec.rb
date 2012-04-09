require 'spec_helper'

describe SessionsController do  
  # This should return the minimal set of attributes required to create a valid
  # User. As you add validations to User, be sure to
  # update the return value of this method accordingly.
  def valid_attributes
    {
      :email => 'liam@infobank.com',
      :password => 'LiamisGre4t'
    }
  end
  
  # Fixture
  def valid_user
    {
      :username => 'girl',
      :email => 'liam@infobank.com',
      :email_confirmation => 'liam@infobank.com',
      :password => 'LiamisGre4t',
      :password_confirmation => 'LiamisGre4t'
    }
  end

  # This should return the minimal set of values that should be in the session
  # in order to pass any filters (e.g. authentication) defined in
  # UsersController. Be sure to keep this updated too.
  def valid_session
    {
      
    }
  end  
  
  describe "GET 'new'" do
    it "returns http success" do
      get 'new'
      response.should be_success
    end
  end

  describe "POST create" do
    describe "with an existing user" do
      it "creates a new Session" do
        User.create(valid_user)
        User.last.username.should eq 'girl'
        post :create, {:user => valid_attributes}, valid_session
        session.should eq(1)
      end

      it "redirects to the created user" do
        post :create, {:user => valid_attributes}, valid_session
        response.should eq 1# redirect_to(root_url)
      end
    end

    describe "with invalid params" do
      it "re-renders the 'new' template" do
        # Trigger the behavior that occurs when invalid params are submitted
        User.any_instance.stub(:save).and_return(false)
        post :create, {:user => {}}, valid_session
        response.should render_template("new")
      end
    end
  end
end