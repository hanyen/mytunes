// AppView.js - Defines a backbone view class for the whole music app.
var AppView = Backbone.View.extend({

  initialize: function(params) {
    this.playerView = new PlayerView({model: this.model.get('currentSong')});
    this.libraryView = new LibraryView({collection: this.model.get('library')});

    this.songQueueView = new SongQueueView(this.model.get('songQueue'));
    //console.log(this.songQueueView);

    this.playerView.on('ended', function() {
      var songQueue = this.model.get('songQueue');
      songQueue.trigger('dequeue');
      this.model.set('currentSong', this.model.get('songQueue').at(0));
      //this.model.set('currentSong', this.model.get('songQueue').at(1));
    }, this);
    // change:currentSong - this is Backbone's way of allowing you to filter events to
    // ONLY receive change events for the specific property, 'currentSong'
    this.model.on('change:currentSong', function(model) {
      this.playerView.setSong(model.get('currentSong'));
      // console.log(model.get('currentSong'))
    }, this);
  },

  render: function() {
    return this.$el.html([
      this.playerView.$el,
      this.libraryView.$el,
      this.songQueueView.$el
    ]);
  } 

  // changeSong: function() {
  //   console.log('appView', this.model);
  //   //this.model.set('currentSong', this.model.get('songQueue').at(1));
  // }
});

