/*global TestingTodoBackbone, Backbone*/

TestingTodoBackbone.Models = TestingTodoBackbone.Models || {};

(function () {
    'use strict';

    TestingTodoBackbone.Models.TodoModel = Backbone.Model.extend({

        url: '',

        // Default attributes for the todo
        // and ensure that each todo created has `title` and `completed` keys.
        defaults: {
            title: '',
            completed: false
        },

        // Toggle the `completed` state of this todo item.
        toggle: function () {
            this.save({
                completed: !this.get('completed')
            });
        },

        initialize: function() {
        },

        validate: function(attrs, options) {
        },

        parse: function(response, options)  {
            return response;
        }
    });

})();
