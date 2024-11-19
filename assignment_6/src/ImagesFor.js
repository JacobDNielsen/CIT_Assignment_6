import { useEffect, useState } from 'react';

export default function ImagesFor({ id }) {
    const [imageList, setImageList] = useState([]);

    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/person/${id}/images?api_key=${process.env.REACT_APP_API_KEY}`)
            .then((res) => res.json())
            .then((data) => {
                if (data.profiles) {
                    const urls = data.profiles.map((img) => `https://image.tmdb.org/t/p/w45/${img.file_path}`); // Sets the full url for the image for each img.
                    setImageList(urls); 
                }
            })
            .catch((error) => console.error("Error fetching images:", error));

    }, [id]); // Need to add the id in the array!

    return (
        <>
            {imageList.map((img, index) => (
                <img key={index} src={img} alt={`Profile ${index}`} />
            ))}
        </>
    );
}
