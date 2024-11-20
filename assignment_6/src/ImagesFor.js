import { useEffect, useState } from "react"

export default function ImagesFor({id}){
    const [images, setImages] = useState([]);

    useEffect(() => {

        // const response = async () => {
        //     const r = await fetch('https://api.themoviedb.org/3/person/' + id + '/images?api_key=' + process.env.REACT_APP_API_KEY);
        //     const rr = await r.response;
        //     const data = rr.json();
          
        //     setImages(data.profiles.map((img) => 'https://image.tmdb.org/t/p/w45/'+ img.file_path))    
            
        // }
        // response();

        let ignore = false;

        fetch('https://api.themoviedb.org/3/person/' + id + '/images?api_key=' + process.env.REACT_APP_API_KEY)
        .then(res => res.json())
        .then(data => 
            {
                if(!ignore){
                    setImages(data.profiles?.map((img) => 'https://image.tmdb.org/t/p/w45/'+ img?.file_path))    
                }
            }
        );

        return () => {
            ignore = true;
          };

        // fetch('https://api.themoviedb.org/3/person/' + id + '/images?api_key=' + process.env.REACT_APP_API_KEY)
        // .then(res => res.json())
        // .then(data => 
        // {if(data.profiles)
        //     {
        //         setImages(data.profiles?.map((img) => 'https://image.tmdb.org/t/p/w45/'+ img?.file_path))    
        //     }}
        // )
    }, [id]);
  
    return (
        <>
            {images?.map((img, index) => <img src={img} key={index} alt={"none"}></img>)}        
        </>
    );
}