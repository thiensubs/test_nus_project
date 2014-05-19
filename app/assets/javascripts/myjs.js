jQuery.ajaxSetup({
  'beforeSend': function(xhr) {xhr.setRequestHeader("Accept", "text/javascript")}
})

jQuery.fn.submitWithAjax = function() {
  this.submit(function() {
    $.post(this.action, $(this).serialize(), null, "script");
    return false;
  })
  return this;
};

$(document).ready(function() {
  $("#new_comment").submitWithAjax();
   $("#new_user").validate({
      rules: {
            "user[password_confirmation]": {
            equalTo: "#user_password"

          },
          "user[email]": {
            required: true,
            email: true
          },
          "user[password]":
          {
            required: true
          }

        },
        messages: {
          "user[password]": {
            required: I18n.t("enter_password")
          },

          "user[email]": {
            required: I18n.t("enter_email"),
            email: I18n.t("email_addres")

          },
          agree: {
            required: I18n.t("check_agree.")
          },
          "user[password_confirmation]": {
            equalTo: I18n.t("same_password")
          }
        },
          // errorPlacement: function(error, element) {
          //               error.appendTo("div#errors");
          //           },
          // errorPlacement: function(error, element) {
          //   if ( element.is(":radio") )
          //     error.appendTo( element.parent().next().next() );
          //   else if ( element.is(":checkbox") )
          //     error.appendTo ( $("#here"));
          //   else
          //     error.appendTo( element.parent());
          // },
          onfocusout: false,

          highlight: function (element) {
            $(element).closest('.form-group').removeClass('has-success').addClass('has-error');
          },
          unhighlight: function (element) {
            $(element).closest('.form-group').removeClass('has-error').addClass('has-success');
          }
        });
})

