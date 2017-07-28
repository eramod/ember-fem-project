import Ember from 'ember';

export default Ember.Route.extend({

  model(params) {
    // here, params is an object with an id property because there is a dynamic
    //   segment in the router
    return $.get(`https://api.github.com/orgs/${params.id}`).then(rawOrg => {
      // back up github's numeric id
      rawOrg.oldId = rawOrg.id
      // use the name of the repo as our id attribute to work with ember's conventions
      rawOrg.id    = rawOrg.login
      return rawOrg
    });
  }
});
