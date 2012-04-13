var User = Backbone.Model.extend({
	defaults: function(){
		return {
			username: '',
			email: '',
			email_confirmation: '',
			password: '',
			password_confirmation: '',
		};
	},
	
	validate: function(attrs){
		if (attrs.email != attrs.email_confirmation){
			return "Emails did not match."
		}
		else if (attrs.password != attrs.password_confirmation){
			return "Passwords did not match."
		}
	}
});

var new_user = new User;

var NewUserForm = Backbone.View.extend({
	model: new_user,
	
	el: 'form#new_user',
	
	events: {
		// "blur input": "update",
    "click input[type='submit']": "submit"
		"error": "write_errors"
	},
	
	update: function() {
		username = $('#user_username').val();
		email = $('#user_email').val();
		email_confirmation = $('#user_email_confirmation').val();
		password = $('#user_password').val();
		password_confirmation = $('#user_password_confirmation').val();

		this.model.set("username", $('#user_username').val());
		
		this.model.set("email", email);
		this.model.set("email_confirmation", email_confirmation);

		this.model.set("password", password);
		this.model.set("password_confirmation", password_confirmation);		
	},
	
	submit: function() {
		this.update();
		this.model.save();
	}
	
	write_errors: function() {
		$('#new_user').prepend("help!");
	}
});