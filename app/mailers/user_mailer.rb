class UserMailer < ActionMailer::Base
  default from: "Test_NUS@123.com"
  def contact(post, current)
    @post=post
    @current_url=current
    mail(to: @post.user.email , subject: "You have new comment for Post_ID: #{@post.id}")


  end

end
