var dice = function (spec){
    var that;
    that = {
	value: spec.value,
	dicesize: spec.dicesize,
	color: spec.color,
	dotcolor: spec.dotcolor,
	rollable: spec.rollable, 
	clickable: spec.clickable,
	roll: function(){
	    if (that.rollable ){
		that.value = Math.floor((Math.random() * 6) + 1);
	    }
	}
    };
    return that;
};
