// eslint-disable-next-line no-unused-vars
import React from 'react'
import  Index  from 'src/components/Index.jsx'
import  Row  from 'src/components/Row.jsx'
import requests from 'src/Requests.jsx'

export const Home = () => {
  return (
    <>
    <Index />
    <Row rowID='1' title='Up coming' fetchURL={requests.requestUpcoming}/>
    <Row rowID='2' title='Popular' fetchURL={requests.requestPopular}/>
    <Row rowID='3' title='Trending' fetchURL={requests.requestTrending}/>
    <Row rowID='4' title='Top Rated' fetchURL={requests.requestTopRated}/>
    <Row rowID='5' title='Horror' fetchURL={requests.requestHorror}/>
    </>
  )
}
