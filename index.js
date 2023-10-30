const comidas = [];


console.log(comidas);


const ingresarDatos = () => prompt('¿que desea comer hoy?');

const mensaje = (texto, comida, error = false) => {
	if (error) {
		alert(texto + comida + "', el mismo ya está dentro de la lista del pedido, o ingreso un plato");
		console.error(texto + comida + "', el plato ya está dentro del pedido");
	} else {
		alert(texto + comida + "'");
	}
};

const agregarProducto = () => {
	let confirmacion = confirm('¿que desea comer hoy?'),
		comida;

	while (confirmacion) {
		comida = ingresarDatos();

		if (comida !== null) {
			comida = comida.trim().toLowerCase();
		}

		console.log(comida);

        if (comidas.indexOf(comida) === -1 && comida !== null && comida !== '') {
			comidas.push(comida);
			mensaje("Se agrego un plato nuevo' ", comida);

			console.log(comidas);
		} else {
			mensaje(":( Error al agregar el plato' ", comida, true);

			console.log(comidas);

        
		}
        
            
        
		confirmacion = confirm('¿Desea agregar un plato nuevo?');
	}
};

agregarProducto();

