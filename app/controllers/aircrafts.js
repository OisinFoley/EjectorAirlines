import Ember from 'ember';

const { Controller, inject } = Ember;


export default Controller.extend({
    aircraftService: inject.service('aircraft'),
    init: function() {
        this._super();
      
        this.send('loadAircraftLists');
        this.send('loadAircraftPositions');
      },
    actions: {
        loadAircraftLists() {                
            this.get('aircraftService').getAircrafts().then((json) => {
                this.set(`aircraftList`, json);
            });              
        },
        loadAircraftPositions() {                
            this.get('aircraftService').getAllAircraftPositions().then((json) => {
                this.set(`aircraftPosition`, json);
            });              
        }
    }
});

