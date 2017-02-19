class PackagesController < ApplicationController
  before_action :authenticate_user!
  before_action :set_package, only: [:show, :edit, :update, :destroy]
  before_filter :user_owns_package?
   

  def index
     #@packages = Package.all.limit(4)
     @user = current_user
     @packages = @user.packages
     respond_to do |format|
        format.html 
        format.json {render json: @packages }
    end
      #render json: @packages
  end

   def show
     #@package = Package.find(params[:id])
   
    # @checkin = CheckIn.find_by_package_id(@package.id)
    #@track = select * from CheckIn where 
    # render json: @checkin
   render json: @package
   end
  
   def new
    
   end

   def create

    @package = Package.create(package_params)
    @package.tracking = SecureRandom.random_number(999999999999)
    @package.customer_id = current_user.customer.id
    @package.date_opened = Time.now.to_date

   respond_to do |format|
    if @package.save
     format.html {redirect_to @package}
     format.json {render json: @package, status: :created, location: @package}
    else
      format.html {render action: "new" }
      format.json {render json: @package.errors, status: :unprocessable_entity}
    end
   end     

   end

   def edit

   end

  def update

  end

  def destroy

  end

 private

   def package_params
    params.require(:package).permit(:description, :category_id, :rv_name, :rv_email, :rv_phone, :rv_street, :rv_city, :rv_state, :rv_zip, :rv_country, :pk_name, :pk_street, :pk_city, :pk_state, :pk_zip, :pk_country)
   end

   def set_package
    @package = Package.find(params[:id])
   end

    # User may only access their own account(s), unless they are admin
    def user_owns_package?
      if @package
        @package.customer.user_id == current_user.id || current_user.role.include?("admin")
      end
    end
  

end
