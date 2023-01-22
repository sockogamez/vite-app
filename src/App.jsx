import Index  from "./pages/Index"
import Detail from "./pages/Detail";
import { BrowserRouter,Routes,Route} from "react-router-dom"

function App() {  
  return (
   <BrowserRouter> 
    <Routes>
      <Route path="/" element={ <Index/> } />            
      <Route path="/detail/:id/:nombre/:residencia/:imagen" element={ <Detail/> } />
    </Routes>
   </BrowserRouter>
  );
}

export default App;

/* 
Documentacion 
Version 1.o
Socko Gamez 
Enero 2023

Enrutamiento en React con la librería "react-router-dom". Se están importando tres componentes, "Index" y 
"Detail" desde los archivos "./pages/Index" y "./pages/Detail" respectivamente, y se están importando 
también los componentes "BrowserRouter", "Routes" y "Route" de la librería "react-router-dom".

En la función "App", se está utilizando el componente "BrowserRouter" para indicar que se va a utilizar 
enrutamiento en la aplicación. Dentro de este componente, se está utilizando el componente "Routes" para 
definir las rutas disponibles en la aplicación. Se están definiendo dos rutas:
La primera ruta, con "path='/'" es la ruta principal de la aplicación, y su elemento asociado es el 
componente "Index" importado anteriormente.
La segunda ruta, con "path='/detail/:id/:nombre/:residencia/:imagen'" es una ruta detallada, que recibe 
parámetros dinámicos, y su elemento asociado es el componente "Detail" importado anteriormente.
Finalmente, la función App es exportada como componente.

*/
