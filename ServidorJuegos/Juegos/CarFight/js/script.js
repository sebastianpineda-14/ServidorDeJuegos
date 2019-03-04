
var jugando;

var suelo ={x:0, y:0};
var imgSuelo= new Image();
imgSuelo.src = "imagenes/ROAD3.png";

$(document).ready(inicio);
$(document).keydown(capturaTeclado);

function inicio(){
	jugando = true;
	miCanvas = $("#mi_canvas")[0];
	contexto = miCanvas.getContext("2d");
	buffer = document.createElement("canvas");
	quica = new Quica();
	calacas = [new Calaca(), new Calaca(),
				   new Calaca(), new Calaca(),
				   new Calaca()];
	run();	
	
	$('#instrucciones').click(function(){
        $('#popup').fadeIn('slow');
        $('.popup-overlay').fadeIn('slow');
        $('.popup-overlay').height($(window).height());
        return false;
    });
    
    $('#close').click(function(){
        $('#popup').fadeOut('slow');
        $('.popup-overlay').fadeOut('slow');
        return false;
    });
    
    $("#iniciar").click(function(){	
		if(jugando==false)
			inicio();	
	});
}

function capturaTeclado(event){
	if(event.which==38 || event.which==87)  //izq 38 87
		quica.actualizar('izquierda');
	if(event.which==40 || event.which==83) //derecha 40 83
		quica.actualizar('derecha');
	if(event.which==39 || event.which==68)  //abajo 39 68
		quica.actualizar('abajo');
	if(event.which==37 || event.which==65) // arriba 37 65
		quica.actualizar('arriba');
	
}

function run(){ 
	buffer.width = miCanvas.width;
	buffer.height = miCanvas.height;
	contextoBuffer = buffer.getContext("2d");
		 
	if(jugando){  
		contextoBuffer.clearRect(0,0,buffer.width,buffer.height);
		
		if(suelo.y > 580){
			suelo.y=0;
		}
		else{
			suelo.y += 20; 
		}
		contextoBuffer.drawImage(imgSuelo, suelo.x, suelo.y, 500, 600,0,0,500,600);
		
		quica.sumarPuntos();
		
		quica.dibujar(contextoBuffer);
		for(i=0;i<calacas.length;i++){
			calacas[i].dibujar(contextoBuffer);
			calacas[i].actualizar();
			if(quica.colision(calacas[i].x,calacas[i].y)){
				quica.sprite = 2;
				quica.vida--;
				$('#pierde')[0].play();
			}
		}
		
		if(quica.vida <= 0)
			jugando = false;
		
		contexto.clearRect(0,0,miCanvas.width,miCanvas.height);
		contexto.drawImage(buffer, 0, 0);
		setTimeout("run()",20);
		
	}else{
		document.getElementById('pedirDatos').style.display = 'block';
		contextoBuffer.clearRect(0,0,buffer.width,buffer.height);
		contextoBuffer.fillStyle = "#ffffff";
		quica.sprite = 3;
		quica.vida = 0;
		quica.dibujar(contextoBuffer);
		contextoBuffer.font = "50px sans-serif";
		contextoBuffer.fillText("PERDEDOR!", 100, 440);
		contextoBuffer.fillStyle = "#ff0000";
		contextoBuffer.font = "15px sans-serif";
		contextoBuffer.fillText("try again", 400, 550);
		contexto.clearRect(0,0,miCanvas.width,miCanvas.height);
		contexto.drawImage(buffer, 0, 0);
	}
	
}


