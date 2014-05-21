class UserMailer < ActionMailer::Base
  default from: "Test_NUS@123.com"
  def contact(post, current)
    @post=post
    @current_url=current
    mail(
      to: @post.user.email,
      subject: t("subject_new_comment", :post_id => @post.id)
      )
  end
end
