import React from 'react'

const Answer = ( {name, place, infox={a:6, b:5} } ) => {
  return (
    <div>
         hello from { name }, i'm from {place}
            { infox && (
               <div>
                 {infox.a} || {infox.b}
               </div>
            ) }
         <div>

         </div>

    </div>
  )
}

export default Answer