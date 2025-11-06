import React, { useEffect } from 'react'
import { useState } from 'react';
import instance from '../Instance';
const base_img_url = "https://image.tmdb.org/t/p/original/";
function Row({title,fecturl}) {
    const [movies,setMovies]=useState([])
    useEffect(()=>{
        async function fetchData() {
            const request=await instance.get(fecturl)
            setMovies(request.data.results)
        }
        fetchData()
    },[fecturl])
  return (
     <div className="row">
      <h2>{title}</h2>

      <div className="row__posters">
        {movies.map((movie) => (
          <div className="row__card" key={movie.id}>
            <img
              className="row__poster"
              src={`${base_img_url}${movie.poster_path}`}
              alt={movie.name}
            />
            <p>{movie.name}</p>
          </div>
        ))}
      </div>
    </div>
    
    
   
  )
}

export default Row