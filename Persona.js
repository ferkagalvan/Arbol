
class Persona{
	constructor( e, c, al, an, x, y){
		
		this.Edad = e;
		this.Color = c;
		this.Altura = al;
		this.Ancho = an;
		this.X = x;
		this.Y = y;
	}


	Dibujar(contextoDeDibujo){


		//Crear una pluma con el color
		contextoDeDibujo.strokeStyle = this.Color; // Stroke lines in blue

		//Dibujar la cabeza
		var radio = this.Ancho/2;
		contextoDeDibujo.beginPath();
        contextoDeDibujo.arc(this.X+radio, 
        					 this.Y+radio,
            				 radio,
            				 0,
            				 2*3.1416,
            				 true);
        contextoDeDibujo.stroke();
        

        //Dibujar el tronco
        contextoDeDibujo.beginPath();
        contextoDeDibujo.moveTo(this.X+radio,
        						this.Y+2*radio);
        contextoDeDibujo.lineTo(this.X+radio,
        						this.Y+3*radio);
        contextoDeDibujo.stroke();

        //dibujar manos
        var Ancho = this.X;
        var Altura =this.Y+radio;
        contextoDeDibujo.beginPath();
        contextoDeDibujo.moveTo(this.X,
                                this.Y+2.5*radio);
        contextoDeDibujo.lineTo(this.X+Altura/2,
                                this.Y+2.5*radio);

        contextoDeDibujo.stroke();

        //izquierda
        var Ancho=this.X+radio+10;
        var Altura=this.Y+radio+10;
        contextoDeDibujo.beginPath();
        contextoDeDibujo.moveTo(this.X+radio,
                                this.Y+3*Altura/4.7);
        contextoDeDibujo.lineTo(this.X,
                                this.Y+Altura);

        contextoDeDibujo.stroke();

       
        //Dibujar pierna derecha
        var Ancho=this.X+radio+10;
        var Altura=this.Y+radio+10;
        contextoDeDibujo.beginPath();
        contextoDeDibujo.moveTo(this.X+radio,
                                this.Y+3*Altura/4.7);
        contextoDeDibujo.lineTo(this.X+radio*2,
                                this.Y+Altura);

        contextoDeDibujo.stroke();

        //nombres de las personas

        contextoDeDibujo.fillStyle ='rgb(55,65,5)'
        contextoDeDibujo.fillText("Paola",22,260);
        contextoDeDibujo.fillText("Dafne",220,260);
        contextoDeDibujo.fillText("Sofia",420,260);
        contextoDeDibujo.font ='bold 15px sans';
        
        contextoDeDibujo.stroke();


        //edad de las personas

        contextoDeDibujo.fillStyle ='rgb(55,65,5)'
        contextoDeDibujo.fillText("Edad 21",22,280);
        contextoDeDibujo.fillText("Edad 23",220,280);
        contextoDeDibujo.fillText("Edad 26",420,280);
        contextoDeDibujo.font ='bold 15px sans';
        
        contextoDeDibujo.stroke();
        


	}




}