import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    let org = this.modelFor('org')
    return $.get(`https://api.github.com/repos/${org.id}/${params.repoid}`).then(rawRepo => {
      // back up github's numeric id
      rawRepo.oldId = rawRepo.id
      // use the name of the repo as our id attribute to work with ember's conventions
      rawRepo.id    = rawRepo.login
      return rawRepo
    })
  }
});
