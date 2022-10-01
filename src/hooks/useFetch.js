import { useState, useEffect } from "react";
import { getGif } from "./getGif";



export const useFetch = ( category ) => {

    const [ images, setImages ] = useState([]);
    const [isLoading, setIsLoading] = useState( true );


    useEffect( () => {
        getGif(category)
            .then( setImages, setIsLoading(false) ); 
   }, [] )



    return {
        images,
        isLoading
    }
}
