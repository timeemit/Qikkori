require 'spec_helper'

describe User do
  user = User.new(
    :username => 'girl', 
    :email => 'liam@infobank.com',
    :email_confirmation => 'liam@infobank.com',
    :password => 'LiamisGre4t',
    :password_confirmation => 'LiamisGre4t'  
  )

  describe "validations" do
    it "should make sure the username isn't too short or long" do
      user.stub(:username) {'hey'}
      user.save.should_not be_true
      user.stub(:username) {'012345678901234567890'}
      user.save.should_not be_true
    end
    
    it "should confirm password upon creation" do
      user.stub(:password_confirmation) {'LiamIsTerrible'}
      user.save.should_not be_true
    end

    it "should validate that password is not nil" do
      user.stub(:password_confirmation) {nil}
      user.save.should_not be_true
    end

    it "should confirm email upon creation" do
      user.stub(:email_confirmation) {'LiamIsTerrible'}
      user.save.should_not be_true
    end

    it "should validate that email is not nil" do
      user.stub(:email_confirmation) {nil}
      user.save.should_not be_true
    end

    it "should let the gal signup" do
      user.save.should be_true
    end
  end

end
