import Ember from 'ember';
// import { inject } from 'ember'


const { Controller, inject } = Ember;

export default Controller.extend({
    aircraftService: inject.service('aircraft'),
    flightService: inject.service('flight'),
    init: function() {
        this._super();

        this.set('dynamicInjectionValue', 'aircraft-list');

        this.set('aircraftRegFilters', []);
      
        this.send('loadAircraftLists');
        // this.send('loadFilteredAircraftList');
        // this.send('loadFilteredAircraftPositions');
        // this.send('loadAircraftPositions');
        this.send('loadFlights');

        let dummyPositions = [
            {
            "ID": "1056456",
            "Reg": "OO-NSF",
            "tRegJourney_ID": "0",
            "AircraftPositionSource_ID": "1",
            "AircraftPositionType": "TransceiverOn",
            "Timestamp": "2017-09-20 05:48:01",
            "Latitude": "57.2099",
            "Longitude": "-2.19918",
            "Altitude": "200",
            "Speed": "0",
            "Track": "206"
            },
            {
                "ID": "1056735",
                "Reg": "OY-HNV",
                "tRegJourney_ID": "0",
                "AircraftPositionSource_ID": "1",
                "AircraftPositionType": "WheelsOn",
                "Timestamp": "2017-09-20 06:44:44",
                "Latitude": "56.0786",
                "Longitude": "4.22877",
                "Altitude": "151",
                "Speed": "0",
                "Track": "252"
            },
            {
                "ID": "1056741",
                "Reg": "OY-HNV",
                "tRegJourney_ID": "0",
                "AircraftPositionSource_ID": "1",
                "AircraftPositionType": "OnGround",
                "Timestamp": "2017-09-20 06:45:43",
                "Latitude": "56.0786",
                "Longitude": "4.22871",
                "Altitude": "148",
                "Speed": "0",
                "Track": "0"
            },
            {
                "ID": "1056748",
                "Reg": "OY-HNV",
                "tRegJourney_ID": "0",
                "AircraftPositionSource_ID": "1",
                "AircraftPositionType": "OnGround",
                "Timestamp": "2017-09-20 06:46:43",
                "Latitude": "56.0786",
                "Longitude": "4.22871",
                "Altitude": "148",
                "Speed": "0",
                "Track": "0"
            },
            {
            "ID": "1056461",
            "Reg": "OO-NSF",
            "tRegJourney_ID": "0",
            "AircraftPositionSource_ID": "1",
            "AircraftPositionType": "OnGround",
            "Timestamp": "2017-09-20 05:49:00",
            "Latitude": "57.2099",
            "Longitude": "-2.19924",
            "Altitude": "249",
            "Speed": "0",
            "Track": "0"
            },
            {
            "ID": "1056465",
            "Reg": "OO-NSF",
            "tRegJourney_ID": "0",
            "AircraftPositionSource_ID": "1",
            "AircraftPositionType": "OnGround",
            "Timestamp": "2017-09-20 05:50:00",
            "Latitude": "57.2099",
            "Longitude": "-2.19916",
            "Altitude": "249",
            "Speed": "0",
            "Track": "0"
        }];
        this.set('dummyPositions', dummyPositions);

      },
      loading: true,
      actions: {
        loadAircraftLists() {                
            this.get('aircraftService').getAircrafts().then((json) => {
        // console.log(`${JSON.stringify(json)} hahaha`);
                this.set(`aircraftList`, json);
                this.set('loading', false);

                //get the Reg's returned from here
                //put them in an array
                //do this.set('aircraftFilters', theRegs)
                //then in aircraftlist promise, filter on each of the 2 Regs
                //and create 2 objects to hold the array of aircraft positions, with
                //each of these objects differing by the aircraft Reg
                //that will then allow you to neatly loop the contents of the aircraft positins file
                //and create the tabel you desire

                let sss = json.filter(aircraft => aircraft.Reg == 'OY-HNV');
                // 00snf.filter
                // console.log(sss);

                let aircraftRegs = this.get('aircraftRegFilters');
                
                json.forEach(function (aircraft, i) {                    
                    aircraftRegs.push({ Reg: aircraft.Reg, values: [] });
                });
                // this.set('aircraftRegistrations', aircraftRegs);
        // console.log(`abc : ${this.get('aircraftRegFilters')}`);
                this.set('aircraftRegFilters', aircraftRegs);
                
                // this.send('loadAircraftPositions');
                
            });  
            // console.log(this.get('aircraftRegistrations'));
        },

        loadFilteredAircraftList () {
            console.log('test');
            let chosenAricraftReg = 'OO-NSF';
            this.get('aircraftService').getFilteredAircrafts(chosenAricraftReg).then((json) => {
                console.log(`the returned aircraft from the filter service is ${JSON.stringify(json)} . . .hope you got what you wanted`);
            });
        },

        filterAircraftPositions(selectedAircraft) {

            
            let aircraftPosition = this.get('dummyPositions');
            aircraftPosition = aircraftPosition.filter(position => position.Reg === selectedAircraft.Reg)
    // let sss = json.filter(aircraft => aircraft.Reg == 'OY-HNV');

            this.set(`aircraftPosition`, aircraftPosition);
        },

        filterAircraftPositionsByFlightId(selectedFlight) {
            console.log(`craicnw=ow`);
            console.log(selectedFlight);

            /**
             * it seems to filter the aircraftpositions by 'flight', that we must grab the aircraftid associated with the flight, and compare it with the
             * aircraftid in each aircraftposition record, AND also check the departure and arrival time of the flight and ensure that the aircraftposition
             * timestamp falls within that timerange, as without doing this timerange check, we may be including positions for other flights that the
             * aircraft took part in  . . 
             */
            
        },
        
        filterFlightList(selectedAircraft) {
                console.log('ghj')
                // let flightList = this.get('flightList');
            let filteredFlightList = this.get('fullFlightList').filter(flight => flight.Aircraft_ID.Reg === selectedAircraft.Reg)
            this.set('displayedFlightList', filteredFlightList);
        },

        loadFilteredAircraftPositions () {

        },

        loadAircraftPositions() {    
            // console.log(`it is : ${this.get('aircraftRegFilters')}`);            
            // console.log(`it is :`);            
            
            this.get('aircraftService').getAllAircraftPositions().then((json) => {
                this.set(`aircraftPosition`, json);


                    // `this.get('aircraftRegFilters').forEach(function(aircraftReg, i) {
                    //     // if (aircraft.Reg === aircraftReg) {
                    //         // this.get('aircraftRegFilters')[i].values.push(aircraft);
                    //         console.log(JSON.stringify(aircraftReg));
                    //         // aircraftReg.values.push(aircraft);
                    //         console.log(JSON.stringify(aircraftReg));
                            
                    //     // }
                    // })`

                // someValues.forEach((element, index) => {
                //     console.log(`Current index: ${index}`);
                //     console.log(element);
                // });


                json.forEach((aircraft, i) => {
                    delete aircraft.tRegJourney_ID;
                    delete aircraft.AircraftPositionSource_ID;
                    delete aircraft.ID;


                    this.get('aircraftRegFilters').forEach((aircraftReg, i) => {
                    // this.get('aircraftRegFilters').forEach(function(aircraftReg, i) {
                        console.log(`howdy hau`);
                        if (aircraft.Reg === aircraftReg.Reg) {
                            // this.get('aircraftRegFilters')[i].values.push(aircraft);
                            // console.log(JSON.stringify(aircraftReg));
                            aircraftReg.values.push(aircraft);
                            // console.log(JSON.stringify(aircraftReg));
                            
                        }
                        
                    })
                    

                    this.set(`aircraftPosition`, json);
                    this.set(`aircraftRegFilters`, this.get('aircraftRegFilters'));

                    // console.log(`NOW IT IS :: ${this.get('aircraftRegFilters')}`);
                    //this.get('aircraftRegFilters')

                });

                console.log(`bumper bumper hai ${JSON.stringify(this.get('aircraftRegFilters')[0].values)}`);

                // console.log(`it is : ${this.get('aircraftRegFilters')[0]}`);
                // this.get('aircraftRegFilters').forEach(function(Reg,i){
                //     console.log(`hihih ${Reg} + ${i}`);
                // })
                
            });              
        },
        loadFlights() {                
            this.get('flightService').getFlights().then((json) => {
                this.set(`fullFlightList`, json);
                this.set(`displayedFlightList`, json);
            });              
        }

    }
});
