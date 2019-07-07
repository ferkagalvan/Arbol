class Arbol{
	constructor(c, e, al, an, x, y, rr, h){
		this.Color = c;
        this.Edad = e;
		this.Altura = al;
		this.Ancho = an;
		this.X = x;
		this.Y = y;
        var radio = this.Ancho/2;
        this.RadioCopa = radio;
        this.RadioRueda = rr;
        this.DistanciaCP = h;
	}

	Dibujar(contextoDeDibujo){

		//Crear una pluma con el color
		contextoDeDibujo.strokeStyle = this.Color; // Stroke lines in blue

        var xa = 0;
        var ya = 0;
        var xi = 0;
        var yi = 0;
        var xc = this.X + this.RadioCopa;
        var yc = this.Y + this.RadioCopa;
        var isPrimerPunto = true;
        
		for (var alfa = 0; alfa <= 2*Math.PI; alfa=alfa+0.01) {
            xi = xc + ((this.RadioCopa+this.RadioRueda)*Math.sin(alfa))-(this.RadioRueda*Math.sin(alfa*(1+(this.RadioCopa/this.RadioRueda))));
            yi = yc + ((this.RadioCopa+this.RadioRueda)*Math.cos(alfa))-(this.RadioRueda*Math.cos(alfa*(1+(this.RadioCopa/this.RadioRueda))));
            if(!isPrimerPunto){
                //Trazar línea
                contextoDeDibujo.beginPath();
                contextoDeDibujo.moveTo(xa, ya);
                contextoDeDibujo.lineTo(xi, yi);
                contextoDeDibujo.stroke();
                

            }
            isPrimerPunto=false;
            xa = xi;
            ya = yi;

        }

        //edad arboles
        contextoDeDibujo.fillStyle ='rgb(55,65,5)'
        contextoDeDibujo.fillText("Edad 7",22,150);
        contextoDeDibujo.fillText("Edad 20",190,180);
        contextoDeDibujo.fillText("Edad 10",370,215);
        contextoDeDibujo.font ='bold 15px sans';
        
        contextoDeDibujo.stroke();


        contextoDeDibujo.beginPath();
        contextoDeDibujo.strokeStyle = "brown";
        contextoDeDibujo.rect(40,97,20,40);
        contextoDeDibujo.stroke();


        contextoDeDibujo.beginPath();
        contextoDeDibujo.strokeStyle = "brown";
        contextoDeDibujo.rect(200,108,30,60);
        contextoDeDibujo.stroke();


        contextoDeDibujo.beginPath();
        contextoDeDibujo.strokeStyle = "brown";
        contextoDeDibujo.rect(370,119,40,80);
        contextoDeDibujo.stroke();





     
    }
   
   
}

/*

        contextoDeDibujo.beginPath();
        contextoDeDibujo.moveTo(this.X+alfa,
                                this.Y+6*alfa*5);
        contextoDeDibujo.lineTo(this.X+alfa,
                                this.Y+5*alfa*2);
        
        contextoDeDibujo.stroke()





   
       /*
        contextoDeDibujo.beginPath();
        contextoDeDibujo.moveTo(this.X+alfa,
        						this.Y+8*alfa*4);
        contextoDeDibujo.lineTo(this.X+alfa+3,
        						this.Y+4*alfa*2);
        contextoDeDibujo.stroke();
        */
        


        	

	
