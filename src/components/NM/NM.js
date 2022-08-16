import React, { useState } from 'react'

const NM = () => {
  const [pdf,setPdf] = useState('https://drive.google.com/file/d/1h3FbAPAvzbjDiBhDGXK7T8y-RbTp11BO/preview')

  const [qn,setQN] = useState(true)

if(qn){
    return (
        <>
     <div className='mt-20 ml-25'>
       <button onClick={()=>setPdf('https://drive.google.com/file/d/1h3FbAPAvzbjDiBhDGXK7T8y-RbTp11BO/preview')} className='head'> ModelQn </button>
       <button onClick={()=>{setQN(false);setPdf("https://drive.google.com/file/d/18-mNBkk4HTfcqYr0S3p5lMA-FA9MuA4p/preview")}} className='head'> PreviousQn </button>
       <button onClick={()=>setPdf("https://drive.google.com/file/d/1OLMlVwiK5C2wzZ1W08T6KODz6e-wjGeo/preview")} className='head'> Notes </button>
     </div>
     
     <div className='flex'> 
     
     <div className='  ml-[255px] mt-10'>
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
      <button onClick={()=>{setQN(true);setPdf('https://drive.google.com/file/d/1h3FbAPAvzbjDiBhDGXK7T8y-RbTp11BO/preview')}} className='head'> ModelQn </button>
      <button onClick={()=>setPdf("https://drive.google.com/file/d/1NepoWbD5eCJPv2cKEbbBXTh6CBadOTRm/preview")} className='head'> PreviousQn </button>
      <button onClick={()=>{setQN(true);setPdf("https://drive.google.com/file/d/1OLMlVwiK5C2wzZ1W08T6KODz6e-wjGeo/preview")}} className='head'> Notes </button>
    </div>
    
    <div className='flex'> 
    
    <div className=' ml-25 mt-10'>
    <iframe src={pdf} width="640" height="480" allow="autoplay"></iframe>
    </div>
    
    <div className='mt-20'>
       <button className='nicer'  onClick={()=>setPdf("https://drive.google.com/file/d/18-mNBkk4HTfcqYr0S3p5lMA-FA9MuA4p/preview")}>2077</button>
     
       <button className='nicer' onClick={()=>setPdf( "https://drive.google.com/file/d/12WTj3QT4CvJuFkKt7SKYcijJLqnXEWwH/preview")}>2075</button>
       <button className='nicer' onClick={()=>setPdf( "https://drive.google.com/file/d/1sDfLkbTOPGy6vgLYjjOWckbebQQR1Z2G/preview")}>2074</button>
      
    </div>
   
    
    </div>
    

       </> 


 )
   

}

}

export default NM