import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  // List of Orgs
  this.route('orgs'); // orgs

  // Individual Org
  this.route('org', {path: 'org/:id'}, function() {
    // List of Repos
    this.route('repos'); // org/emberjs

    // Individual Repo
    // org/jquery/jquery-ui
    this.route('repo', {path: ':repoid'}, function() {
      this.route('issues');
      this.route('contributors');
    });
    this.route('notfound');
  });
  this.route('notfound', {path: '*path'})
});

export default Router;
