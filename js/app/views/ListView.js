define(['jquery', 'underscore', 'backbone', 'app/views/View'], function($, _, Backbone, View) {
	'use strict';

	var ListView = Backbone.View.extend({
		tagName: 'ul',
		el: $('.update'),

		initialize: function() {
            this.collection.on('add remove reset', this.render, this);
		},

		render: function() {
			this.$el.html('');
			this.collection.each(this.addOne, this);
			return this;
		},

		addOne: function(model) {
			var view = new View({model: model});
			this.$el.append(view.render().el);
			return this;
		}
	});

	return ListView;
});
