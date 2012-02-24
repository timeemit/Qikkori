describe("Page", function() {
	var Page;
	var page;

	Page = Backbone.Model.extend();
	
	it('doesn\'t need anything to work', function(){
		expect(1+1).toEqual(2);
	});
	
 	it("returns values for attributes", function() {
		page = new Page({
			title: "Hello",
			text: "world!"
		});
	
    expect(page.get("title")).toEqual("Hello");
    expect(page.get("text")).toEqual("world!");		
  });
});