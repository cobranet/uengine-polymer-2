/*global Polymer,alert,dice */

(function() {
    'use strict';

    Polymer({
      is: 'ue-game',

      properties: {
        game: {
            notify: true,
            value: function(){
		return {
		    sites: [{name: "Halebeard Peek",
			     image: "../../images/pole.png",
			     active_dice: 0,
			     search: { status: 0,
				       row1: ["_","_","_"],
				       row2: ["_","_","_"],
				       row3: ["_","_","_"],
				       dice1: dice({
					   value: 0,
					   color: "gold",
					   dotcolor: "black",
					   clickable: false,
					   rollable: true,
					   dicesize: 60
				       }),			     
				       dice2: dice({
					   value: 0,
					   color: "gold",
					   dotcolor: "black",
					   clickable: false,
					   rollable: true,
					   dicesize: 60
				       }),
				     }
			    },
			    {name: "Mistery Desert",
			     image: "../../images/desert.png",
			     active_dice: 0,
			     search: { status: 0,
				       row1: ["_","_","_"],
				       row2: ["_","_","_"],
				       row3: ["_","_","_"],
				       dice1: dice({
					   value: 0,
					   color: "gold",
					   dotcolor: "black",
					   clickable: false,
					   rollable: true,
					   dicesize: 60
				       }),			     
				       dice2: dice({
					   value: 0,
					   color: "gold",
					   clickable: false,
					   rollable: true,
					   dotcolor: "black",
					   dicesize: 60
				       }),
				     }
			    }
			   ],
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
 

