define( function(require){
	Donut = require('./donut');


	var Ripple = function(ctx,
												size,  //Outer radius of the ripple
												speed, //Speed at which each rings expand
												fill,
												N){
		this.ctx = ctx;
		this.size = size;
		this.fill = fill;
		this.speed = speed;
		this.maxThick = size * .10
		this.N = N

		var padding = 4;
		var or = this.maxThick;
		var ir = 0
		this.rings = [];
		// for(var i=1; i<N+1; i++){
		// 	alert(i);
		// 	ring = this.createRing(or-thick, or);
		// 	this.rings.push(ring);
		// 	or -= i*thick * 2
		// }
		while(or < size){
			//Load on a new ring with max thickness at center
			this.rings.push(this.createRing(ir,or));

			//set radii for next ring
			ir = or + padding;
			or = ir + this._thickness(ir);
		}
	};

	Ripple.prototype._thickness = function(or){
		return this.maxThick * (this.size - or)/this.size
		//return this.maxThick * Math.exp(-4*or / this.size);
	};

	Ripple.prototype.draw = function(){
		for(var i=0; i<this.N; i++){
			this.rings[i].drawAround();
		}
	};


	Ripple.prototype.createRing = function(ir,or){
		return new Donut(this.ctx,
											 ir, //inner radius
											 or, //outer radius
											 2 * Math.PI, //arcangle
											 this.fill,  //fill
											 this.fill,  //stroke
											 0); //strokewidth)
	};

	Ripple.prototype.update = function(){
		for(var i=0;i<this.rings;i++){

		}

	};

	return Ripple;
});