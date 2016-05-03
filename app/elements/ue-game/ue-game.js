/*global Polymer */
(function() {
    'use strict';

    Polymer({
      is: 'ue-game',

      properties: {
        game: {
            notify: true,
            value: function(){
		return {
		    dices: [{ value: 3,
			    dicesize: 80,
			      color: "gold",
			      dotcolor: "black"
			    },
			    { value: 5,
			      dicesize: 50,
			      color: "red",
			      dotcolor: "black"
			    },
			    { value: 1,
			      dicesize: 120,
			      color: "blue",
			      dotcolor: "red"
			    }
			   ]
		};
	    }
        }
      }
    });
}());
 

