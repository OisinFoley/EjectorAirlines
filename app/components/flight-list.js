import Ember from 'ember';

const { Component } = Ember;

export default Component.extend({
	init(){
		this._super(...arguments);
		this.send('flightList');
	},
	classNames: ['flightsContainer', 'aviationData', 'customScrollbar'],
	actions:{
		flightList: function(){			
			let data = $.getJSON(`assets/Flight.json`);

		    return data.then((json) => {
	    		let records = [];
			   	json.forEach(function(item){
			       // records.push( Production.create(item) );
			    	records.push(item);
				    // console.log("the records are : : " + JSON.stringify(records));
			    });

			    this.set('flightList', records);
			    return records;
		    })
		}	
	}
});
