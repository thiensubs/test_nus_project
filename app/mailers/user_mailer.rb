class UserMailer < ActionMailer::Base
  default from: "Test_NUS@123.com"
  def contact(post, current)
    @post=post
    @current_url=current
    mail(to: @post.user.email , subject: t("subject_new_comment", :post_id => @post.id))
  end

  # def confirmation_instructions(user, token, opts={})
  #   @user = user
  #   @resource=user
  #   @email=user.email
  #   @token=user.confirmation_token
  #   mail(to: @user.email, subject: t("devise.mailer.confirmation_instructions.subject"))
  # end

  # def reset_password_instructions(user)
  #   @user = user
  #   mail to: @user.email
  # end

  # private
  #  def set_locale(user)
  #    I18n.locale = user.locale || I18n.default_locale
  #  end
end
