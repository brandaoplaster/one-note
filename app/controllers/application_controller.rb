class ApplicationController < ActionController::Base
  before_action :authenticate_user!
  include CanCan::ControllerAdditions

  def after_sign_in_path_for(resource)
    stored_location_for(resource) || api_v1_dashboard_path
  end
end
