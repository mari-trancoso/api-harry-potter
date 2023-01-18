import React from 'react'
import axios from "axios";
import { useEffect, useState } from "react";

const HomePage = () => {
    const [characters, setCharacters] = useState([])

    const fetchAllCharacthers = async () => {
      try {
        const response = await axios.get(`https://hp-api.onrender.com/api/characters`)
        console.log(response.data)
        setCharacters(response.data)
      }
      catch(error){
        console.log(error)
      }
    }
  
    useEffect(() => {
      fetchAllCharacthers()
    }, [])
  
    console.log(characters)
  
    return (
      <>
        <h1>
          OIIIIIIIIIIII
        </h1>
        <h2>Personagens</h2>
        {characters.map((character, index) => {
          if(index<25){
            return (
              <>
                <p>{character.name}</p>
                <img src={character.image} alt='imagem do personagem'/>
              </>   
                  )
          }
        })}
      </>
    )
}

export default HomePage