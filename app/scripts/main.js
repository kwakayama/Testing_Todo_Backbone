/*global TestingTodoBackbone, $, Backbone*/


window.TestingTodoBackbone = {
    Models: {},
    Collections: {},
    Views: {},
    Routers: {},
    init: function () {
        'use strict';
        console.log('Hello from Backbone!');
        new TestingTodoBackbone.Routers.TodoRouter();
        Backbone.history.start();
    }
};

$(document).ready(function () {
    'use strict';
    TestingTodoBackbone.init();
});
