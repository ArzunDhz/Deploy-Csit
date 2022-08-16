
import { Link } from "react-router-dom";

import React from 'react'

const header = () => {
  return (
   <>

   <div className="mt-10  ml-72">
   <Link className="head" to='/'> Home</Link>
   
   <Link className="head"  to='/ds'>DS</Link>
   <Link className="head" to='/nm'> NM</Link>
   <Link className="head" to='/ca'> CA</Link>
   <Link className="head" to='/stats'> STATS</Link>
   <Link className="head" to='/cg'> CG</Link>

   </div>

   
   
   </>
  )
}

export default header