/*global Polymer */
(function() {
    'use strict';
    
    Polymer({
	is: 'ue-searchcell',
	properties: {
            value: {
		type: String,
		notify: true
            },
	    dicevalue:{
		type: Number,
		notify: true
	    },
	    empty: {
		value: true
	    },
	    row: {
		type: String
	    },
	    col: {
		type: Number
	    }
	    
	},
	handleTap: function(){
	    if(this.dicevalue != 0 && this.empty == true)  {
		this.value=this.dicevalue;
		this.empty= false;
		this.fire("score",{row: this.row , col: this.col , val: this.dicevalue});
	    }
	}
    });
}());
