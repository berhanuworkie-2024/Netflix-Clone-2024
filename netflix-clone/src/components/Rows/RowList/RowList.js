import React from 'react'
import Row from '../Row/Row'
import Requests from '../../../utils/Requests'

const RowList = () => {
  return (
    <>
    <Row
    title="NETFLIX ORIGINALS"
    fetchUrl={Requests.fetchNetflixOriginals}
    isLargeRow={true}
    />

<Row
    title="Trending Now"
    fetchUrl={Requests.fetchTrending}
    isLargeRow={true}
    />

<Row
    title="Top Rated"
    fetchUrl={Requests.fetchTopRatedMovies}
    isLargeRow={true}
    />

<Row
    title="Action Movies"
    fetchUrl={Requests.fetchActionMovies}
    isLargeRow={true}
    />

<Row
    title="Comedy Movies"
    fetchUrl={Requests.fetchComedyMovies}
    isLargeRow={true}
    />

<Row
    title="Horror Movies"
    fetchUrl={Requests.fetchHorrorMovies}
    isLargeRow={true}
    />

<Row
    title="Romance Movies"
    fetchUrl={Requests.fetchRomanceMovies}
    isLargeRow={true}
    />

<Row
    title="Documentaries"
    fetchUrl={Requests.fetchDocumentaries}
    isLargeRow={true}
    />

<Row
    title="Tv SHow"
    fetchUrl={Requests.fetchTvShow}
    isLargeRow={true}
    />



    
    </>
  )
}

export default RowList
