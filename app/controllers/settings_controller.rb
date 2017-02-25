class SettingsController < ApplicationController
  before_action :authenticate_user!
  before_action :require_admin
  #layout 'admin_layout'


 def index
   @package_settings = Package.order(:tracking).page params[:page]
   @checkin_settings = CheckIn.order(:tracking).page params[:page]
   @customers = Customer.order(:user_id).page params[:page]
   
     respond_to do |format|
        format.html
        format.json {render json: @package_settings }
    end

 end

 def show
  end
 
  def new
   end
 def create
  end

end
