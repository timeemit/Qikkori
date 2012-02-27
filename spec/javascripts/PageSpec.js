describe("Page Model", function() {
	var page;
	
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

describe("Tutorial Collection", function(){
	it('doesn\'t need anything to work', function() {
		expect(1+1).toEqual(2);
	});
	
	it("has five instances of the model", function() {
 		expect(tutorial.length).toEqual(6);
	});
	
	it("has assigned Client IDs to each item in the collection", function(){
		expect(tutorial.first().cid).toEqual('c0');
		expect(tutorial.last().cid).toEqual('c5');
	});
});

describe("Tutorial View", function(){
	it('doesn\'t need anything to to work', function(){
		expect(1+1).toEqual(2);
	});
});