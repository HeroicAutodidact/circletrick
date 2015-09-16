"use strict";

define(function(){
	//Donut constructor

	var dcan,dctx; //Canvas and context used exclusively for making donuts

	var Donut = function(ctx,
											 ir, //inner radius
											 or, //outer radius
											 arcang, //arcangle
											 fill,  //fill
											 stroke,
											 sw){ //strokewidth
		this.ctx = ctx;
		this.ir = ir;
		this.or = or;
		this.fill = fill;
		this.stroke = stroke;
		this.arcang = arcang;
		this.sw = sw;
		this.center = this.or+this.sw*.5; //x and y coordinate of the donut's
																				 //center (they will be the same).
		if(!dcan){
			this.createDcan();
		};
	};


	Donut.prototype.createDcan = function(){
		dcan = document.createElement('canvas');
		dcan.width = this.ctx.canvas.width;
		dcan.height = this.ctx.canvas.height;
		dctx = dcan.getContext('2d');
	};

	Donut.prototype.updateRadii = function(newIr, newOr){
		this.ir = newIr;
		this.or = newOr;
	}

	//Draw a donut about the origin of current context
	Donut.prototype.draw = function(){

		//Setup pallette
		dctx.clearRect(0,0,dcan.width,dcan.height);
		dctx.fillStyle = this.fill;
		dctx.strokeStyle = this.stroke;
		dctx.lineWidth = this.sw;

		//Draw a filled arc
		dctx.beginPath();
		dctx.arc(this.center,this.center,this.or,0,this.arcang,true);
		dctx.fill();
		dctx.stroke();

		//Subtract inner arc
		dctx.beginPath();
		dctx.arc(this.center,this.center,this.ir,0,this.arcang,true);
		dctx.globalCompositeOperation = 'xor';
		dctx.fill();

		//Draw a
		dctx.globalCompositeOperation = 'source-over';
		dctx.stroke();
		this.ctx.drawImage(dcan,0,0);

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

	Donut.prototype.drawAround = function(){
		this.ctx.save();
			this.ctx.translate(-this.center,-this.center);
			this.draw();
		this.ctx.restore();
	};

	//Return the donut for usage
	return Donut;
} ); //end definition
