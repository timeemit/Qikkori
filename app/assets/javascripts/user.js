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
    "click input": "submit"
	},
	
	submit: function() {
		alert("hello");
	}
});