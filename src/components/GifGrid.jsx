import { useFetch } from "../hooks/useFetch";
import { GifItem } from "./GifItem";


export const GifGrid = ({ category }) => {
  

   const { images, isLoading } = useFetch( category );

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
