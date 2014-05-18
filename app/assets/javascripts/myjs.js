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
            required: "Please enter the password"
          },

          "user[useremail]": {
            required: "Please enter the email",
            email: "Your email address is invalid"
          },
          agree: {
            required: "Check agree to submit."
          },
          "user[password_confirmation]": {
            equalTo: "Please enter the same password"
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

