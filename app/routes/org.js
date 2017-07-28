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
    })
    // Use a promise to delay loading so you can see the loading state
    // .then(function(data) {
    //   return new Ember.RSVP.Promise((resolve, reject) => {
    //     Ember.run.later(() => {
    //       resolve(data)
    //     }, 2000)
    //   })
    // });
  },

  actions: {
    error(jqxhr) {
      if ( jqxhr.status === 404 ) {
        // intermediateTransitionTo takes you to a state that is not mapped to a URL
        this.intermediateTransitionTo('org.notfound') 
      } else {
        return true // bubble up 
                    //  it will go up through the routes until it finds one with
                    //  an error template, all the way up to the application level
      }
    }
  }
});
