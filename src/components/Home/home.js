import React from 'react'
import { Link } from 'react-router-dom'
const home = () => {
  return (
   <>
  
  <div className=' grid grid-cols-3 min-h-screen content-center gap-5  mx-20 mt-20 gap-y-8 pb-10 '> 
  
  <Link className="nice  text-start"  to='/ds'><div className=" home bg-slate-300"> <img className='image' src='https://www.kindpng.com/picc/m/420-4208342_transparent-career-icon-png-binary-search-tree-icon.png'/> DSA</div></Link>

  <Link className="nice" to='/nm'><div className=" home bg-red-300"><img className='image' src='https://www.section.io/engineering-education/bisection-method-in-python/bisection.png'/>NM</div></Link>
 
  <Link className="nice" to='/stats'><div className=" home bg-slate-500"> <img className='image' src='https://thumbs.dreamstime.com/b/statistics-linear-icon-modern-outline-logo-concept-o-white-background-business-analytics-collection-suitable-use-133515482.jpg'/>STATS</div></Link>
 
  <Link className="nice" to='/cg'> <div className=" home bg-yellow-500 "> <img className='image' src='https://thumbs.dreamstime.com/b/graphic-word-pencil-letter-i-designer-artist-vector-conceptual-creative-logo-poster-made-special-font-208147549.jpg'/>Computer Graphic</div></Link>
 
  <Link className="nice" to='/ca'> <div className=" home bg-teal-400">  <img className='image' src='https://kullabs.com/uploads/computer_architecture.jpg'/>Computer Architecture</div></Link>
  
  
  </div>
  



   </> 

  )
}

export default home



/*
<div className=' ml-44 mr-44 mt-40  min-h-screen bg-slate-50' >
<h1 className=' text-xl text-red-600'> Choose your Course !! </h1>
   <Link className="nice  text-start"  to='/ds'>  <img src='dsa.jpg'/> DS</Link>
   <Link className="nice" to='/nm'> NM</Link>
   <Link className="nice" to='/ca'> CA</Link>
   <Link className="nice" to='/stats'> STATS</Link>
   <Link className="nice" to='/cg'> CG</Link>
   </div>
   */



