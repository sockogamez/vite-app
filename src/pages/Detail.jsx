import PersonDetail from "../components/PersonDetail";
import {useParams} from "react-router-dom"
import {decode as base64_decode} from 'base-64';

function Detail() {    
  let params = useParams();  

  const Person =  
  {
    id: params.id,
    nombre: params.nombre,
    residencia: params.residencia,    
    imagen: base64_decode(params.imagen),           
  };
  
  return (
    <main className="bg-gray-200 h-screen" >        
        <div className="container mx-auto" >
        <PersonDetail {...Person}  />       
       </div >
    </main>    
  );
}

export default Detail;

/*
Documentacion 
Version 1.o
Socko Gamez 
Enero 2023

Componente  "Detail" que se utiliza para mostrar los detalles de una persona. El componente 
importa otros dos componentes, "PersonDetail" y "useParams" de "react-router-dom", así como 
una función de "base-64" llamada "decode".

La función "Detail" usa el hook "useParams" para obtener los parámetros de la URL actual. Luego, 
crea un objeto "Person" con los valores obtenidos de los parámetros de la URL. El objeto tiene 4 
propiedades: "id", "nombre", "residencia" y "imagen". El valor de la propiedad "imagen" se 
decodifica utilizando la función "base64_decode" antes de asignarlo al objeto.

Finalmente, el componente "Detail" devuelve una estructura de HTML que contiene un elemento "main" 
con una clase "bg-gray-200 h-screen" y un elemento "div" con una clase "container mx-auto". 
Dentro del elemento "div", se renderiza el componente "PersonDetail" y se le pasa el objeto "Person" 
como props.

El componente "Detail" se exporta al final del archivo para que pueda ser importado y utilizado en 
otro lugar de la aplicación.


*/ 

