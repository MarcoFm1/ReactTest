import React, { useState } from "react";
import ReactDOM from "react-dom/client";
//import { UserCard } from "./UserCard";
import { Button } from "./button";
//import { Emma } from './firstFuntion'
//import { Saludar } from "./otraFormaComponente"
import { Test } from "./Tarea"
import { Post } from "./Posts"
import { Counter } from "./counter"
import { InputSave } from "./inputUses";


const root = ReactDOM.createRoot(document.getElementById("root"));


const list = [
  {
    id : 1,
    name : "Pepe",
    img : "https://robohash.org/pepe1"
  },
  {
    id : 1,
    name : "Fercho",
    img : "https://robohash.org/pepe2"
  },
  {
    id : 1,
    name : "Facha",
    img : "https://robohash.org/pepe3"
  }
]



root.render(
  <>
    <Button text='Se puede' name ='cambiar'/>

    {/* otra parte */}

    <Test text={false}/>
    
    {/* otra parte */}


    <form onSubmit={(e) => {
      e.preventDefault();
      console.log('contenido subido');
    }}>
      <h1>Formulario</h1>
      <input placeholder="Escribe algo" onChange={function Cachar(e){
        const dat = e.target.value;
        console.log(dat)
      }}></input>

      <button>Enviar</button>
    </form>

    {/* otra parte */}

    <Post/>  

    {/* otra parte */}
  
    {list.map(function (list, i){
      return(
        <div key={i}>   
          <h1>{list.name}</h1> {/* Se usa key={i} para funcionamiento interno de React ya que necesita keys para que si tiene que cambiar un valor lo haga directamente a esa id, sino salta error*/}
          <img src={list.img}/>
        </div>
      )
    })}


    {/* otra parte */}


    <Counter/>
  

    <InputSave/>

  </>
);
