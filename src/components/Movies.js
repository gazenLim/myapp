import React from 'react';
const IMG_URL= "https://image.tmdb.org/t/p/w1280";

const setVoteClass = vote =>{
    if(vote >=8 ){
        return 'green'
    }else if(vote >=6){
        return 'orange'
    }else{
        return 'red'
    }
}

const Movies = ({title,poster_path, overview, vote_average}) => (
    <div className="movie">
        
       <img src={poster_path ? (IMG_URL + poster_path) :"https://media.istockphoto.com/photos/pop-corn-and-on-red-armchair-cinema-picture-id1271522601?b=1&k=20&m=1271522601&s=170667a&w=0&h=azZRRchShbrwRgq58omc1HOYABnfDDOzXJatuaZrueQ="}  alt={title}/>
            <div className="movie-info">
                <h3>{title}</h3>
                <span className=    {`tag ${setVoteClass(vote_average)}`} >{vote_average}</span>
            </div>
            <div className="movie-overview">
                <h2>Overview</h2>
                <p>{overview}</p>
            </div>
    </div>
    
);

export default Movies;