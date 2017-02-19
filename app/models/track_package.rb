class TrackPackage
  attr_reader :where_clause, :where_args, :order
 
  def initialize(track_package)
    track_package = track_package.downcase
    @where_clause = ""
    @where_args = {}
    build_for_tracking_search(track_package)
  end

  def build_for_tracking_search(track_package)
    @where_clause << case_insensitive_search(:tracking)
    @where_args[:tracking] = starts_with(track_package)  

    @order = "time_checked_in desc"
   end
   def starts_with(track_package)
    track_package
   end
   def case_insensitive_search(field_name)
     "lower(#{field_name}) like :#{field_name}"
   end

end
