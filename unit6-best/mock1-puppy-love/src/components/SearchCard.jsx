import React from 'react'
import { useNavigate } from 'react-router-dom'
import styles from './Card.module.css'

const SearchCard = ({URL}) => {
    console.log(URL);
//     const navigate= useNavigate()

// const HandleClick=() => {
//   navigate('/Puppy' , {state:{name:breedName} } )
// }


  return (
    <div className={styles.card}>

     {/* <h2>{breedName}</h2> */}

     <img src={URL} alt="img" />

    </div>
  )
}

export default SearchCard