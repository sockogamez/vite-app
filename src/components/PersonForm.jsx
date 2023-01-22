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
