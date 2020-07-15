import React from 'react'

function NasaDaily(props){
    const {nasa} = props
    console.log('NasaDaily works')

    return (
        <img src= {nasa.hdurl} alt = {nasa.title} className= 'dailypic'></img>
    )
}

export default NasaDaily;