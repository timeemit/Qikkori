var Page;
var Pages;
var PageView;

var tutorial;
var tutorialView;

var lessonOne = 'Move your dot from its initial position one turn at a time into the initial position of your opponent.';
var lessonTwo = 'Two player dots are placed on opposite corners of a grid. A random number of walls are placed randomly between intersections.';
var lessonThree = 'On a given turn, a player must first move his/her dot and then either create or break a wall anywhere on the board.';
var lessonFour = 'A dot may move to one adjacent intersections in a turn.';
var lessonFive = 'Inability to move a dot at the beginning of a turn results in a loss.';
var lessonSix = 'Two dots may not occupy the same space.';

// The Page class

Page = Backbone.Model.extend({
	defaults: function() {
		return { number: tutorial.length + 1 };
	}
});

Pages = Backbone.Collection.extend({
	
	model: Page,
	
	currentPage: function() {
		// Returns the (first) page with showing == true.
		return this.find(function(page){ return page.get('showing'); });
	},
	
	nextPage: function() {
		// Returns the page following the current page, giving the first page if the current is the last.
		var number = this.currentPage().get("number");

		if (this.currentPage() == this.last()) {
			return this.first();
		}
		else {
			return this.find(function(page){ return page.get('number') == number + 1; });
		};
	},
	
	previousPage: function(){
		// Returns the page preceding the current page, giving the last page if the current is the first.
		var number = this.currentPage().get("number");

		if (this.currentPage() == this.first()) {
			return this.last();
		}
		else {
			return this.find(function(page){ return page.get('number') == number - 1; });
		};
	},
	
	turnPageForward: function(){
		// toggles the showing value of the nextPage and currentPage objects.
		var currentPage = this.currentPage();
		this.nextPage().set('showing', true);
		currentPage.set('showing', false);
	},
	
	turnPageBackward: function(){
		var currentPage = this.currentPage();
		this.previousPage().set('showing', true);
		currentPage.set('showing', false);
	}
});	

// The tutorial instance

window.tutorial = new Pages();
window.tutorial.add({title: 'Objective of the Game', text: lessonOne, showing: true});
window.tutorial.add({title: 'The Initial Setup',	text: lessonTwo, showing: false});
window.tutorial.add({title: 'Playing', text: lessonThree, showing: false});
window.tutorial.add({title: 'Moving the Dot', text: lessonFour, showing: false});
window.tutorial.add({title: 'Immobility', text: lessonFive, showing: false});
window.tutorial.add({title: 'Same Space', text: lessonSix, showing: false});

PageView = Backbone.View.extend({	
	model: Page,
	
	el: '.page',

  events: {
    "click #tutorial_previous": "seePreviousPage",
    "click #tutorial_next": 		"seeNextPage"
	},
  
	template: _.template('<h3><%= number %>. <%= title %></h3><%= text %> \
		<br /> \
		<img alt="Arrow_left" id="tutorial_previous" src="/assets/arrow_left.png" /> \
		<img alt="Arrow_right" id="tutorial_next" src="/assets/arrow_right.png" />'),
	
	footer: '<img alt="Arrow_left" id="tutorial_previous" src="/assets/arrow_left.png" /><img alt="Arrow_right" id="tutorial_next" src="/assets/arrow_right.png" />',
		
  render: function() {
		this.$el.html(this.template(tutorial.currentPage().toJSON()));
    return this;
	},

	seeNextPage: function() {
		tutorial.turnPageForward();
		this.render();
	},
	
	seePreviousPage: function() {
		tutorial.turnPageBackward();
		this.render();
	}

});