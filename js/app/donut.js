define(function(){
	//Donut constructor
	var Donut = function(ctx,
											 ir, //inner radius
											 or, //outer radius
											 fill,
											 stroke,
											 arc ){
		this.ctx = ctx;
		this.ir = ir;
		this.or = or;
		this.fill = fill;
		this.stroke = stroke;
		this.arc = arc;
	};

	//Draw a donut about the origin of current context
	Donut.prototype.draw = function(){
		// c.fillStyle = "skyblue";
		// c.fillRect(0,0,canvas.width,canvas.height);

		// //test code to make a masking operation
		// var maskCanvas = document.createElement('canvas');
		// maskCanvas.width = canvas.width;
		// maskCanvas.height = canvas.height;
		// var maskCtx = maskCanvas.getContext('2d');

		// maskCtx.fillStyle = "black";
		// maskCtx.fillRect(0,0, maskCanvas.width, maskCanvas.height);
		// maskCtx.globalCompositeOperation = 'xor';
		// maskCtx.arc(30,30,10,0,2*Math.PI);
		// maskCtx.fill();
		// c.drawImage(maskCanvas,0,0);

	};

	//Return the donut for usage
	return Donut;
} ); //end definition
