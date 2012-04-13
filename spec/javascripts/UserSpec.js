describe("User Model", function() {
	it('doesn\'t need anything to work', function(){
		expect(1+1).toEqual(2);
	});
	
	
	it("initializes the username, email, and password", function() {
		var user = new User;
		expect(user.get('username')).toEqual('');
		expect(user.get('email')).toEqual('');
		expect(user.get('password')).toEqual('');
		expect(user.get('errors')).toEqual(null);
	});
	
	it("returns an error if the emails do not match", function() {
		var user = new User;
		user.set('email', "somewhere@here.com");
		expect(user.get('email')).toNotEqual("somewhere@here.com");
		user.set('email_confirmation', "somewhereElse@There.com");
		expect(user.get('email_confirmation')).toNotEqual("somewhereElse@There.com");
		user.set({email: somewhereHere@now.com, email_confirmation: somewhereHere@now.com});
		
	});
});

describe("User Form View", function(){
	beforeEach(function(){		
		loadFixtures("user_form.html");
		this.userView = new NewUserForm(); 
	});
	
	it('should be able to work with a fixture', function(){
		expect($('form').children().length).toEqual(6);
	});
	
	// it('should ')
});