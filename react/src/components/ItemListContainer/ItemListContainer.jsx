import { useState, useEffect} from "react";
import { useParams } from "react-router-dom";
import arrayProducts from '../Json/arrayProducts.json'
import ItemList from '../ItemList'

import './ItemListContainer.css'


const ItemListContainer =() => {

    const[item, setItem] = useState ([])
    const {id} =useParams ()
    
    useEffect (()=>{
    const fetchData = async()=>{
        try{
        const data = await new Promise ((resolve) => {
            setTimeout(() => {
                resolve (id ? arrayProductos.filter (item => item.categoria === id) : arrayProductos)
            }, 2000 );
        });
        setItem (data);

    } catch (error) {
        console.log ('Error:' , error);
    }
    };
     fetchData();
} [id])
    
    
    
        return (
            <div className='conteiner'>
                <div className='row'>
                    <ItemList item={item}/>
                
            </div>
            </div>
        )
    }


export default ItemListContainer;