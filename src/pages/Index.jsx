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