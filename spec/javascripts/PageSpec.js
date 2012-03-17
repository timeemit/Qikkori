describe("Page Model", function() {
	var page;
	
	it('doesn\'t need anything to work', function(){
		expect(1+1).toEqual(2);
	});
	
	it('assigns a unique number to each page', function(){
		expect(tutorial.first().get("number")).toEqual(1);
		
		expect(tutorial.getByCid('c2').get("title")).toEqual('Playing');
		expect(tutorial.getByCid('c2').get("number")).toEqual(3);
		
		expect(tutorial.last().get("number")).toEqual(6);
	});
	
 	it("returns values for attributes", function() {
		page = new Page({
			title: "Hello",
			text: "world!"
		});
	
    expect(page.get("title")).toEqual("Hello");
    expect(page.get("text")).toEqual("world!");	
		expect(page.get("number")).toEqual(7); // Six other pages have been made before it.
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
	
	it("returns the showing page as the currentPage", function(){
		expect(tutorial.first().get('showing')).toEqual(true)
		expect(tutorial.currentPage()).toEqual( tutorial.first() );
	});

	it("returns the previous page as the one preceding a showing page", function(){
			expect(tutorial.previousPage()).toEqual(tutorial.last());
	});
	
	it("returns the next page as the one following a showing page", function(){
		expect(tutorial.getByCid('c0')).toEqual(tutorial.first());
		expect(tutorial.nextPage()).toEqual(tutorial.getByCid('c1'));

		// tutorial.first().set('showing', false);
		// tutorial.last().set('showing', true);
		// expect(tutorial.nextPage()).toEqual(tutorial.first());		
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