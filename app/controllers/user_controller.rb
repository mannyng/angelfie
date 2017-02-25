class UserController < ApplicationController
  before_action :authenticate_user!
  before_action :require_admin

  def index
   @users = User.all
   render json: @users
  end
  def show
    @user = User.find(params[:id])
 
    respond_to do |format|
     format.html
     format.json {render json: @user}
    end
  end

  def customer
    @user = User.find(params[:id])
    #@customer = Customer.find_by_user_id(params[:id])
    @customer = @user.customer
    #@customer = []
     #  @user.customer.each do |m|
    #    @customer << {customer: @customer , user: @user}
    #  end
    render json: @customer
  end

  def edit
    @user = User.find(params[:id])
  end

   def update 
     @user = User.find(params[:id])

     respond_to do |format|
      if @user.update(role_params)
        format.html { redirect_to settings_path, notice: 'User was successfully destroyed.' }
        format.json { render :show, status: :ok, location: @user }
      else
       format.html { render :edit }
       format.json { render json: @user.errors, status: :unprocessable_entity}  
      end
     end
  end

 private

   def role_params
     params.require(:user).permit(:role)
   end

end
