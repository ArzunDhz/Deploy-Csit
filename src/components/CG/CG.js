import React, { useState } from 'react'

const CG = () => {
  const [pdf,setPdf] = useState("https://drive.google.com/file/d/1NnGpb0DRV4CwbO6PHhlnp1QdoyAPb7G1/preview")

  const [qn,setQN] = useState(true)

if(qn){
    return (
        <>
     <div className='mt-20 ml-25'>
       <button onClick={()=>setPdf("https://drive.google.com/file/d/1NnGpb0DRV4CwbO6PHhlnp1QdoyAPb7G1/preview")} className='head'> ModelQn </button>
       <button onClick={()=>{setQN(false);setPdf("https://drive.google.com/file/d/1KM9tHAriIaGob5Wcq_bi-AmnMxBhJ35S/preview")}} className='head'> PreviousQn </button>
       <button onClick={()=>setPdf("https://drive.google.com/file/d/1OLMlVwiK5C2wzZ1W08T6KODz6e-wjGeo/preview")} className='head'> Notes </button>
     </div>
     
     <div className='flex'> 
     
     <div className=' ml-25 mt-10'>
     <iframe src={pdf} width="780" height="480" allow="autoplay"></iframe>
     </div>
     </div>
     
     
        </> 
       )
}
else{
 return(
    <>
    <div className='mt-20 ml-25'>
      <button onClick={()=>{setQN(true);setPdf("https://drive.google.com/file/d/1NnGpb0DRV4CwbO6PHhlnp1QdoyAPb7G1/preview")}} className='head'> ModelQn </button>
      <button onClick={()=>setPdf("https://drive.google.com/file/d/1NepoWbD5eCJPv2cKEbbBXTh6CBadOTRm/preview")} className='head'> PreviousQn </button>
      <button onClick={()=>{setQN(true);setPdf("https://drive.google.com/file/d/1OLMlVwiK5C2wzZ1W08T6KODz6e-wjGeo/preview")}} className='head'> Notes </button>
    </div>
    
    <div className='flex'> 
    
    <div className=' ml-25 mt-10'>
    <iframe src={pdf} width="640" height="480" allow="autoplay"></iframe>
    </div>
    
    <div className='mt-20'>

       <button className='nicer' onClick={()=>setPdf( "https://drive.google.com/file/d/1JXTeDJjRwiYzl0gh1RY0vp02s0lyfEv0/preview")}>2075</button>
       <button className='nicer' onClick={()=>setPdf( "https://drive.google.com/file/d/1YcLLGxZJWj7YjCdxVSvDtILR6vp5rb8p/preview")}>2073</button>
       <button className='nicer' onClick={()=>setPdf( "https://drive.google.com/file/d/1I0_c6Aei35DK3i0jY6GyTMvlbg0ungqJ/preview")}>2072</button>
    
    
    </div>
   
    
    </div>
    

       </> 


 )
   

}

}

export default CG