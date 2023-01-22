import { Link} from "react-router-dom"
import {encode as base64_encode} from 'base-64';

function PersonList({persons,deletePerson}) {
  if (persons.length === 0) { 
    return <div>No hay personajes aun....</div>;
  }

  return (
    <div className="space-x-4 space-y-4 p-2 grid grid-cols-6">
      
      {persons.map((item) => (
        <div className=" text-white max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-black dark:border-gray-700 dark:hover:bg-blue-900" >
          <div key={item.id}>
              <img className="rounded-t-lg" src={item.image}/>
              <h1 className="text-xl font-bold capitalize" >{item.name}</h1>            
              <p className="text-gray-300 text-sm" >Residencia: {item.location.name}</p>
              <button onClick={()=> deletePerson(item.id) } className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-red-600 rounded-lg hover:bg-red-600 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-100 p-4 " >Eliminar</button>
              
              <Link to={`detail/${item.id}/${item.name}/${item.location.name}/${base64_encode(item.image)}`}>
                <button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button">Detalle</button>
              </Link>
          </div>        
        </div>
      ))}
     
    </div>
  );
}

export default PersonList;

/*
Documentacion 
Version 1.o
Socko Gamez 
Enero 2023

Componente "PersonList" que se utiliza para mostrar una lista de personajes. El componente importa dos 
funciones de "react-router-dom" y una función de "base-64" llamada "encode".

La función "PersonList" recibe dos propiedades como argumentos, "persons" y "deletePerson". "persons" es 
una matriz que contiene los datos de los personajes y "deletePerson" es una función que se llama cuando 
se hace clic en el botón Eliminar.

La función "PersonList" comienza comprobando si la matriz "persons" está vacía. Si está vacía, devuelve 
una etiqueta "div" con el mensaje "No hay personajes aún....".

Si la matriz "persons" no está vacía, se devuelve un elemento "div" con una clase 
"space-x-4 space-y-4 p-2 grid grid-cols-6". Dentro de este elemento, se utiliza la función "map" para 
recorrer la matriz "persons" y renderizar un componente "div" para cada elemento de la matriz.

Cada componente "div" tiene una clase CSS para darle estilos, una imagen que se carga con la propiedad 
src con el valor de la propiedad image de cada elemento de la matriz persons, una etiqueta h1 con el valor 
de la propiedad name de cada elemento de la matriz persons, una etiqueta p con el valor de la propiedad 
location.name de cada elemento de la matriz persons, un botón con un evento onClick que llama a la función 
deletePerson con el valor de la propiedad id de cada elemento de la matriz persons, y un botón que es un 
enlace a una ruta de detalle con los valores de id, name, location.name y la imagen codificada en base64 
de cada elemento de la matriz persons.

Finalmente, el componente "PersonList" se exporta al final del archivo para que pueda ser importado y 
utilizado en otro lugar de la aplicación.

*/