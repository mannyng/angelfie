class AdminController < ApplicationController

  before_action :authenticate_user!
  before_action :require_admin

  def index
    @packages = Package.all

   respond_to do |format|
     format.html
     format.json {render json: @packages}
   end   
  end

 
 private

end
