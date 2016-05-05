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
	    }
	    
	},
	handleTap: function(){
	    if(this.dicevalue != 0 && this.empty == true)  {
		this.set('value',this.dicevalue);
		this.set('empty',false);
		this.fire("score",{cell: this});
	    }
	}
    });
}());
