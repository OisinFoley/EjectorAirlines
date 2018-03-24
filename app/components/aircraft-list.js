import Ember from 'ember';

const { Component } = Ember;

export default Component.extend({	
	init(){
		this._super(...arguments);
		// this.send('aircraftList');
	},
	classNames: ['aircraftsContainer', 'aviationData', 'customScrollbar'],	
	
	actions:{
		filterAircraftPositions(aircraft) {
			// console.log(`item is ${JSON.stringify(aircraft)}`);
			this.sendAction('filterAircraftPositions', aircraft);
			this.sendAction('filterFlightList', aircraft);
		}
		// aircraftList: function(){			
		// 	let data = $.getJSON(`assets/Aircraft.json`);

		//     return data.then((json) => {
	    // 		let records = [];
		// 	   	json.forEach(function(item){
		// 	       // records.push( Production.create(item) );
		// 	    	records.push(item);
		// 		    // console.log("the records are : : " + JSON.stringify(records));
		// 	    });

		// 	    this.set('aircraftList', records);
		// 	    return records;
		//     })
		// }	
	}
	
});
