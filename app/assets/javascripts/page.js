var Page;
var Pages;
var PageView;
var tutorial;
var tutorialPage;
var lessonOne = 'Move your dot from its initial position one turn at a time into the initial position of your opponent.!'
var lessonTwo = 'Two player dots are placed on opposite corners of a grid. A random number of walls are placed randomly between intersections.'
var lessonThree = 'On a given turn, a player must first move his/her dot and then either create or break a wall anywhere on the board.'
var lessonFour = 'A dot may move to one adjacent intersections in a turn.'
var lessonFive = 'Inability to move a dot at the beginning of a turn results in a loss.'
var lessonSix = 'Two dots may not occupy the same space.'

Page = Backbone.Model.extend();

Pages = Backbone.Collection.extend({model: Page});	

PageView = Backbone.Collection.extend({
	tagname: 'div',
	
	className: 'page',	
	
	render: function(){
		$(this.el).html("Hello!")
	}
});

tutorial = new Pages();

tutorial.add([
	{title: 'Objective of the Game', text: lessonOne},
	{title: 'The Initial Setup',	text: lessonTwo},
	{title: 'Playing', text: lessonThree},
	{title: 'Moving the Dot', text: lessonFour},
	{title: 'Immobility', text: lessonFive},
	{title: 'Same Space', text: lessonSix}
]);

tutorialPage = new PageView;

