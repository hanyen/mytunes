// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Backbone.Collection.extend({

  model: SongModel,

  initialize: function() {                     // let's ask about this later
    this.on('add', function() {
      if (this.length === 1) {
        this.playFirst();
        console.log('initialize', this);
      }
    }, this);
    
    // if (this.length === 1) {
    //   this.on('add', this.playFirst);
    // }
    // console.log('initialize', this);

    this.on('ended', function() {
      console.log('SongQueue, song has ended');
      // removes the song from the queue
      this.remove(this.at(0));
      // plays the first song in the queue if there are any songs left
      if (this.length === 1) {
        this.playFirst();
      }
    });

    this.on('dequeue', function() {
      this.remove(this.at(0));
      //console.log('removed');
    });
    
    this.on('add', function() { new SongQueueView().render(); }, this);
    this.on('pop', function() { new SongQueueView().render(); }, this);  
  },

  playFirst: function() {
    // this.trigger('playFirst', this);
    //console.log('playFirst', this);
    //songQueue.at(0).play
    this.at(0).play();
  }

});