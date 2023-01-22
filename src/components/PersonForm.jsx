import { useState,useContext } from "react";
import { PersonContext } from "../context/PersonContext";


function PersonForm({ createPerson }) {
   
  const {version} = useContext(PersonContext);

  const [nombre, setNombre] = useState("");
  const [residencia, setResidencia] = useState("");

  function uuidv4() {
    return ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, (c) =>
      (
        c ^
        (crypto.getRandomValues(new Uint8Array(1))[0] & (15 >> (c / 4)))
      ).toString(16)
    );
  }


  const fcnEnviar = (e) => {
    e.preventDefault();

    //Armamos el objeto base dela api para manejarlo local sin tokenizar
    const newPerson = {
      id: uuidv4(),
      name: nombre,
      status: "",
      species: "",
      type: "",
      gender: "",
      origin: {
        name: "",
        url: "",
      },
      location: {
        name: residencia,
        url: "",
      },
      image: "https://rickandmortyapi.com/api/character/avatar/19.jpeg",
      episode: [""],
      url: "",
      created: "",
    };

    e.target.nombre.focus();

    createPerson(newPerson);

    setNombre("");
    setResidencia("");
  };

  return (

     <form onSubmit={fcnEnviar}  className="bg-white p-10 mm-4 rounded-md  " >            
     Bootcamp Version {version}
      <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-black" >
       Nombre:
      <input className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-200 dark:border-gray-500 dark:placeholder-gray-400 dark:text-black"
        name="nombre"
        value={nombre}
        onChange={(e) => {
          setNombre(e.target.value);
        }}
      />
       </label>       
       <label  className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">
       Residencia:
      <input  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-200 dark:border-gray-500 dark:placeholder-gray-400 dark:text-black"
        name="residencia"        
        value={residencia}
        onChange={(e) => {
          setResidencia(e.target.value);
        }}
      />       
      </label>     
      <button   className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" >AGREGAR</button>
    </form>
  );
}

export default PersonForm;


/*
Documentacion 
Version 1.o
Socko Gamez 
Enero 2023


Componente llamado "PersonForm" que se utiliza para crear un nuevo personaje. El componente importa 
dos funciones de React "useState" y "useContext" y una función "PersonContext" de "../context/PersonContext".

La función "PersonForm" recibe una propiedad "createPerson" como argumento, que es una función que 
se llama cuando se envía el formulario para crear un nuevo personaje.

La función "PersonForm" utiliza el hook "useContext" para obtener el valor de la variable "version" 
del contexto "PersonContext".

La función "PersonForm" utiliza el hook "useState" para crear dos variables de estado: "nombre" y 
"residencia". Estas variables se utilizan para almacenar el valor de los campos de entrada del formulario.

La función "PersonForm" también define una función "uuidv4" que genera un identificador único para 
el nuevo personaje.

La función "PersonForm" tiene un evento "onSubmit" en el formulario que se ejecuta cuando se envía el 
formulario. El evento llama a la función "fcnEnviar" que se encarga de crear un nuevo objeto "newPerson" 
con los valores de los campos de entrada del formulario, el id generado con la función uuidv4 y una 
imagen predefinida. La función "fcnEnviar" también llama a la función "createPerson" con el objeto 
"newPerson" como argumento, y vacía los campos de entrada del formulario.

Finalmente, el componente "PersonForm" devuelve una estructura de formulario HTML con dos campos de 
entrada para el nombre y la residencia del nuevo personaje, un botón para enviar el formulario y un 
texto que muestra la versión Bootcamp y una versión que es proporcionada por el contexto.
*/