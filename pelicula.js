//'use strict'

//console.log('Cargado JS');
class Pelicula{
  //String titulo:
  constructor(){
    console.log('Se ha creado una Pelicula');
    this.titulo = 'Tiroteo en Mississippi';
    this.pueblo = new Pueblo('TodoPolvo', 'muy polvoriento, en mitad del desierto del Arizona y donde nadie quiere llegar');
    this.narrador = new Narrador();
    this.paco = new PersonajeBueno('Paco');
    this.maria = new PersonajeBueno('Maria');
    this.morgan = new PersonajeMalo('Morgan');
    this.VinDiesel = new PersonajeBueno('Vin Diesel');
    this.arma = new Arma;
    this.iniciar()
  }
  iniciar(){
    document.write(`<h1>${this.titulo}</h1>`);
    document.write(`<p>${this.pueblo.nombre} era un pueblo ${this.pueblo.descripcion}.`);
    this.narrador.hablar('Era una soleada mañana');
    this.paco.hablar(`Hola ${this.maria.nombre}. Hoy hace un dia espléndido`);
    this.maria.hablar(`Hola ${this.paco.nombre}, la verdad es que si`);
    this.narrador.hablar('Ambos se miraron un instante y siguieron su camino . . . ');
    this.morgan.hablar(`Vaya pueblo mas . . . polvoriento`);
    this.morgan.hablar(`¡Eh tu! ¡Pringao! Dame tu caballo y la cartera`);
    this.paco.hablar(`No por favor, no me hagas daño, tengo familia`);
    this.VinDiesel.hablar('¿Alguien ha dicho familia?');
    this.morgan.hablar('Vin Diesel?,  ultimas palabras . . .');
    this.VinDiesel.hablar('Familia');
    this.morgan.hablar(`preparate . . . `);
    this.morgan.arma.disparar();
  }

}

class Pueblo{
  constructor(nombre, descripcion){
    this.nombre = nombre;
    this.descripcion = descripcion;
  }
}

class Narrador{
  hablar(texto){
    document.write(`<p> ${texto}.</p>`);
  }
}

class Personaje{
  constructor(nombre){
    this.nombre = nombre;
    this.arma = new Arma();
  }

  hablar(texto){
    document.write(`<p><span class="negrita">${this.nombre}:</span> ${texto}.</p>`);
  }
}

class PersonajeBueno extends Personaje{
  hablar(texto){
    document.write(`<p><span class="bueno negrita">${this.nombre}:</span> ${texto}.</p>`);
  }
}

class PersonajeMalo extends Personaje{
  hablar(texto){
    document.write(`<p><span class="malo negrita">${this.nombre}:</span> GRRRRRR . . . ${texto}.</p>`);
  }
}

class Arma{
  disparar(){
    document.write('<p>¡¡PIUM PIUM!!</p>');
  }

  //Cargador
  //Balas
  //Disparar pum / click

}

var app = new Pelicula()
