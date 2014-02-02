require.config({
    baseUrl: 'js',
    paths: {
        jquery: 'lib/jquery',
        underscore: 'lib/underscore',
        backbone: 'lib/backbone'
    },
    shim: {
        'backbone': {
            deps: ['underscore', 'jquery'],
            exports: 'Backbone'
        },
        'underscore': {
            exports: '_'
        },
    }
});

require(["jquery", "app/app"], function($, app) {

    $(document).ready(function() {
		app.init();
    });
});