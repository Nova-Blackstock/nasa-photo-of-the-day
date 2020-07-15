import React from 'react'

function Inspire(props){
    const {nasa} = props
    console.log('Inspiration is here')

    return(
        <div className= "Inspiration Quote">
            <h1 className= "Inspiration Quote">
                "The history of astronomy is a history of receding horizons" - Edwin Hubble
            </h1>  
            <span role="img" aria-label='go!'>🚀</span>
            <h2>In 200,000 years it will be 20{nasa.date}</h2>
        </div>         
    )
}

export default Inspire