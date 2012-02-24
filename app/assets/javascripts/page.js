var Page;
var tutorial;

Page = Backbone.Model.extend({
	title: "Hello";
	text: "world!";
});

tutorial = Backbone.Collection.extend({
  model: Page
});
