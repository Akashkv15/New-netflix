
import './App.css'
import Banner from './Components/Banner'
import Row from './Components/Row'

import requests from './request'

function App() {
 
  return (
    <>
      <Banner fecturl={requests.fetchTopRated}/>
      <Row title="Trending" fecturl={requests.fetchTrending}/>
      <Row title="Top Rated" fecturl={requests.fetchTopRated}/>
     <Row title="Action Movies" fecturl={requests.fetchActionMovies}/>
     <Row title="Comedy Movies" fecturl={requests.fetchComedyMovies}/>
     <Row title="Horror Movies" fecturl={requests.fetchHorrorMovies}/>
     <Row title="Romantic Movies" fecturl={requests.fetchRomanceMovies}/>
     <Row title="Doccumentaries" fecturl={requests.fetchDocumentaries}/>
     <Row title="Netflix Orginal" fecturl={requests.fetchNetflixOriginals}/>
    </>
  )
}

export default App
