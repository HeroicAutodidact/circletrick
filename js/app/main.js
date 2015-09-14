define(function(require){
		var Donut = require('./donut');
		var canvas = document.getElementById('theCanvas');
		var c = canvas.getContext('2d');

		//!//
		c.translate(canvas.width/2,canvas.height/2);
		d = new Donut(c, 20, 50, 2*Math.PI,'grey', 'black', 5);
		d.draw();
		//~!//
});