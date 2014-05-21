jQuery.ajaxSetup({
  'beforeSend': function(xhr) {xhr.setRequestHeader("Accept", "text/javascript")}
});

jQuery.fn.submitWithAjax = function() {
  this.submit(function() {
   var $form = $("#new_comment");
   if ($form.valid())
    $.post(this.action, $(this).serialize(), null, "script");
  return false;
})
  return this;
};
$( document ).ajaxComplete(function( event, xhr, settings ) {
  if (xhr.status == 401)
    alert(xhr.responseText);
});
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
        required: true,
        minlength: 6
      }
    },
    messages: {
      "user[password]": {
        required: I18n.t("enter_password"),
        minlength: I18n.t("minlength")
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
    onfocusout: false,
    highlight: function (element) {
      $(element).closest('.form-group').removeClass('has-success').addClass('has-error');
    },
    unhighlight: function (element) {
      $(element).closest('.form-group').removeClass('has-error').addClass('has-success');
    }
  });
  $("#new_post").validate({
   rules: {
    "post[title]": {
      required: true
    },
    "post[content]":
    {
      required: true
    }
  },
  messages: {
    "post[title]": {
      required: I18n.t("enter_the_text")
    },
    "post[content]": {
      required: I18n.t("enter_the_text")
    }
  },
  onfocusout: false,
  highlight: function (element) {
    $(element).closest('.form-group').removeClass('has-success').addClass('has-error');
  },
  unhighlight: function (element) {
    $(element).closest('.form-group').removeClass('has-error').addClass('has-success');
  }
});
  $("#new_comment").validate({
   rules: {
    "comment[title_comment]": {
      required: true
    },
    "comment[content_comment]":
    {
      required: true
    }
  },

  messages: {
    "comment[title_comment]": {
      required: I18n.t("enter_the_text")
    },
    "comment[content_comment]": {
      required: I18n.t("enter_the_text")
    }
  },
  onfocusout: false,
  highlight: function (element) {
    $(element).closest('.form-group').removeClass('has-success').addClass('has-error');
  },
  unhighlight: function (element) {
    $(element).closest('.form-group').removeClass('has-error').addClass('has-success');
  }
});

});

