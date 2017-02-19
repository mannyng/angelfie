class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception
   respond_to :json,:html
   before_action :configure_permitted_parameters, if: :devise_controller?

  protected

  def json_request?
    request.format.json?
  end

   def configure_permitted_parameters
     devise_parameter_sanitizer.permit(:sign_up) { |u| u.permit(:role, :email, :password, :password_confirmation) }
     devise_parameter_sanitizer.permit(:account_update) { |u| u.permit(:role, :email, :password, :password_confirmation) }
   end

 def require_admin
  redirect_to root_path unless current_user.role.include?("admin")
 end

end
