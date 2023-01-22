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

//<Button as={Link} to="/" >Regresar</Button>
