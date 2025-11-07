import React, { useEffect } from 'react'
import { useState } from 'react';
import instance from '../Instance';
const base_img_url = "https://image.tmdb.org/t/p/original/";
function Row({title,fecturl,isposter,className}) {
    const [movies,setMovies]=useState([])
    useEffect(()=>{
        async function fetchData() {
            const request=await instance.get(fecturl)
            setMovies(request.data.results)
        }
        fetchData()
    },[fecturl])
  return (
    <div className={`row ${className}`}> 
      <h2>{title}</h2>

      <div className="row__posters">
        {movies.map((movie) => (
          <div className={`row__card ${isposter ? "row__card-new":''}`} key={movie.id}>
            <img
              className="row__poster"
              src={`${base_img_url}${isposter ? movie.backdrop_path: movie.poster_path}`}
              alt={movie.name}
              
            />
          {isposter && (
              <h4  className="movie__name">{movie.name }</h4>)}
           <h5 className={`${className}`} >{movie.name || movie.title}</h5>   
          </div>
        ))}
      </div>
    </div>
    
    
   
  )
}

export default Row