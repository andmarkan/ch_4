var Backbone = require('backbone');
var _ = require('underscore');

// data
var Movies = require('collections/movies');
var data = require('../../../movies.json');
var movies = new Movies(data);

// views
var MoviesList = require('views/moviesList');

var MoviesRouter = Backbone.Router.extend({

  routes: {
    'movies/:id': 'selectMovie',
    '':           'showMain'
  },

  selectMovie: function(id) {
    this.movies.resetSelected();
    this.movies.selectByID(id);
  },

  showMain: function() {
    this.movies.resetSelected();
  },

  initialize: function(options) {
    this.movies = movies;
    this.moviesList = new MoviesList({
      el: options.el,
      collection: movies
    });
    _.extend(this.moviesList, {router: this});
    this.moviesList.render();
  }
});
module.exports = MoviesRouter;
