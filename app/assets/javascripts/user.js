var User = Backbone.Model.extend({
	defaults: function(){
		return {
			username: '',
			email: '',
			email_confirmation: '',
			password: '',
			password_confirmation: '',
			errors: null
		};
	}
});

var new_user = new User;

var NewUserForm = Backbone.View.extend({
	model: new_user,
	
	el: 'form#new_user',
	
	events: {
		"blur input": "update",
    "click input[type='submit']": "submit"
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
		alert(JSON.stringify(this.model));
	}
});