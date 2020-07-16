import React from 'react'

function DailyExplanation(props){
    const {nasa} = props
    console.log('Explanation works')

    return(
        <div className= 'Explanation'>
            <h2 className= 'Explanation Title'>{nasa.title}</h2>
            <p className= 'Explanation Text'  >{nasa.explanation}</p>
        </div>
    )
}

export default DailyExplanation