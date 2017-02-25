class CustomersController < ApplicationController
  before_action :authenticate_user!
  before_action :set_customer, only: [:show, :edit, :update, :destroy]

  def index
   if current_user.role.include?("admin")
    @customers = Customer.all
     render json: @customers
   else
   @customers = current_user.customer
    render json: @customers
   end
  end

  def show
    #if @customer.address.present?

         respond_to do |format|
            format.html
            format.json { render json: @customer }
         end
    #  else
   # redirect_to new_customer_address_path(:customer_id => @customer.id), notice: 'This customer has no address in the file'
  # end
  end

  def new
    customer = Customer.new
    @customer.id = SecureRandom.random_number(999999999) # 9-digit integer
    @customer.user_id = current_user.id
    @customer.email = current_user.email
  end

  def edit
  end

  def create
    @customer = Customer.new(customer_params)
    @customer.id = SecureRandom.random_number(999999999) # 9-digit integer
    @customer.user_id = current_user.id
    @customer.email = current_user.email

    respond_to do |format|
      if @customer.save
        format.html #{ redirect_to new_user_accounts_path(current_user), notice: 'Okay, we\'re half way there!' }
        format.json { render :show, status: :created, location: @customer }
      else
        format.html# { render :new }
        format.json { render json: @customer.errors, status: :unprocessable_entity }
      end
    end
  end

  def update
    respond_to do |format|
      if @customer.update(customer_params)
        format.html { redirect_to settings_path, notice: 'Customer was successfully updated.' }
        format.json { render :show, status: :ok, location: @customer }
      else
        format.html #{ render :edit }
        format.json { render json: @customer.errors, status: :unprocessable_entity }
      end
    end
  end

  def destroy
    @customer.destroy
    respond_to do |format|
      format.html# { redirect_to adminview_administrator_path, notice: 'Customer was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_customer
      @customer = Customer.find(params[:id])
    end

   def customer_params
      params.require(:customer).permit(:title, :firstname, :lastname, :phone1, :email, :user_id)
    end
end
