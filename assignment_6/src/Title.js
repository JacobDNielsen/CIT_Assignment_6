function Title ({known_for}){


    return(
        <>
            <p>Title: {known_for?.title}, Release date: {known_for?.release_date}</p>
            <p> <b>Short description:</b> {known_for?.overview}</p>
        </>
    );
}

export default Title;