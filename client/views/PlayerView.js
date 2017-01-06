// PlayerView.js - Defines a backbone view class for the music player.
var PlayerView = Backbone.View.extend({
  // HTML5 (native) audio tag is being used
  // see: https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/Using_HTML5_audio_and_video
  el: '<audio controls autoplay />',

  initialize: function() {
    // listen to ended
    // console.log('i am here');
    // this.on('ended', function() {
    //   console.log('PlayerView');
    //   // create songQueue object
    //   // new SongQueue.playFirst();
    // }, this);
    // this.on('ended', function() { console.log('PlayerView'); }, this);
    // $('el').on('ended', function() { console.log('PlayerView'); });
  },

  setSong: function(song) {
    // debugger;
    this.model = song;
    this.render();
  },

  // event listener for tigger done in DOM node, e.g. $(appView.playerView.el).trigger('ended');
  events: {
    'ended': function() {
      this.trigger('ended');
    }  //This will fire.
  }, 

  render: function() {
    return this.$el.attr('src', this.model ? this.model.get('url') : '');
  }

});
