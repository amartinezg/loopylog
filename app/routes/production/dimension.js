import Ember from 'ember';

export default Ember.Route.extend({
  model(params){
    return this.modelFor('production')
      .findBy('DimensionID', parseInt(params.dimension_id));
  }
});
