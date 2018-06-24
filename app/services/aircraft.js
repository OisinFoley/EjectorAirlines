import Ember from 'ember';

const { Service, $ } = Ember;

export default Service.extend({
	getAircrafts() {
	    
	    let data = $.getJSON(`assets/Aircraft.json`);

	    return data.then((json) => {
    		let records = [];
		   	json.forEach(function(item){
		       // records.push( Production.create(item) );
		    	records.push(item);
			    // console.log("the records are : : " + JSON.stringify(records));
			});
						
		    this.set('data', records);
		    return records;
	    })
	}, 

	getFilteredAircrafts(RegId) {
		let data = $.getJSON('assets/Aircraft.json');		
		let dummyPositions = this.get('dummyPositions');
		console.log(dummyPositions.filter(position => position.ID.includes('46')));
		
	    return data.then((json) => {
			let records = [];
						
		   	json.forEach(function(item){
		       // records.push( Production.create(item) );
		    	records.push(item);
			    console.log("the records are : : " + JSON.stringify(records));
		    });

		    this.set('data', records);
		    return records;
	    })
	}, 

	getAllAircraftPositions() {

	    let data = $.getJSON(`assets/AircraftPosition.json`);

	    return data.then((json) => {
    		let records = [];
		   	json.forEach(function(item){
		       // records.push( Production.create(item) );
		    	records.push(item);
			    // console.log("the records are : : " + JSON.stringify(records));
		    });

		    this.set('data', records);
		    return records;
	    })
	}
});
