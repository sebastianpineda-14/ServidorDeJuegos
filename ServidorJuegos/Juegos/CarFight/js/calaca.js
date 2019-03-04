function aleatorio(piso, techo) {
	return Math.floor(Math.random() * (techo - piso + 1)) + piso;
}

function posicion(){
	var posicion = aleatorio(1, 5)
    switch(posicion){
        case 1:
            return 100;
            break;
        case 2:
            return 165;
            break;
        case 3:
            return 230;
            break;
        case 4:
            return 295;
            break;
        case 5:
            return 360;
            break;
        default:
			return 100;
            break;
    }
}

function Calaca(y, x) {
	var opc = aleatorio(1, 100) % 2;
	if (opc == 1)
        this.img = $( "#calaca_1")[0];	
	else
		this.img = $( "#calaca_2")[0];		
	this.x = 0;
	this.y = posicion();
    
	this.velocidad = 0;
	
	while(this.velocidad == 0)
		this.velocidad=aleatorio(1, 5);
			
	this.dibujar = function(ctx){
		var img = this.img;
		ctx.drawImage(img,this.y, this.x);
	}
	
	this.actualizar = function(){
		this.x += this.velocidad;
		this.x = (600 + this.x)%600;
		
		if(this.x>=595){
			//alert("Y="+this.x);
			this.y = posicion();
			this.velocidad=aleatorio(1, 4);
		}
	}
}
