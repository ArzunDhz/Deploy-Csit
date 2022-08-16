
import React, { useState } from 'react'
const CA = () => {
  const [pdf,setPdf] = useState('https://drive.google.com/file/d/1Pc95lBdKB7Pcik9_5lSZ0uyylYtM1UVl/preview')

  const [qn,setQN] = useState(true)

if(qn){
    return (
        <>
     <div className='mt-20 ml-25'>
       <button onClick={()=>setPdf('https://drive.google.com/file/d/1Pc95lBdKB7Pcik9_5lSZ0uyylYtM1UVl/preview')} className='head'> ModelQn </button>
       <button onClick={()=>{setQN(false);setPdf("https://drive.google.com/file/d/1MelWGb1r7Xglzk3K_AfSbbEV1xvRjJg2/preview")}} className='head'> PreviousQn </button>
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
      <button onClick={()=>{setQN(true);setPdf('https://drive.google.com/file/d/1Pc95lBdKB7Pcik9_5lSZ0uyylYtM1UVl/preview')}} className='head'> ModelQn </button>
      <button onClick={()=>setPdf("https://drive.google.com/file/d/1_Q9jN3mAqiPt7hITx0uxgPR6zvy9h92V/preview")} className='head'> PreviousQn </button>
      <button onClick={()=>{setQN(true);setPdf("https://drive.google.com/file/d/1OLMlVwiK5C2wzZ1W08T6KODz6e-wjGeo/preview")}} className='head'> Notes </button>
    </div>
    
    <div className='flex'> 
    
    <div className=' ml-25 mt-10'>
    <iframe src={pdf} width="640" height="480" allow="autoplay"></iframe>
    </div>
    
    <div className='mt-20'>
       <button className='nicer' onClick={()=>setPdf( "https://drive.google.com/file/d/1_Q9jN3mAqiPt7hITx0uxgPR6zvy9h92V/preview")}>2075</button>
       <button className='nicer' onClick={()=>setPdf( "https://drive.google.com/file/d/19UKfqnbqOz-LqOY7M-MGA_ki1_oYbpEW/preview")}>2074</button>
       <button className='nicer' onClick={()=>setPdf( "https://drive.google.com/file/d/1aq1gCVvxBM2rDOC46jRUiNiVL--SS3Jz/preview")}>2073</button>
       <button className='nicer' onClick={()=>setPdf( "https://drive.google.com/file/d/1mobnbM0e-eOBAdXwx5BnkV1OlwqFjEbP/preview")}>2072</button>
    </div>
   
    
    </div>
    

       </> 


 )
   

}

}

export default CA