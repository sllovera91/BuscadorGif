import { useFetchGifs } from "../hooks/useFetchGifs";
import { GifItem } from "./GifItem";


export const GifGrid = ({ category }) => {
  

   const { images, isLoading } = useFetchGifs( category );

    return (
        <>
            <p className="resultados">
            Estos son los resultados para <b> { category } </b>
            </p>
            
            {
                isLoading 
                ? ( <h2>cargando...</h2> )
                : null
            }
            
            <div className="card-grid">
                {
                    images.map( ( image ) => (
                       <GifItem 
                            key   = { image.id }
                            {...image}
                       />
                    ))
                }

            </div>

        </>
  )
}
