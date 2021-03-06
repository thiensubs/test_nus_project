class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  # rescue_from CanCan::AccessDenied do |exception|
  #   redirect_to root_url, :alert => exception.message
  # end
  protect_from_forgery with: :exception
  before_action :set_locale

  # it will be set default locale for app.
  #  don't forget set it.
  def after_sign_in_path_for(resource)
    sign_in_url = url_for(:action => 'new', :controller => 'sessions', :only_path => false, :protocol => 'http')
    if request.referer == sign_in_url
      super
    else
      stored_location_for(resource) || request.referer || root_path
    end
  end
  def after_sign_up_path_for(resource)
    sign_in_url = url_for(:action => 'new', :controller => 'sessions', :only_path => false, :protocol => 'http')
    if request.referer == sign_in_url
      super
    else
      stored_location_for(resource) || request.referer || root_path
    end
  end
  def default_url_options(options={})
    { locale: I18n.locale }
  end
  def set_locale
    session[:locale] = params[:locale]
    I18n.locale = session[:locale] || I18n.default_locale
  end
  layout :layout_by_resource
  protected

  def layout_by_resource
    if devise_controller? && resource_name == :user &&  user_signed_in?
      "profile"
    else
      "application"
    end
  end

end
