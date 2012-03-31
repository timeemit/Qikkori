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

	it("can render page as a JSON object", function() {
    expect(page.get("title")).toEqual("Hello");
		expect(page.toJSON()).toEqual({ number : 7, title : 'Hello', text : 'world!' });
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
		tutorial.first().set('showing', false);
		tutorial.last().set('showing', true);
		expect(tutorial.previousPage()).toEqual(tutorial.getByCid('c4'));

		tutorial.first().set('showing', true);
		tutorial.last().set('showing', false);
		expect(tutorial.previousPage()).toEqual(tutorial.last());		
	});
	
	it("returns the next page as the one following a showing page", function(){
		tutorial.first().set('showing', false);
		tutorial.last().set('showing', true);
		expect(tutorial.nextPage()).toEqual(tutorial.first());		

		tutorial.first().set('showing', true);
		tutorial.last().set('showing', false);
		expect(tutorial.getByCid('c0')).toEqual(tutorial.first());
		expect(tutorial.nextPage()).toEqual(tutorial.getByCid('c1'));
	});

	it("can paginate forward and backward", function(){
		// Foward pagination from the first page should be the second page.
		tutorial.turnPageForward();
		expect(tutorial.first().get('showing')).toEqual(false);
		expect(tutorial.currentPage().get('showing')).toEqual(true);
		expect(tutorial.currentPage().get('number')).toEqual(2);
		
		// Backward pagination from the second page should be first page.
		tutorial.turnPageBackward();
		expect(tutorial.first()).toEqual(tutorial.currentPage());
		
		// Backward pagination from the first page should be the last page.
		tutorial.turnPageBackward();
		expect(tutorial.last()).toEqual(tutorial.currentPage());
		
		// Foward pagination from the last page should be first page.
		tutorial.turnPageForward();
		expect(tutorial.first()).toEqual(tutorial.currentPage());
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
		expect($('.page')).toHaveClass('page');
		expect($(this.tutorialView.el)).toHaveId('tutorial');
		expect($(this.tutorialView.el)).toHaveText('Hello world!');
	});
	
	it('should be able to render templates', function(){
		var compiled = _.template("hello: <%= name %>");
		expect(compiled({name : 'moe'})).toEqual("hello: moe");
	});
	
	it('should change the text of the div', function(){
		this.tutorialView.render();
		expect($('#tutorial').text()).toNotEqual('Just the world!');
	});
});