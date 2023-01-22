import PersonList from "../components/PersonList";
import PersonForm from "../components/PersonForm";
import { useState, useEffect } from "react";

function Index() {  
  
  const [persons, setPersons] = useState();
  const [procesing, setProcesing] = useState();
  const [error, setError] = useState();

  
  useEffect(() => {
    const getPersonajes = async () => {
      try {
        setProcesing(true);
        // Api Rick & Morty
        const respuesta = await fetch(
          "https://rickandmortyapi.com/api/character/?page=1"
        );
        const streamData = await respuesta.json();
        setPersons(streamData);
      } catch (error) {
        // error
        setError(error);
      } finally {
        setProcesing(false);
      }
    };
    getPersonajes().catch(null);
  }, []);

  function deletePerson(id) {
    const { results } = persons;
    const filtredData = results.filter((item) => item.id !== id);
    setPersons({ results: filtredData });
  }

  function createPerson(person) {
    const { results } = persons;
    results.push(person);
    setPersons({ ...persons, results });
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  if (procesing) {
    return <p>Cargando...</p>;
  }

  return (
    <main className="bg-gray-200 h-screen" >        
        <div className="container mx-auto" >
          <PersonForm createPerson={createPerson}/>    
          <PersonList persons={persons?.results || []} deletePerson={deletePerson} />         
       </div >
    </main>
  );
}

export default Index;

/*
Documentacion 
Version 1.o
Socko Gamez 
Enero 2023

Componente  "Index" que muestra una lista de personajes de la serie de televisión "Rick y Morty" en 
una página web. Utiliza los componentes "PersonList" y "PersonForm" importados desde los archivos 
"../components/PersonList" y "../components/PersonForm" respectivamente. También importa los hooks 
"useState" y "useEffect" de React para manejar el estado de la aplicación.

La función principal "Index" utiliza el hook "useState" para definir tres estados: "persons", "procesing" 
y "error". El estado "persons" almacena los datos de los personajes, "procesing" indica si se está cargando 
una petición a la API y "error" almacena cualquier error que pueda ocurrir durante la petición.

La función "Index" también utiliza el hook "useEffect" para realizar una petición a la API de Rick y Morty
cuando el componente se monta. La petición se realiza con la función "fetch" y se espera una respuesta en 
formato JSON. Si la petición tiene éxito, se actualiza el estado "persons" con los datos recibidos, si no 
se actualiza el estado "error" con el error. El estado "procesing" se actualiza a "true" antes de la petición 
y "false" después de la petición.

La función "deletePerson" recibe un "id" como parámetro y filtra los datos de los personajes, eliminando el 
personaje con el "id" especificado. La función "createPerson" recibe un personaje y agrega ese personaje a 
la lista de personajes existentes.

En el cuerpo de la función "Index" se verifica si hay un error o si se está cargando una petición. Si es así, 
se muestra un mensaje correspondiente en pantalla. Si no, se renderiza el componente "PersonForm" y "PersonList" 
pasándoles las funciones "createPerson" y "deletePerson" respectivamente como propiedades. También se pasa el 
estado "persons" como propiedad a "PersonList".

Finalmente, el componente "Index" se exporta para poder ser utilizado en otro lugar de la aplicación.
*/ 

