import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function () {
  this.route('emberobject', function () {
    this.route('nested');
  });


  this.route('speakers');
  this.route('speaker',{ path: '/speakers/:id' });

  this.route('firebase');
  this.route('simpleModel');
  this.route('helpers');
  this.route('hash-model');
  this.route('mixins');
  this.route('config');
});

export default Router;



