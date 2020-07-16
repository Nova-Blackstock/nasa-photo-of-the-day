import React from 'react'
import style, {keyframes} from 'styled-components'

const kfdaily = keyframes`
    40% {
        color: white;
    }
    100% {
        color: purple;
    }
    
    `

const kfdailybackground = keyframes`
50% {
    background: lavender;
}
100% {
    background: black;
}
`


const StyledDaily = style.div`
    background: orange;
    animation: ${kfdailybackground} 5s ease-in-out forwards;
    img {
        margin: 5%;
        width: 30%;
        box-shadow: -10px -10px 900px 275px;
        border-radius: 60% 60% 60% 60%;
        border: 500px solid black;
        color: orange;
        animation: ${kfdaily} 10s ease-in-out forwards;
    }
`

function NasaDaily(props){
    const {nasa} = props
    console.log('NasaDaily works')

    return (
        <StyledDaily>
        <img src= {nasa.hdurl} alt = {nasa.title} className= 'dailypic'></img>
        </StyledDaily>
    )
}

export default NasaDaily;