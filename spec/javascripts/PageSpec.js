describe("Page", function() {
	// var page;
	// 
	// beforeEach(function(){
	// 	page = new Page();
	// });
	
 	it("exists", function() {
 	// 		var Page;
 	// 		var page;
 	// 		
		Page = Backbone.Model.extend({
			title: "Hello";
			text: "world!";
		});
		page = new Page();
    expect(page.get("title")).toEqual("Hello!");
  });
});