import React, { useState } from 'react'

const STATS = () => {
  const [pdf,setPdf] = useState("https://drive.google.com/file/d/1-DUP1UPmKZEmqwF4gyjz9n9_knxINOgH/preview")

  const [qn,setQN] = useState(true)

if(qn){
    return (
        <>
     <div className='mt-20 ml-25'>
       <button onClick={()=>setPdf("https://drive.google.com/file/d/1-DUP1UPmKZEmqwF4gyjz9n9_knxINOgH/preview")} className='head'> ModelQn </button>
       <button onClick={()=>{setQN(false);setPdf("https://drive.google.com/file/d/1_QDMco0siHBk8xSMVTdij5qdDip0VUD9/preview")}} className='head'> PreviousQn </button>
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
      <button onClick={()=>{setQN(true);setPdf("https://drive.google.com/file/d/1-DUP1UPmKZEmqwF4gyjz9n9_knxINOgH/preview")}} className='head'> ModelQn </button>
      <button onClick={()=>setPdf("https://drive.google.com/file/d/1_QDMco0siHBk8xSMVTdij5qdDip0VUD9/preview")} className='head'> PreviousQn </button>
      <button onClick={()=>{setQN(true);setPdf("https://drive.google.com/file/d/1OLMlVwiK5C2wzZ1W08T6KODz6e-wjGeo/preview")}} className='head'> Notes </button>
    </div>
    
    <div className='flex'> 
    
    <div className=' ml-25 mt-10'>
    <iframe src={pdf} width="640" height="480" allow="autoplay"></iframe>
    </div>
    
    <div className='mt-20'>
      
     
       <button className='nicer' onClick={()=>setPdf( "https://drive.google.com/file/d/1_QDMco0siHBk8xSMVTdij5qdDip0VUD9/preview")}>2075</button>
      
    </div>
   
    
    </div>
    

       </> 


 )
   

}

}

export default STATS