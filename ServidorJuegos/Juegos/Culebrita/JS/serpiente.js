

$(document).ready(function() {
		//Desarrollado y Ambientado por Neider Puentes
		//Año 2019
	// Creamos un contexto 2d de nuestro canvas
	var canvas = $("#culebrita")[0];
	var context = canvas.getContext("2d");
	var width = $("#culebrita").width();
	var height = $("#culebrita").height();

	var Celda = 10;//tamaño de la celda
	var d;
	var food;
	var Puntaje;
	var Nivel = 40; // velocidad de movimiento
	var serpiente;
	
	
	function init()
	{
		d = "right"; 
		createserpiente();
		createFood();
		Puntaje = 0;

		if(typeof gameLoop != "undefined") {
			clearInterval(gameLoop);
		}
 
		gameLoop = setInterval(paint, 500 / Nivel);
	}
 
	init();

	// Creamos la culebrita
	function createserpiente()
	{
		var length = 5;
		serpiente = []; 
 
		for(var i = length - 1; i >= 0; i--)
		{
			serpiente.push({ x: i, y: 0 });
		}
	}

	//se añade la comida de la culebrita
	function createFood()
	{
		food = {
			x: Math.round(Math.random() * (width - Celda) / Celda), 
			y: Math.round(Math.random() * (height - Celda) / Celda), 
		};
	}

	//se ponen los cuadros de la culebrita
	function paint()
	{
		context.fillStyle = "silver";
		context.fillRect(0, 0, width, height);
		context.strokeStyle = 'black';
		context.strokeRect(0, 0, width, height);
		
		var nx = serpiente[0].x;
		var ny = serpiente[0].y;
		
		if (d == "right") {
			nx++;
		} else if (d == "left") {
			nx--;
		} else if (d == "up") {
			ny--;
		} else if (d == "down") {
			ny++;
		}
		
		if (nx == -1 || nx == width / Celda || ny == -1 || ny == height / Celda || checkCollision(nx, ny, serpiente)) {			
			init();
 			return;
		}
		
		if(nx == food.x && ny == food.y) {
			var tail = {
				x: nx, 
				y: ny
			};
			Puntaje++;
			createFood();
		} else {
			var tail = serpiente.pop(); 
 
			tail.x = nx;
			tail.y = ny;
		}
		
		serpiente.unshift(tail); 
		
		for(var i = 0; i < serpiente.length; i++) {
			var c = serpiente[i];
			paintCell(c.x, c.y);
		}

		paintCell(food.x, food.y);
		
		var PuntajeText = "Puntaje: " + Puntaje; //Aqui se esta enviando la informacion del puntaje que se acumula Para el uso del juego, puede manejar la variable "Puntaje"
		
		context.fillText(PuntajeText, 20, height - 20);
	}
	
	//Pintamos la celda	
	function paintCell(x, y)
	{
		context.fillStyle = "green";
		context.fillRect(x * Celda, y * Celda, Celda, Celda);
		context.strokeStyle = 'green';
		context.strokeRect(x * Celda, y * Celda, Celda, Celda);
	}
	
	//Verificiamos si hubo alguna colisión (si la hubo el juego se reinicia)
	function checkCollision(x, y, array)
	{
		for(var i = 0; i < array.length; i++)
		{
			if(array[i].x == x && array[i].y == y) {
				alert('y');
				sleep(2000);
				sleep(3000);
				return true;
			}
		}
 		return false;
	}
		
	// Capturamos la pulsación de las teclas
	$(document).keydown(function(e) {
		var key = e.which;
		
		if (key == "37" && d != "right") {
			d = "left";
		} else if (key == "38" && d != "down") {
			d = "up";
		} else if (key == "39" && d != "left") {
			d = "right";
		} else if (key == "40" && d != "up") {
			d = "down";
		}
	});
});
