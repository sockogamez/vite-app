import { Link} from "react-router-dom"
import {encode as base64_encode} from 'base-64';

function PersonList({persons,deletePerson}) {
  if (persons.length === 0) { 
    return <div>No hay personajes aun....</div>;
  }

  return (
    <div className="space-x-4 space-y-4 p-2 grid grid-cols-g">
      
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
//"/detail/1/SOCORRO/MICASA/imagen"