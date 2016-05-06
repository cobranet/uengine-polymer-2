/*global Polymer,alert,dice,site */

(function() {
    'use strict';

    Polymer({
      is: 'ue-game',
	handleResponse: function(data){
	    var sites = [];
	    var i;
	    for (i=0;i<data.detail.response.length;i++){
		sites.push(site(data.detail.response[i]));
	    }
	    this.set("game.sites",sites);
	    console.log(this.game);
	    
	},
      properties: {
        game: {
            notify: true,
            value: function(){
		return {
		    sites: [],
		    dices: [dice({ value: 3,
				   dicesize: 80,
				   color: "gold",
				   clickable: true,
				   rollable: true,
				   dotcolor: "black"
				 }),
			    dice({ value: 5,
				   dicesize: 50,
				   color: "red",
				   clickable: true,
				   rollable: true,
				   dotcolor: "black"
				 }),
			    dice({ value: 1,
				   dicesize: 120,
				   color: "blue",
				   clickable: true,
				   rollable: true,
				   dotcolor: "red" 
				 })
			   ]
		    
		};
	    }
        }
      }
    });
}());
 

