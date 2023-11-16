import React from "react";


import ItemListContainer from "./Components/ItemListContainer/ItemListContainer";
import './App.css';
import NavBar from "./components/NavBar/NavBar";

function App () {
  return (
    <div className="App">
<NavBar/>
<ItemListContainer greeting= 'Bienvenidos a la tienda de juegos'/>
    </div>
  );
}

export default App;
