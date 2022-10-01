import { useState } from "react";
import { AgregarCategoria, GifGrid } from "./components";

export const BuscadorDeGif = () => {
    
    const [categorias, setCategorias] = useState(['Argentina']);

    const agregarCategoria = ( newCategory ) => {
        if ( categorias.includes(newCategory)) return;  
        setCategorias( [ newCategory,   ...categorias] );
    }

    
    return ( 
        <>
            
            <h1>Buscador de Gifs</h1>

            <AgregarCategoria 
                onNewCategory= { agregarCategoria }
            />
            { 
            categorias.map( category => (
                        <GifGrid 
                        key={ category } 
                        category={ category } />
                    ))
            }

        </>
    )

}