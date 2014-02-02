define(['jquery', 'underscore', 'backbone', 'app/collections/Collection', 'app/views/ListView'],
	function($, _, Backbone, Collection, ListView) {
	'use strict';

	var App = {
		init: function() {
			var myCollection = new Collection();

			var listView = new ListView({collection: myCollection});
			
			myCollection.set([
				{variable: "some value"},
				{variable: "another value"}
			]);
		}
	};

	return App;
});
