import { createContext, useState,useEffect } from "react";

export const PersonContext = createContext();

export function PersonContextProvider(props) {
  let version = "1.0";
  
  return (
    <PersonContext.Provider
      value={{
        version
      }}
    >
      {props.children}
    </PersonContext.Provider>
  );
}

/*
Documentacion 
Version 1.o
Socko Gamez 
Enero 2023

Componente que proporciona un contexto para compartir datos entre componentes. El componente 
importa tres funciones de React: "createContext", "useState" y "useEffect".

La primera línea de código exporta una constante "PersonContext" utilizando la función "createContext" 
de React. Esta constante se utilizará para crear un contexto que se puede compartir entre componentes.

Luego, se define una función "PersonContextProvider" que es el componente que proporcionará el contexto. 
Dentro de la función, se define una variable "version" con un valor de "1.0".

El componente "PersonContextProvider" devuelve un elemento "PersonContext.Provider" de React. El valor 
de este elemento es un objeto con una propiedad "version" que contiene el valor de la variable "version" 
anteriormente definida. El componente "PersonContextProvider" también tiene una propiedad "children" 
que contiene los componentes hijos dentro de él.

En resumen, este código crea un contexto compartido llamado "PersonContext" que se puede utilizar para 
compartir la variable "version" entre componentes y se proporciona a través de un componente específico 
"PersonContextProvider".

*/