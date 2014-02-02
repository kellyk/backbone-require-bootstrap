define(['jquery', 'underscore', 'backbone'], function($, _, Backbone) {
	'use strict';

	var View = Backbone.View.extend({
		tagName: 'li',
		className: 'myClass',
		template: _.template($('#templateName').html()),

		render: function() {
			this.$el.html(this.template(this.model.toJSON()));
			return this;
		}
	});
	
	return View;
});
