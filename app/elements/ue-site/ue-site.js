/*global Polymer*/
(function() {
    'use strict';

    Polymer({
	is: 'ue-site',
	
	properties: {
            site: {
		type: Object,
		notify: true
            }
	},
	roll: function(){
	    this.site.search.dice1.roll();
	    this.site.search.dice1.color = "red";
	    this.site.search.dice2.roll();
	    this.set('site.search.dice1.value',this.site.dice1.value);
	    this.set('site.search.dice1.color',this.site.dice1.color);
    	    this.set('site.search.dice2.value',this.site.dice2.value);
	}

    });
}());
