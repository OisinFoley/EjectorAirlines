import Ember from 'ember';

const { Route, inject } = Ember;

export default Route.extend({
	aircraftService: inject.service('aircraft')//,	
  	// model() {

  	// 	// return this.get('aircraftService').getAircrafts();

  	// 	let aircrafts = this.get('aircraftService').getAircrafts();
  	// 	let aircraftsPositions = this.get('aircraftService').getAllAircraftPositions();

  	// 	let overviewData = {
  	// 	// 	// aircrafts: this.get('aircraftList').getAircrafts(),
  	// 	// 	// aircraftsPositions: this.get('aircraftList').getAllAircraftPositions()
  	// 		aircrafts: aircrafts,
  	// 		aircraftsPositions: aircraftsPositions
  	// 	};
   //  	// return this.get('aircraftService').getAircrafts();

   //  	// return this.get('aircraftService').getAllAircraftPositions();
   //  	return overviewData;
  	// }

});
