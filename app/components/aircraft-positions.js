import Ember from 'ember';

const { Component } = Ember;

export default Component.extend({
	init(){
		this._super(...arguments);
		this.send('getAllAircraftPositions');
	},
	classNames: ['aircraftsPositionsContainer', 'aviationData', 'customScrollbar'],
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

//for each key, if value is !typeof(object), then push to an object(`${key}:${value}`)
//if value is typeof object, then go to an inner loop and create another 