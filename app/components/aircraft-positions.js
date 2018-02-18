import Ember from 'ember';

const { Component } = Ember;

export default Component.extend({
	init(){
		this._super(...arguments);
		this.send('getAllAircraftPositions');
	},
	classNames: ['aircraftsPositionsContainer'],
	actions:{
		getAllAircraftPositions() {

		    let data = $.getJSON(`assets/AircraftPosition.json`);

		    return data.then((json) => {
	    		let records = [];
			   	json.forEach(function(item){
			       // records.push( Production.create(item) );
			    	records.push(item);
				    console.log("the records are : : " + JSON.stringify(records));
			    });

			    this.set('aircraftPosition', records);
			    return records;
		    })
		}
	}
});