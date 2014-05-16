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
  def default_url_options(options={})
    { locale: I18n.locale }
  end
  def set_locale
    I18n.locale = params[:locale] || I18n.default_locale
  end
end
