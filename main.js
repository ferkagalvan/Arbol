function crearPersona(){

	var myCanvas = document.getElementById("myCanvas");
	var context = myCanvas.getContext("2d");

	context.fillStyle="white";
	context.fillRect(0,0,500,500);


		var arregloElefante = new Array(
			new Persona(21,'red', 200, 60, 10, 100),
			new Persona(23,'green', 300, 60, 210, 100),
			new Persona (26,'Blue', 400, 60, 410, 100)
			
		);
	for (var i = arregloElefante.length - 1; i >= 0; i--) {
		arregloElefante[i].Dibujar(context);

		

	}
	
	

}

	
	
	



	

	

	



	
