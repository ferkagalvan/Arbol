function crearArbol(){

	var myCanvas = document.getElementById("myCanvas");
	var context = myCanvas.getContext("2d");

	context.fillStyle="white";
	context.fillRect(0,0,500,500);

	//declaracion, creacion e inicializacion
	
	var arregloArboles = new Array(
			new Arbol("green","Edad 7", 100, 60, 20, 30, 5, 1),
			new Arbol("Green","Edad 10", 100, 80, 350, 30, 5, 1),
			new Arbol("Green","Edad 20", 100, 70, 180, 30, 5, 1)
			
		);
	for (var i = arregloArboles.length - 1; i >= 0; i--) {
		arregloArboles[i].Dibujar(context);
	
	}
	  

	
}