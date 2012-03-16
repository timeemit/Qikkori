var Page;
var Pages;
var PageView;

var tutorial;
var tutorialView;

var lessonOne = 'Move your dot from its initial position one turn at a time into the initial position of your opponent.!';
var lessonTwo = 'Two player dots are placed on opposite corners of a grid. A random number of walls are placed randomly between intersections.';
var lessonThree = 'On a given turn, a player must first move his/her dot and then either create or break a wall anywhere on the board.';
var lessonFour = 'A dot may move to one adjacent intersections in a turn.';
var lessonFive = 'Inability to move a dot at the beginning of a turn results in a loss.';
var lessonSix = 'Two dots may not occupy the same space.';

// The Page class

Page = Backbone.Model.extend({
	defaults: function() {
		return {
			number: tutorial.length + 1
		};
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
		if (this.currentPage() == this.last()) {
			return this.first();
		}
		else {
			index = this.indexOf(this.currentPage());
			return this;
		};
	},
	
	previousPage: function(){
		// Returns the page preceding the current page, giving the last page if the current is the first.
		if (this.currentPage() == this.first()) {
			return this.last();
		}
		else {
			index = this.indexOf(this.currentPage());
			return this[index - 1];
		};
	},
	
	turnPageForward: function(){
		// toggles the showing value of the nextPage and currentPage objects.
		this.currentPage.set('showing', false)
	},
	
	turnPageBackward: function(){
		
	}
});	

PageView = Backbone.View.extend({

  tagName: "div",

  className: "page",

  events: {
    // "click .icon":          "open",
    // "click .button.edit":   "openEditDialog",
    // "click .button.delete": "destroy"
  },
  
  render: function() {
		$(this.el).html('Just the world!');
    return this;
	}

});

// The tutorial instance

window.tutorial = new Pages();
window.tutorial.add([{title: 'Objective of the Game', text: lessonOne, showing: true}]);
window.tutorial.add({title: 'The Initial Setup',	text: lessonTwo, showing: false})
window.tutorial.add({title: 'Playing', text: lessonThree, showing: false})
window.tutorial.add({title: 'Moving the Dot', text: lessonFour, showing: false})
window.tutorial.add({title: 'Immobility', text: lessonFive, showing: false})
window.tutorial.add({title: 'Same Space', text: lessonSix, showing: false})

window.tutorialView = new PageView();

