/*global dice*/
var site = function(spec){
    var that;
    that = {name: spec.name,
	    image: spec.image,
	    active_dice: 0,
	    state: "IN_SEARCH",
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
	   };
    return that;
};
