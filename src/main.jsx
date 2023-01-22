import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import "./index.css"
import { PersonContextProvider } from './context/PersonContext'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <PersonContextProvider>
      <App />
    </PersonContextProvider>
  </React.StrictMode>,
)


/* 

Documentacion 
Version 1.o
Socko Gamez 
Enero 2023

Este código es el punto de entrada de una aplicación React. Se están importando varios módulos:

React y ReactDOM desde "react" y "react-dom/client" respectivamente. Estos son los módulos básicos 
para construir aplicaciones React.
El componente "App" desde "./App", que es el componente principal de la aplicación.
Un archivo de estilos "./index.css"
El componente "PersonContextProvider" desde "./context/PersonContext"
El método ReactDOM.createRoot() es una función para crear un root container y renderizar un componente dentro 
del mismo. El primer argumento es el elemento HTML donde se renderizará el componente, en este caso, el elemento 
con id "root" del archivo HTML.

Dentro del método render se está usando el componente "React.StrictMode" el cual ayuda a detectar problemas de 
rendimiento en el desarrollo.

Dentro de "StrictMode" se está usando el componente "PersonContextProvider" para proveer un contexto para la 
aplicación, y dentro de este se está renderizando el componente "App" creado anteriormente.

Finalmente, el método "render" se está invocando sin argumentos adicionales, ya que todo se está especificando 
dentro de los paréntesis.

*/