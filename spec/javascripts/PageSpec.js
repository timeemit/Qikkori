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
	
	it("the first one is initially visible", function(){
		expect(tutorial.first().get('showing')).toEqual(true)
		expect(tutorial.last().get('showing')).toEqual(false)
	})
	
	it("has assigned Client IDs to each item in the collection", function(){
		expect(tutorial.first().cid).toEqual('c0');
		expect(tutorial.last().cid).toEqual('c5');
	});
	
	it("returns the page showing == true as the currentPage", function(){
		expect(tutorial.currentPage().length).toEqual(1);
		expect(tutorial.currentPage()).toEqual(tutorial.first());
	});
});

describe("Tutorial View", function(){
	beforeEach(function(){		
		loadFixtures("tutorial.html");
		this.tutorialView = new PageView(); 
		this.tutorialView.setElement($('#tutorial'));
	});
	
	it('should be able to work with a fixture', function(){
		expect($('#tutorial')).toHaveClass('page');
	});
	
	it('should have the right el value', function(){
		expect($(this.tutorialView.el)).toHaveClass('page');
		expect($(this.tutorialView.el)).toHaveId('tutorial');
		expect($(this.tutorialView.el)).toHaveText('Hello world!');
	});
	
	it('should change the text of the div', function(){
		this.tutorialView.render();
		expect($('#tutorial').text()).toEqual('Just the world!');
	});
});