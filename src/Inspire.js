import React from 'react'
import style, {keyframes} from 'styled-components'

const kfquote = keyframes`
    100% {
        color: black;
    }
`
const kfinspire = keyframes`
    50% {
        background: lavender;
    }
    100% {
        background: black;
    }
`

const kfheading = keyframes`
    25%{
        border: 3px solid red;
    }
    80%{
        border: 1px solid maroon;
    }
    100% {
        background-color: maroon;
        border: 50px solid maroon;
        color: orange;
        box-shadow: -10px -10px 80px 5px;
    }
`

const StyledInspire = style.div`
    display: flex;
    justify-content: space-evenly;
    background: orange;
    animation: ${kfinspire} 5s ease-in-out forwards;
`

const StyledVenus = style.div`
    border-radius: 10%;
    img {
        margin: 5%;
        border-radius: 50% 50% 50% 50%;
        color: blue;
        box-shadow: -5px -5px 50px 10px;
        border: 2px solid aqua;
    }
    margin: 5%;
    
`

const StyledHeading = style.div`
    background-color: red;
    animation: ${kfheading} 10s ease-in-out forwards;
    color: white;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 25%;
    margin: 5%;
    border-radius: 50% 50% 50% 50%;
    box-shadow: -10px -10px 80px 80px;
    border: 3px solid yellow;
    h1 {
        color: red;
        animation: ${kfquote} 2s ease-in-out forwards;
    }
    h2 {
        background: black;
        color: purple;
        font-size: 1.5rem;
        padding: 10px;
        width: 15%;
        box-shadow: -10px -10px 80px 20px;
        border-radius: 50% 50% 50% 50%;
        border: 1px solid lavender;
        &:hover {
            background: gold;
            color: white;
        }
    }
`

function Inspire(props){
    const {nasa} = props
    console.log('Inspiration is here')

    return(
        <StyledInspire>
        <StyledHeading className= "Inspiration Quote">
            <h1 className= "Inspiration Quote">
            "There is geometry in the humming of the strings, there is music in the spacing of the spheres" - Pythagorus
            </h1>  
            <span role="img" aria-label='go!'>🚀</span>
            <h2>{nasa.date}</h2>
        </StyledHeading>
        <StyledVenus className= 'Venus'>
            <img src='https://www.sciencealert.com/images/2019-07/ysaLqAf1.gif' alt='Earth and Venus'></img>
        </StyledVenus>
        </StyledInspire>         
    )
}

export default Inspire