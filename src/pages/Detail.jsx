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


//<PersonDetail person={person}  />