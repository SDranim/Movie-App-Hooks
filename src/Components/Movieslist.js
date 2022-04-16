import React from 'react'
import Moviescard from './Moviescard'

function Movieslist({movies, search}) {
  return (
    <div className='list'>
{movies.filter((mv)=>mv.title.toLowerCase().includes(search.toLowerCase())).map((el)=><Moviescard el={el}/>)}
    </div>
  )
}

export default Movieslist