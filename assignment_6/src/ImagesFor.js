import { useEffect, useState } from "react"

export default function ImagesFor({id}){
    const [images, setImages] = useState([]);
    const [imageList, setImageList] = useState([]);

    useEffect(() => {
        fetch('https://api.themoviedb.org/3/person/' + id + '/images?api_key=' + process.env.REACT_APP_API_KEY)
        .then(res => res.json())
        .then(data => setImages(data.profiles))
    
    
        images.map((img) => fetch('https://image.tmdb.org/t/p/w45/'+ img.file_path)
        .then(res => res.json())
        .then(data => setImageList(...data))
        );
    }, []);
  

    return (
        <>
        {imageList.map((img) => <img src={img}></img>)}
            
        </>
    );
}