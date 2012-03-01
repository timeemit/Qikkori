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
	beforeEach(function(){		
		loadFixtures("tutorial.html");
		this.model = new Page({
			title: "Hello",
			text: "world!"
		});
		
		this.tutorialView = new PageView(); 
		this.tutorialView.setElement($('#tutorial'));

	});
	
	it('should be able to work with a fixture', function(){
		expect($('#tutorial')).toHaveClass('page');
	});
	
	it('should have the right el value', function(){
		expect(this.tutorialView.el).toEqual('<div id="tutorial" class="page">');
	});
	
	it('should change the text of the div', function(){
		tutorialView.render();
		expect($('#tutorial').text()).toHaveText('Hello!');
	});
});