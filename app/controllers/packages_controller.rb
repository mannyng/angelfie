class PackagesController < ApplicationController
  before_action :authenticate_user!
  before_action :set_package, only: [:show, :edit, :update, :destroy]
  before_action :user_owns_package?
   

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
     @package = Package.new
     @package.tracking = SecureRandom.random_number(999999999999)
     #@package.customer = current_user.customer
     @package.date_opened = Time.now.to_date

     respond_to do |format|
      format.html # new.html.erb
      format.json { render json: @package }
    end

   end

   def create
    @customer = current_user.customer
    @package = Package.new(package_params)
    @package.tracking = SecureRandom.random_number(999999999999)
    @package.customer_id = @customer.id
    @package.date_opened = Time.now.to_date

      respond_to do |format|
       if @package.save!
        format.html #{redirect_to @package}
        format.json { head :no_content } #{render :show, status: :created, location: @package}
      else
       format.html #{render action: "new" }
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
    params.require(:package).permit(:description, :customer, :category_id, :tracking, :date_opened, :status, :rv_name, :rv_email, :rv_phone, :rv_street, :rv_extra_address, :rv_city, :rv_zip, :rv_state, :rv_country, :weight, :height, :width, :pk_name, :pk_street, :pk_extra_address, :pk_city, :pk_zip, :pk_state, :pk_country)
   end

   def set_package
    @package = Package.find(params[:id])
   end

    # User may only access their own account(s), unless they are admin
    def user_owns_package?
      if @package
        @package.customer_id == current_user.customer.id || current_user.role.include?("admin")
      end
    end
  

end
