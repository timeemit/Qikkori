var User = Backbone.Model.extend({
	defaults: function() {
		return {
			username: '',
			email: '',
			email_confirmation: '',
			password: '',
			password_confirmation: ''
		};
	},
	
	validate: function(attrs){
		if (attrs.username == '') {
			return "Username can't be blank.";
		}
		else if (attrs.email == '') {
			return "Email can't be blank.";
		}
		else if (attrs.password == '') { 
			return "Password can't be blank.";
		}
		else if (attrs.email != attrs.email_confirmation) {
			return "Emails did not match.";
		}
		else if (attrs.password != attrs.password_confirmation) {
			return "Passwords did not match.";
		}
	},
	
	url: '/users.json'
});

var new_user = new User;

var NewUserForm = Backbone.View.extend({
	model: new_user,
	
	el: 'form#new_user',
	
	events: {
		// "blur input": "write_errors",
		// "error": "write_errors",
    "click input[type='submit']": "submit"
	},
	
	readAndSave: function() {
		// Get the values for the model.
		set_username = $('#user_username').val();
		set_email = $('#user_email').val();
		set_email_confirmation = $('#user_email_confirmation').val();
		set_password = $('#user_password').val();
		set_password_confirmation = $('#user_password_confirmation').val();

		// Set the values for the model.
		this.model.save({
			username: set_username,
			email: set_email, 
			email_confirmation: set_email_confirmation,
			password: set_password, 
			password_confirmation: set_password_confirmation
		});
	},
	
	submit: function() {
		this.readAndSave();
		alert(JSON.stringify(this.model)); // For debugging...
	}//,
	
	// error_template: _.template('<li><%= number %>. <%= title %></li>),
	
	// write_errors: function(model, response) {
	// 	alert(model);
	// }
});

new_user.on("error", function(model, error) {
	// This should create an error_explanation div only if there isn't one already.
	if ($('#error_explanation').size() == 0) {
		$('#new_user').prepend('<div id="error_explanation"></div>');
		$('#error_explanation').prepend('<h2>An error has occurred.</h2><div id="error"></div');
	}
  // alert(model.get("username") + " " + JSON.stringify(error));
	$('#error').text(error);
});