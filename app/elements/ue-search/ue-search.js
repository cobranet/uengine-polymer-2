/*global Polymer,alert*/
(function() {
    'use strict';
    
    Polymer({
	is: 'ue-search',

	properties: {
            ssearch: {
		type: Object,
		notify: true
            },
	},
	show: function(){
	    return false;
	},
	active_dice_value: function(status){
	    console.log(status);
	    if(status == 0) {
		return 0;
	    }
	    if (status == 1 ){
		return this.ssearch.dice1.value;
	    }
	    if (status == 2 ){
		return this.ssearch.dice2.value;
	    }
		
	},
	scoreCell: function(e){
	    console.log(e);
	    if(this.ssearch.status == 1){
		this.ssearch.status = 2;
	    } else {
		this.ssearch.status = 0;
	    }
	    this.set('ssearch.status',this.ssearch.status);
	    this.setColors();
	},
	showRoll: function(status){
	    console.log("In show");
	    console.log(status);
	    
	    if(status == 0 ){
		return false;
	    }
	    return true;
	},
	setColors: function(){
	    	if (this.ssearch.status == 1){
		    this.ssearch.dice1.color="red";
		    this.ssearch.dice2.color="gold";

		} else {
 		    if (this.ssearch.status == 2){
			this.ssearch.dice2.color="red";
			this.ssearch.dice1.color="gold";

		    }
		}
	    this.set('ssearch.dice1.color',this.ssearch.dice1.color);
	    this.set('ssearch.dice2.color',this.ssearch.dice2.color);
	},
	roll: function(){
	    if (this.ssearch.status == 0 ) {
		this.ssearch.dice1.roll();
		this.ssearch.dice2.roll();
		this.ssearch.status = 1;
		this.setColors();
		
		this.set('ssearch.dice1.value',this.ssearch.dice1.value);
		this.set('ssearch.status',this.ssearch.status);
		this.set('ssearch.dice2.value',this.ssearch.dice2.value);
	    }
	}
    });
}());

