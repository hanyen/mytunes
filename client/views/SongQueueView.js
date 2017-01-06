// SongQueueView.js - Defines a backbone view class for the song queue.
var SongQueueView = Backbone.View.extend({

  tagName: 'table',

  initialize: function() {
    this.render();
  },

  render: function() {
    // new SongQueueEntryView().render();
    // return this.$el;

    //from mark
    this.$el.children().detach();
    this.$el.html('<th>Song Queue</th>');
  }

});


