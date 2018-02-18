import Ember from 'ember';

const { Service } = Ember;

export default Service.extend({
	getFlight(flightId) {

	    let data = $.getJSON(`assets/Flight.json`);

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
	}
});
