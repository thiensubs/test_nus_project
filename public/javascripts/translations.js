var I18n = I18n || {};
I18n.translations = {"en":{"date":{"formats":{"default":"%d.%m.%Y","short":"%b %d","long":"%B %d, %Y"},"day_names":["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],"abbr_day_names":["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],"month_names":[null,"January","February","March","April","May","June","July","August","September","October","November","December"],"abbr_month_names":[null,"Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],"order":["year","month","day"]},"time":{"formats":{"default":"%d.%m.%Y %I:%M %p","short":"%d %b %H:%M","long":"%B %d, %Y %H:%M"},"am":"am","pm":"pm"},"support":{"array":{"words_connector":", ","two_words_connector":" and ","last_word_connector":", and "}},"number":{"format":{"separator":".","delimiter":",","precision":3,"significant":false,"strip_insignificant_zeros":false},"currency":{"format":{"format":"%u%n","unit":"$","separator":".","delimiter":",","precision":2,"significant":false,"strip_insignificant_zeros":false}},"percentage":{"format":{"delimiter":"","format":"%n%"}},"precision":{"format":{"delimiter":""}},"human":{"format":{"delimiter":"","precision":3,"significant":true,"strip_insignificant_zeros":true},"storage_units":{"format":"%n %u","units":{"byte":{"one":"Byte","other":"Bytes"},"kb":"KB","mb":"MB","gb":"GB","tb":"TB"}},"decimal_units":{"format":"%n %u","units":{"unit":"","thousand":"Thousand","million":"Million","billion":"Billion","trillion":"Trillion","quadrillion":"Quadrillion"}}}},"errors":{"format":"%{attribute} %{message}","messages":{"inclusion":"is not included in the list","exclusion":"is reserved","invalid":"is invalid","confirmation":"doesn't match %{attribute}","accepted":"must be accepted","empty":"can't be empty","blank":"can't be blank","present":"must be blank","too_long":"is too long (maximum is %{count} characters)","too_short":"is too short (minimum is %{count} characters)","wrong_length":"is the wrong length (should be %{count} characters)","not_a_number":"is not a number","not_an_integer":"must be an integer","greater_than":"must be greater than %{count}","greater_than_or_equal_to":"must be greater than or equal to %{count}","equal_to":"must be equal to %{count}","less_than":"must be less than %{count}","less_than_or_equal_to":"must be less than or equal to %{count}","other_than":"must be other than %{count}","odd":"must be odd","even":"must be even","taken":"has already been taken","in_between":"must be in between %{min} and %{max}","spoofed_media_type":"has an extension that does not match its contents","already_confirmed":"was already confirmed, please try signing in","confirmation_period_expired":"needs to be confirmed within %{period}, please request a new one","expired":"has expired, please request a new one","not_found":"not found","not_locked":"was not locked","not_saved":{"one":"1 error prohibited this %{resource} from being saved:","other":"%{count} errors prohibited this %{resource} from being saved:"}}},"activerecord":{"errors":{"messages":{"record_invalid":"Validation failed: %{errors}","restrict_dependent_destroy":{"one":"Cannot delete record because a dependent %{record} exists","many":"Cannot delete record because dependent %{record} exist"}}}},"datetime":{"distance_in_words":{"half_a_minute":"half a minute","less_than_x_seconds":{"one":"less than 1 second","other":"less than %{count} seconds"},"x_seconds":{"one":"1 second","other":"%{count} seconds"},"less_than_x_minutes":{"one":"less than a minute","other":"less than %{count} minutes"},"x_minutes":{"one":"1 minute","other":"%{count} minutes"},"about_x_hours":{"one":"about 1 hour","other":"about %{count} hours"},"x_days":{"one":"1 day","other":"%{count} days"},"about_x_months":{"one":"about 1 month","other":"about %{count} months"},"x_months":{"one":"1 month","other":"%{count} months"},"about_x_years":{"one":"about 1 year","other":"about %{count} years"},"over_x_years":{"one":"over 1 year","other":"over %{count} years"},"almost_x_years":{"one":"almost 1 year","other":"almost %{count} years"}},"prompts":{"year":"Year","month":"Month","day":"Day","hour":"Hour","minute":"Minute","second":"Seconds"}},"helpers":{"select":{"prompt":"Please select"},"submit":{"create":"Create %{model}","update":"Update %{model}","submit":"Save %{model}"},"page_entries_info":{"one_page":{"display_entries":{"zero":"No %{entry_name} found","one":"Displaying \u003cb\u003e1\u003c/b\u003e %{entry_name}","other":"Displaying \u003cb\u003eall %{count}\u003c/b\u003e %{entry_name}"}},"more_pages":{"display_entries":"Displaying %{entry_name} \u003cb\u003e%{first}\u0026nbsp;-\u0026nbsp;%{last}\u003c/b\u003e of \u003cb\u003e%{total}\u003c/b\u003e in total"}},"actions":"Actions","links":{"back":"Back","cancel":"Cancel","confirm":"Are you sure?","destroy":"Delete","new":"New","edit":"Edit"},"titles":{"edit":"Edit %{model}","save":"Save %{model}","new":"New %{model}","delete":"Delete %{model}","sign_up":"Sign up"}},"devise":{"confirmations":{"confirmed":"Your account was successfully confirmed.","send_instructions":"You will receive an email with instructions about how to confirm your account in a few minutes.","send_paranoid_instructions":"If your email address exists in our database, you will receive an email with instructions about how to confirm your account in a few minutes."},"failure":{"already_authenticated":"You are already signed in.","inactive":"Your account is not activated yet.","invalid":"Invalid email or password.","locked":"Your account is locked.","last_attempt":"You have one more attempt before your account will be locked.","not_found_in_database":"Invalid email or password.","timeout":"Your session expired. Please sign in again to continue.","unauthenticated":"You need to sign in or sign up before continuing.","unconfirmed":"You have to confirm your account before continuing."},"mailer":{"confirmation_instructions":{"subject":"Confirmation instructions"},"reset_password_instructions":{"subject":"Reset password instructions"},"unlock_instructions":{"subject":"Unlock Instructions"}},"omniauth_callbacks":{"failure":"Could not authenticate you from %{kind} because \"%{reason}\".","success":"Successfully authenticated from %{kind} account."},"passwords":{"no_token":"You can't access this page without coming from a password reset email. If you do come from a password reset email, please make sure you used the full URL provided.","send_instructions":"You will receive an email with instructions on how to reset your password in a few minutes.","send_paranoid_instructions":"If your email address exists in our database, you will receive a password recovery link at your email address in a few minutes.","updated":"Your password was changed successfully. You are now signed in.","updated_not_active":"Your password was changed successfully."},"registrations":{"destroyed":"Bye! Your account was successfully cancelled. We hope to see you again soon.","signed_up":"Welcome! You have signed up successfully.","signed_up_but_inactive":"You have signed up successfully. However, we could not sign you in because your account is not yet activated.","signed_up_but_locked":"You have signed up successfully. However, we could not sign you in because your account is locked.","signed_up_but_unconfirmed":"A message with a confirmation link has been sent to your email address. Please open the link to activate your account.","update_needs_confirmation":"You updated your account successfully, but we need to verify your new email address. Please check your email and click on the confirm link to finalize confirming your new email address.","updated":"You updated your account successfully."},"sessions":{"signed_in":"Signed in successfully.","signed_out":"Signed out successfully."},"unlocks":{"send_instructions":"You will receive an email with instructions about how to unlock your account in a few minutes.","send_paranoid_instructions":"If your account exists, you will receive an email with instructions about how to unlock it in a few minutes.","unlocked":"Your account has been unlocked successfully. Please sign in to continue."}},"views":{"pagination":{"first":"First","last":"Last","previous":"\u0026lt; Previous","next":"Next \u0026gt;","truncate":"..."}},"hello":"Hello world","sign_out":"Sign out","sign_in":"Sign in","sign_up":"Sign up","sign_msg":"Signed in as %{email}, Not you? ","Profile":"Profile","slogan":"Slogan here, just do it later","Edit":"Edit","Back":"Back","CreateComment":"Create Comment","NewPost":"New Post","Destroy":"Destroy","Show":"Show","Title":"Title","Num of Comment":"Num of Comment","Control":"Control","Created At":"Created At","Listingposts":"Listing posts","confirm":"Are you sure?","forget_pass":"Forgot your password?","didn_confirm":"Didn't receive confirmation instructions?","remember_me":"Remember me","password":"Password","password_confirm":"Password confirmation","change_pass":"Change my password","update":"Update","resend_confirm":"Resend confirmation instructions","help":"Help","edit_post":"Editing post","title_comment":"Title of Comment","content_comment":"Content of Comment","destroy_comment":"Destroy Comment","add_comment":"Add a comment","content":"Content","last_time_visited":"Last time you visited","comment":"Comment","subject_new_comment":"You have new comment for Post_ID: %{post_id}","You has a new comment for Post ID":"You has a new comment for Post ID:","Thanks for joining and have a great day":"Thanks for joining and have a great day!","New comment in":"New comment in","Welcome":"Xin chào ","You can confirm your account email through the link below":"You can confirm your account email through the link below"},"vi":{"errors":{"messages":{"expired":"đã hết hạn, vui lòng tạo yêu cầu mới","not_found":"không tìm thấy","already_confirmed":"đã được chứng thực rồi, mời bạn đăng nhập","not_locked":"đã bị khóa","not_saved":{"one":"1 lỗi làm %{resource} này không lưu lại được:","other":"%{count} lỗi làm %{resource} này không lưu lại được:"},"accepted":"phải được đồng ý","blank":"không thể để trắng","confirmation":"không khớp với xác nhận","empty":"không thể rỗng","equal_to":"phải bằng %{count}","even":"phải là số chẵn","exclusion":"đã được giành trước","greater_than":"phải lớn hơn %{count}","greater_than_or_equal_to":"phải lớn hơn hoặc bằng %{count}","inclusion":"không có trong danh sách","invalid":"không hợp lệ","less_than":"phải nhỏ hơn %{count}","less_than_or_equal_to":"phải nhỏ hơn hoặc bằng %{count}","not_a_number":"không phải là số","not_an_integer":"phải là một số nguyên","odd":"phải là số lẻ","taken":"đã có","too_long":"quá dài (tối đa %{count} ký tự)","too_short":"quá ngắn (tối thiểu %{count} ký tự)","wrong_length":"độ dài không đúng (phải là %{count} ký tự)"}},"devise":{"failure":{"already_authenticated":"Bạn đã đăng nhập rồi.","unauthenticated":"Bạn cần đăng nhập hoặc đăng ký để có thẻ tiếp tục.","unconfirmed":"Bạn cần chứng thực tài khoản này mới có thể sử dụng được.","not_found_in_database":"Không tìm thấy tài khoản","locked":"Tài khoản của bạn đã bị khóa.","invalid":"Sai email hoặc mật khẩu.","invalid_token":"Sai mã xác nhận.","timeout":"Phiên làm việc của bạn đã kết thúc, bạn cần đăng nhập lại để có thể tiếp tục.","inactive":"Tài khoản của bạn chưa được kích hoạt."},"sessions":{"signed_in":"Đăng nhập thành công.","signed_out":"Thoát tài khoản thành công."},"passwords":{"send_instructions":"Bạn sẽ nhận được email hướng dẫn đặt lại mật khẩu trong một vài phút nữa.","updated":"Đổi mật khẩu thành công! Bạn đã được tự động đăng nhập.","updated_not_active":"Mật khẩu đã được đổi thành công.","send_paranoid_instructions":"Nếu email của bạn có trong hệ thống, bạn sẽ nhận được đường dẫn để khôi phục mật khẩu qua email"},"confirmations":{"send_instructions":"Bạn sẽ nhận được email hướng dẫn xác thực tài khoản trong một vài phút nữa.","send_paranoid_instructions":"Nếu email của bạn có trong hệ thống, bạn sẽ nhận được email hướng dẫn xác thực tài khoản trong một vài phút nữa.","confirmed":"Xác thưc tài khoản thành công! Bạn đã được tự động đăng nhập."},"registrations":{"signed_up":"Xin chào mừng! Bạn đã đăng ký thành công.","signed_up_but_unconfirmed":"Một email chứa đường dẫn để xác thực tài khoản đã được gửi cho bạn. Bạn vui lòng kiểm tra email.","signed_up_but_inactive":"Bạn đã đăng ký thành công. Tuy nhiên tài khoản của bạn chưa được kích hoạt nên chưa thể đăng nhập được.","signed_up_but_locked":"Bạn đã đăng ký thành công. Tuy nhiên tài khoản của bạn đã bị khóa nên không thể đăng nhập được.","updated":"Bạn đã cập nhật thông tin tài khoản thành công.","update_needs_confirmation":"Thông tin tài khoản đã được cập nhật thành công, nhưng bạn cần xác thực địa chỉ email mới. Bạn vui lòng kiểm tra email và nhấn vào đường dẫn xác thực tài khoản để hoàn tất việc thay đổi địa chỉ email.","destroyed":"Xin chào tạm biệt! Tài khoản của bạn đã được xóa, rất mong được gặp lại bạn sớm!"},"unlocks":{"send_instructions":"Bạn sẽ nhận được email hướng dẫn bỏ khóa tài khoản trong một vài phút nữa.","unlocked":"Tài khoản của bạn đã được bỏ khóa thành công. Mời bạn đăng nhập","send_paranoid_instructions":"Nếu tài khoản của bạn tồn tại, bạn sẽ nhận được email hướng dẫn bỏ khóa tài khoản trong một vài phút nữa."},"omniauth_callbacks":{"success":"Đăng nhập thành công bằng tài khỏan %{kind}.","failure":"Không thể đăng nhập qua tài khoản %{kind} vì \"%{reason}\"."},"mailer":{"confirmation_instructions":{"subject":"Hướng dẫn xác thực"},"reset_password_instructions":{"subject":"Hướng dẫn đặt lại mật khẩu"},"unlock_instructions":{"subject":"Hướng dẫn bỏ khóa tài khoản"}}},"helpers":{"actions":"Actions","links":{"back":"Quay lại","cancel":"Hủy","confirm":"Bạn có chắc muốn xóa?","destroy":"Xóa","new":"Tạo mới","edit":"Chỉnh sửa"},"titles":{"edit":"Chỉnh sửa %{model}","save":"Lưu %{model}","new":"Taọ mới %{model}","delete":"Xóa %{model}","sign_up":"Đăng ký"}},"hello":"Xin chào","sign_out":"Thoát","sign_in":"Đăng nhập","sign_up":"Đăng ký","sign_msg":"Tài khoản: %{email}, Không phải bạn? ","Profile":"Hồ sơ","slogan":"Châm ngôn để đời đặt ở đây...","Edit":"Chỉnh sửa","Back":"Quay lại","CreateComment":"Tạo bình luận","NewPost":"Tạo mới Bài Viết","Destroy":"Xóa","Show":"Xem bài viết","Title":"Tiêu đề","Num of Comment":"Số luợng bình luận","Control":"Điều khiển","Created At":"Tạo vào lúc","Listingposts":"Danh sách các bài viết","forget_pass":"Quên mật khẩu?","didn_confirm":"Không nhận được xác nhận?","remember_me":"Ghi nhớ đăng nhập","password":"Mật khẩu","password_confirm":"Xác nhận Mật khẩu","change_pass":"Đổi mật khẩu","update":"Cập nhật","resend_confirm":"Gởi xác nhận kích hoạt","help":"Giúp đỡ","edit_post":"Chỉnh sửa bài viết","date":{"formats":{"default":"%d.%m.%Y"}},"time":{"formats":{"default":"%d.%m.%Y %I:%M %p"}},"title_comment":"Tiêu đề Bình luận","content_comment":"Nội dung Bình luận","destroy_comment":"Xóa Bình luận","add_comment":"Thêm Bình luận","last_time_visited":"Lần cuối bạn ghé","content":"Nội dung","comment":"Bình luận","subject_new_comment":"Bạn nhận được bình luận mới cho bài viết Mã số: %{post_id}","You has a new comment for Post ID":"Bạn nhận được bình luận mới cho bài viết số:","Thanks for joining and have a great day":"Ngày làm việc vui vẻ!","New comment in":"Xem bình luận tại ","Welcome":"Welcome","You can confirm your account email through the link below":"Đường dẫn kích hoạt tài khoản của bạn ở bên dưới: ","views":{"pagination":{"previous":"\u0026lt; Trước","next":"Sau \u0026gt;","truncate":"...","last":"Cuối","first":"Đầu"}}}};