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

Page = Backbone.Model.extend();

Pages = Backbone.Collection.extend({
	// var self = this;
	
	model: Page,
	
	currentPage: function() {
		return this.filter(function(page){ return page.get('showing'); });
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
window.tutorial.add([
	{title: 'Objective of the Game', text: lessonOne, showing: true},
	{title: 'The Initial Setup',	text: lessonTwo, showing: false},
	{title: 'Playing', text: lessonThree, showing: false},
	{title: 'Moving the Dot', text: lessonFour, showing: false},
	{title: 'Immobility', text: lessonFive, showing: false},
	{title: 'Same Space', text: lessonSix, showing: false}
]);

window.tutorialView = new PageView();

