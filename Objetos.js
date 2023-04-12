const listaDeCompras = {
    "manzanas": 5,
    "platanos": 2,
    "leche": 1,
    "pan": 3,
    "huevos": 12
  };

  console.log('Este es el ejercicio a realizar: ', 'manzanas: 5', 'platanos: 2'
  , 'leche: 1', 'pan: 3' , 'huevos: 12', );

  console.log('Crea un arreglo que contenga solamente los nombres de los artículos que se quieren comprar. Para ello, utiliza la función Object.keys().', + '<br>',
  'Crea un arreglo que contenga solamente las cantidades de cada artículo. Para ello, utiliza la función Object.values().',+ '<br>',
  'Crea un arreglo que contenga pares de clave-valor en forma de arreglos, donde la clave sea el nombre del artículo y el valor sea la cantidad que se desea comprar. Para ello, utiliza la función Object.entries().',+ '<br>')

console.log('Este es el ejercicio resuelto.');
  const comprar = Object.keys(listaDeCompras);
  console.log( 'Aqui esta la lista de los articulos que se quieren comprar: ' + comprar  );

  const cantidades = Object.values(listaDeCompras);
  console.log('Estas son solo las cantidades de los articulos que se quienen comprar: ' + cantidades);

  const arregloPares = Object.entries(listaDeCompras);
  console.log('Este es el arreglo de todo lo que se quiene comprar: ' + arregloPares );