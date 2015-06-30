define(function(require) {
	var $ = require('jquery');
	var Backbone = require('backbone/backbone');
	var Todo = require('./todo');

	require('./localstroage');

	var TodoList = Backbone.Collection.extend({
		model: Todo,
		localStorage: new Backbone.LocalStorage("todos-backbone"),
		done: function() {
			return this.where({
				done: true
			});
		},
		remaining: function() {
			return this.where({
				done: false
			});
		},
		nextOrder: function() {
			if (!this.length) return 1;
			return this.last().get('order') + 1;
		},
		comparator:'order'
	});
	return TodoList;
});