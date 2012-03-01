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

Pages = Backbone.Collection.extend({model: Page});	

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
	{title: 'Objective of the Game', text: lessonOne, hidden: false},
	{title: 'The Initial Setup',	text: lessonTwo, hidden: true},
	{title: 'Playing', text: lessonThree, hidden: true},
	{title: 'Moving the Dot', text: lessonFour, hidden: true},
	{title: 'Immobility', text: lessonFive, hidden: true},
	{title: 'Same Space', text: lessonSix, hidden: true}
]);

window.tutorialView = new PageView();
window.tutorialView.setElement($('#tutorial'));


