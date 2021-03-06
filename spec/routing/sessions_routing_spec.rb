require "spec_helper"

describe SessionsController do
  describe "routing" do
    it "routes to #new" do
      get("/sessions/new").should route_to("sessions#new")
      get(log_in_path).should route_to("sessions#new")
    end

    it "routes to #create" do
      post("/sessions").should route_to("sessions#create")
    end

    it "routes to #destroy" do
      delete("/sessions/1").should route_to("sessions#destroy", :id => '1')
      delete(log_out_path(:id => 1)).should route_to("sessions#destroy")
    end
  end
end