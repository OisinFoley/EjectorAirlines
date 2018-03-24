import Ember from 'ember';

const { Controller, inject } = Ember;

export default Controller.extend({
    flightService: inject.service('flight'),
    init: function() {
        this._super();
      
        // this.send('loadFlights');
      },
    actions: {
        // loadFlights() {                
        //     this.get('flightService').getFlights().then((json) => {
        //         this.set(`flightList`, json);
        //     });              
        // }
    }
});
