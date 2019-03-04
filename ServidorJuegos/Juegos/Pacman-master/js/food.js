function Food(){

	// Comida normal
	this.comida = [
		[2,2],[3,2],[4,2],[5,2],[6,2],[7,2],[8,2],[9,2],[10,2],[11,2],[12,2],[16,2],[17,2],[18,2],[19,2],[20,2],[21,2],[22,2],[23,2],[24,2],[25,2],[26,2],
		[2,3],[7,3],[12,3],[16,3],[21,3],[26,3],
		[7,4],[12,4],[16,4],[21,4],
		[2,5],[7,5],[12,5],[16,5],[21,5],[26,5],
		[2,6],[3,6],[4,6],[5,6],[6,6],[7,6],[8,6],[9,6],[10,6],[11,6],[12,6],[13,6],[14,6],[15,6],[16,6],[17,6],[18,6],[19,6],[20,6],[21,6],[22,6],[23,6],[24,6],[25,6],[26,6],
		[2,7],[7,7],[10,7],[18,7],[21,7],[26,7],
		[2,8],[7,8],[10,8],[18,8],[21,8],[26,8],
		[2,9],[3,9],[4,9],[5,9],[6,9],[7,9],[10,9],[11,9],[12,9],[16,9],[17,9],[18,9],[21,9],[22,9],[23,9],[24,9],[25,9],[26,9],
		[7,10],[21,10],
		[7,11],[21,11],
		[7,12],[21,12],
		[7,13],[21,13],
		[7,14],[21,14],
		[7,15],[21,15],
		[7,16],[21,16],
		[7,17],[21,17],
		[7,18],[21,18],
		[7,19],[21,19],
		[7,20],[21,20],
		[2,21],[3,21],[4,21],[5,21],[6,21],[7,21],[8,21],[9,21],[10,21],[11,21],[12,21],[16,21],[17,21],[18,21],[19,21],[20,21],[21,21],[22,21],[23,21],[24,21],[25,21],[26,21],
		[2,22],[7,22],[12,22],[16,22],[21,22],[26,22],
		[2,23],[7,23],[12,23],[16,23],[21,23],[26,23],
		[2,24],[3,24],[4,24],[7,24],[8,24],[9,24],[10,24],[11,24],[12,24],[13,24],[14,24],[15,24],[16,24],[17,24],[18,24],[19,24],[20,24],[21,24],[24,24],[25,24],
		[4,25],[7,25],[10,25],[18,25],[21,25],[24,25],
		[4,26],[7,26],[10,26],[18,26],[21,26],[24,26],
		[2,27],[3,27],[4,27],[5,27],[6,27],[7,27],[10,27],[11,27],[12,27],[16,27],[17,27],[18,27],[21,27],[22,27],[23,27],[24,27],[25,27],[26,27],
		[2,28],[12,28],[16,28],[26,28],
		[2,29],[12,29],[16,29],[26,29],
		[2,30],[3,30],[4,30],[5,30],[6,30],[7,30],[8,30],[9,30],[10,30],[11,30],[12,30],[13,30],[14,30],[15,30],[16,30],[17,30],[18,30],[19,30],[20,30],[21,30],[22,30],[23,30],[24,30],[25,30],[26,30],
	];

	this.comidaGrande = [
		[2,4],[26,4],[2,24],[26,24]
	];

	for(var i=0; i<this.comida.length; i++){
		this.comida[i][0] *= 16;
		this.comida[i][1] *= 16;
	}

	for(var i=0; i<this.comidaGrande.length; i++){
		this.comidaGrande[i][0] *= 16;
		this.comidaGrande[i][1] *= 16;
	}

	this.ponerComida = function(context){
		for(var i=0; i<this.comida.length; i++){
			context.fillStyle = "green";
			context.fillRect(this.comida[i][0]-2, this.comida[i][1]-2, 4, 4);
		}

		for(var i=0; i<this.comidaGrande.length; i++){
			context.fillStyle = "yellow";
			context.fillRect(this.comidaGrande[i][0]-4, this.comidaGrande[i][1]-4, 8, 8);
		}
	}

	this.comer = function(pos, puntaje, fantasmaComer){
		// centro del pacman
		var posX = pos[0]+16;
		var posY = pos[1]+16;

		for(var i=0; i<this.comida.length; i++){
			if(posX == this.comida[i][0] && posY == this.comida[i][1]){
				this.comida.splice(i,1);
				puntaje += 10;
			}
		}

		for(var i=0; i<this.comidaGrande.length; i++){
			if(posX == this.comidaGrande[i][0] && posY == this.comidaGrande[i][1]){
				this.comidaGrande.splice(i,1);
				puntaje += 100;
				
				fantasmaComer = true;
			}
		}

		return [puntaje, fantasmaComer];
	}

	this.reiniciar = function(){
		this.comida = [
			[2,2],[3,2],[4,2],[5,2],[6,2],[7,2],[8,2],[9,2],[10,2],[11,2],[12,2],[16,2],[17,2],[18,2],[19,2],[20,2],[21,2],[22,2],[23,2],[24,2],[25,2],[26,2],
			[2,3],[7,3],[12,3],[16,3],[21,3],[26,3],
			[7,4],[12,4],[16,4],[21,4],
			[2,5],[7,5],[12,5],[16,5],[21,5],[26,5],
			[2,6],[3,6],[4,6],[5,6],[6,6],[7,6],[8,6],[9,6],[10,6],[11,6],[12,6],[13,6],[14,6],[15,6],[16,6],[17,6],[18,6],[19,6],[20,6],[21,6],[22,6],[23,6],[24,6],[25,6],[26,6],
			[2,7],[7,7],[10,7],[18,7],[21,7],[26,7],
			[2,8],[7,8],[10,8],[18,8],[21,8],[26,8],
			[2,9],[3,9],[4,9],[5,9],[6,9],[7,9],[10,9],[11,9],[12,9],[16,9],[17,9],[18,9],[21,9],[22,9],[23,9],[24,9],[25,9],[26,9],
			[7,10],[12,10],[16,10],[21,10],
			[7,11],[12,11],[16,11],[21,11],
			[7,12],[10,12],[11,12],[12,12],[13,12],[14,12],[15,12],[16,12],[17,12],[18,12],[21,12],
			[7,13],[10,13],[18,13],[21,13],
			[7,14],[10,14],[18,14],[21,14],
			[7,15],[8,15],[9,15],[10,15],[18,15],[19,15],[20,15],[21,15],
			[7,16],[10,16],[18,16],[21,16],
			[7,17],[10,17],[18,17],[21,17],
			[7,18],[10,18],[11,18],[12,18],[13,18],[14,18],[15,18],[16,18],[17,18],[18,18],[21,18],
			[7,19],[10,19],[18,19],[21,19],
			[7,20],[10,20],[18,20],[21,20],
			[2,21],[3,21],[4,21],[5,21],[6,21],[7,21],[8,21],[9,21],[10,21],[11,21],[12,21],[16,21],[17,21],[18,21],[19,21],[20,21],[21,21],[22,21],[23,21],[24,21],[25,21],[26,21],
			[2,22],[7,22],[12,22],[16,22],[21,22],[26,22],
			[2,23],[7,23],[12,23],[16,23],[21,23],[26,23],
			[2,24],[3,24],[4,24],[7,24],[8,24],[9,24],[10,24],[11,24],[12,24],[13,24],[14,24],[15,24],[16,24],[17,24],[18,24],[19,24],[20,24],[21,24],[24,24],[25,24],
			[4,25],[7,25],[10,25],[18,25],[21,25],[24,25],
			[4,26],[7,26],[10,26],[18,26],[21,26],[24,26],
			[2,27],[3,27],[4,27],[5,27],[6,27],[7,27],[10,27],[11,27],[12,27],[16,27],[17,27],[18,27],[21,27],[22,27],[23,27],[24,27],[25,27],[26,27],
			[2,28],[12,28],[16,28],[26,28],
			[2,29],[12,29],[16,29],[26,29],
			[2,30],[3,30],[4,30],[5,30],[6,30],[7,30],[8,30],[9,30],[10,30],[11,30],[12,30],[13,30],[14,30],[15,30],[16,30],[17,30],[18,30],[19,30],[20,30],[21,30],[22,30],[23,30],[24,30],[25,30],[26,30],
		];

		this.comidaGrande = [
			[2,4],[26,4],[2,24],[26,24]
		];

		for(var i=0; i<this.comida.length; i++){
			this.comida[i][0] *= 16;
			this.comida[i][1] *= 16;
		}

		for(var i=0; i<this.comidaGrande.length; i++){
			this.comidaGrande[i][0] *= 16;
			this.comidaGrande[i][1] *= 16;
		}
	}
}