define(function(require){
		var Ripple = require('./ripple');
		var Donut = require('./donut');
		var canvas = document.getElementById('theCanvas');
		var c = canvas.getContext('2d');

		//!//

		c.translate(canvas.width/2,canvas.height/2);

		// d = new	Donut(c, 30, //inner radius
		// 									 40, //outer radius
		// 									 2 * Math.PI, //arcangle
		// 									 'black',  //fill
		// 									 'grey',
		// 									 5);
		// d.drawAround();
		// m = new	Donut(c, 10, //inner radius
		// 									 20, //outer radius
		// 									 2 * Math.PI, //arcangle
		// 									 'black',  //fill
		// 									 'grey',
		// 									 5);
		// m.drawAround();


		r = new Ripple(c,100,1,'black',10);
		r.draw();
})