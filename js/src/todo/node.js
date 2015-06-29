define(function(require) {
	var $=require('jquery');
	var Backbone=require('backbone/backbone');

	var Node = Backbone.Model.extend({
		initialize: function() {
			console.log($,Backbone);
			this.set({list:[]});
		}
	});
	return Node;
});