// import permite traer modulos externos para ser utilizados dentro del archivo
import React from 'react';

// export por defualt es para que al importar el archivo lo que se está importando es la clase
export default class Title extends React.Component{
	// solo debe haber un elemento padre html en el return, pero puede haber multiples hijos html
	// las props son inmutables, por tanto no se pueden modificar (solo lectura), por tanto tendra el valor asignado en la llamada del componente
	// si se va usar datos q se van a ir modificando en la ejecucion de la app, se debe usar el state
	render(){
		return(
			<div>
				<h1>Places</h1>
				<p>Decubre lugares usando la app</p>
			</div>
			
		);
	}
}