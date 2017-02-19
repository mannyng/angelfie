class CheckInsController < ApplicationController
   before_action :set_checkin, only: [:show, :edit, :update, :destroy]

  def index
      #@check_ins = CheckIn.all.limit(10)
    if params[:tracks].present?
      @track_no = params[:tracks]
      track_package = TrackPackage.new(@track_no)
      @track = CheckIn.where(
      track_package.where_clause,
      track_package.where_args).
      order(track_package.order)
    else
      @track = []
    end

    respond_to do |format|
    format.json {render json: @track}
    end
   #render json: @check_ins
  end

   def show
     #@check_in = CheckIn.find(params[:package_id])
    @package = Package.find(@checkin.package_id)
    # render json: @package
    respond_to do |format|
     format.html #{render layout: 'admin_layout' } 
     format.json {render json: @package}
   end
  end

   def new
     @checkin = CheckIn.new
     @checkin.time_checked_in = Time.now
     @checkin.package_id = params[:package_id] 
    @package = Package.find(@checkin.package_id)

    respond_to do |format|
     format.html #{render layout: 'admin_layout' }
     format.json {render json: @checkin}
   end
    
   end

   def create
     @checkin = CheckIn.new(check_in_params)
     @checkin.time_checked_in = Time.now

     respond_to do |format|    
      if @checkin.save 
      logger.info "Checkin was just created"
      format.html { redirect_to @checkin, notice: 'Checkin was successful' }
      format.json { render :show, status: :created, location: @checkin }
     else
       format.html { redirect_to new_package_check_ins_path(@checkin.package_id), notice: 'For some reason we can\'t check you in at the moment' }
       format.json { render json: @checkin.errors, status: :unprocessable_entity }
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
  
    def set_checkin
      @checkin = CheckIn.find(params[:id])
    end
  
    def check_in_params
      params.require(:check_in).permit(:package_id, :notice, :location, :tracking)
    end

end
