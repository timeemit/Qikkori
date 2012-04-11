var User = Backbone.Model.extend({
	defaults: function(){
		return {
			username: '',
			email: '',
			password: '',
			errors: null
		};
	}
});

var NewUserForm = Backbone.View.extend({
	model: User,
	
	el: 'form#new_user',
	
	events: {
		"blur input": "update",
    "click input[type='submit']": "submit"
	},
	
	update: function() {
		user.set("username", $('#user_username').value);
	},
	
	submit: function() {
		alert(user.username);
	}
});