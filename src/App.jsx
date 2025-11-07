
import './App.css'
import Banner from './Components/Banner'
import Row from './Components/Row'

import requests from './request'

function App() {
 
  return (
    <>
<Banner fecturl={requests.fetchTopRated} className="banner-title-1" />      <Row title="Trending" fecturl={requests.fetchTrending} className="trending-row" />
      <Row title="Top Rated" fecturl={requests.fetchTopRated} className="toprated-row" />
      <Row title="Action Movies" fecturl={requests.fetchActionMovies} className="action-row" />
      <Row title="Comedy Movies" fecturl={requests.fetchComedyMovies} className="comedy-row" />
      <Row title="Horror Movies" fecturl={requests.fetchHorrorMovies} isposter className="horror-row" />
      <Row title="Romantic Movies" fecturl={requests.fetchRomanceMovies} className="romance-row" />
      <Row title="Documentaries" fecturl={requests.fetchDocumentaries} className="doc-row" />
      <Row title="Netflix Originals" fecturl={requests.fetchNetflixOriginals} className="netflix-row" />
    </>
  )
}

export default App
