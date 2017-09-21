import Ember from 'ember';
import Production from '../models/production';
const Promise = Ember.RSVP.Promise;

export default Ember.Route.extend({

  model(params){
    return new Promise(function(resolve){
      setTimeout(function(){
        let data = Ember.$.getJSON('/data/production.json?start=${params.start}&end={params.end}');
        data.then(function(data){
          let records = [];
          data.forEach(function(item){
            records.push( Production.create(item) );
          });
          resolve(records);
        })
      }, 500);
    });
  }
});
