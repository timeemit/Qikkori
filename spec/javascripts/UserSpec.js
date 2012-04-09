describe("User Model", function() {
	
	it('doesn\'t need anything to work', function(){
		expect(1+1).toEqual(2);
	});
	
	
	it("initializes the username", function() {
		var user = new User;
		expect(user.get('username')).toEqual('');
		expect(user.get('email')).toEqual('');
		expect(user.get('password')).toEqual('');
		expect(user.get('errors')).toEqual(null);
	});
});
