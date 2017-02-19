class SettingsController < ApplicationController
  before_action :authenticate_user!
  before_action :require_admin
  #layout 'admin_layout'



 def index
   @page = (params[:page] || 0).to_i
   @package_settings = Package.all.limit(4)
   @checkin_settings = CheckIn.all.limit(4)
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
