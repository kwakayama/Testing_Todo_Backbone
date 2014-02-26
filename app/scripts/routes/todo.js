/*global TestingTodoBackbone, Backbone*/

TestingTodoBackbone.Routers = TestingTodoBackbone.Routers || {};

(function () {
    'use strict';

    TestingTodoBackbone.Routers.TodoRouter = Backbone.Router.extend({

        initialize: function  (argument) {
            this.todos = new TestingTodoBackbone.Collections.TodosCollection();
            new TestingTodoBackbone.Views.AppView({
                collection: this.todos
            });
        },
        routes: {
            '*filter': 'setFilter'
        },

        setFilter: function (param) {
            // Set the current filter to be used
            TestingTodoBackbone.TodoFilter = param || '';

            // Trigger a collection filter event, causing hiding/unhiding
            // of Todo view items
            this.todos.trigger('filter');
        }
    });

})();
