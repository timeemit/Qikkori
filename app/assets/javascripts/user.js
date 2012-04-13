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
		if (attrs.email != attrs.email_confirmation) {
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
    "click input[type='submit']": "submit"
	},
	
	update: function() {
		// Get the values for the model.
		set_username = $('#user_username').val();
		set_email = $('#user_email').val();
		set_email_confirmation = $('#user_email_confirmation').val();
		set_password = $('#user_password').val();
		set_password_confirmation = $('#user_password_confirmation').val();

		// Set the values for the model.
		this.model.set("username", set_username);
		this.model.set({email: set_email, email_confirmation: set_email_confirmation})
		// this.model.set("email", email);
		// this.model.set("email_confirmation", email_confirmation);
		this.model.set({password: set_password, password_confirmation: set_password_confirmation})
		// this.model.set("password", password);
		// this.model.set("password_confirmation", password_confirmation);		
	},
	
	submit: function() {
		this.update();
		alert(JSON.stringify(this.model));
		// this.model.save( 
		// 	{}, // The first paramater is to save any attributes before saving.
		// 	{
		// 		success: function(model, response){
		// 			alert("Success!");
		// 		},
		// 		error: function(model, response) {
		// 			alert("Error!");
		// 		} 
		// 	}
		// );
	},
	
	write_errors: function(model, response) {
		// This should create an error_explanation div only if there isn't one already.
		if ($('#error_explanation').size() == 0){
			$('#new_user').prepend('<div id="error_explanation"></div>');
			$('#error_explanation').prepend('<h2>An error has occurred.</h2>');
		}
		alert(model);
	}
});