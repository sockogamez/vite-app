import { Link } from "react-router-dom";
import { useContext } from "react";
import { PersonContext } from "../context/PersonContext";

function PersonDetail({ id, nombre, residencia, imagen }) {
  const {version} = useContext(PersonContext);


  if (nombre.length === 0) {
    return <div>No hay seleccionado a un personaje....</div>;
  }

  return (
   
    <div className="space-x-4 space-y-4 p-2 grid grid-cols-1">
      <div className=" text-white max-w-max bg-white border border-gray-200 rounded-lg shadow dark:bg-black dark:border-gray-700 " >
        <img className="rounded-t-lg" src={imagen} />
        <h1 className="text-xl font-bold capitalize">{nombre}</h1>
        <p>
           {residencia}
        </p>
        
        <Link to="/">
          <button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button">Regresar</button>
        </Link>
        <p className="text-gray-300 text-sm text-right">Bootcamp Version {version}</p>
      </div>
    </div>
  );
}

export default PersonDetail;

/*
Documentacion 
Version 1.o
Socko Gamez 
Enero 2023


Componente de React llamado "PersonDetail" que se utiliza para mostrar los detalles de un personaje seleccionado. 
El componente importa dos funciones de "react-router-dom" y una función de "react" llamada "useContext".

La función "PersonDetail" recibe cuatro propiedades como argumentos: "id", "nombre", "residencia" e "imagen". 
Estas propiedades son los detalles del personaje seleccionado.

La función "PersonDetail" utiliza el hook "useContext" para obtener el valor de la variable "version" del contexto 
"PersonContext".

La función "PersonDetail" comienza comprobando si la longitud del nombre es 0. Si es así, devuelve una etiqueta 
"div" con el mensaje "No hay seleccionado a un personaje....".

Si el nombre no está vacío, se devuelve un elemento "div" con una clase "space-x-4 space-y-4 p-2 grid grid-cols-1". 
Dentro de este div se encuentra otro div con varias clases CSS para darle estilo al contenido. Dentro de este div, 
se muestran los detalles del personaje seleccionado como una imagen, un título con el nombre del personaje, 
un párrafo con la residencia del personaje, un botón para regresar a la página principal y un párrafo con la 
versión obtenida del contexto.

"PersonDetail" que se utiliza para mostrar los detalles de 
un personaje seleccionado, se obtiene una versión de un contexto compartido, comprueba si se ha seleccionado 
un personaje y si no muestra un mensaje y si si muestra una estructura HTML con los detalles del personaje 
seleccionado y un botón para regresar a la página principal.

*/
