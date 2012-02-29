var User;
var Users;
var UserView;

// The User class

User = Backbone.Model.extend();

Users = Backbone.Collection.extend(
	{model: User}
);