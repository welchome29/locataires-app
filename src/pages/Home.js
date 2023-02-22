import React, {useContext} from 'react'
import { UserContext } from '../context/userContext'
import PrivateHome from './Private/PrivateHome/PrivateHome'
import Loader from '../assets/house.gif'

export default function Home() {
  const {currentUser} = useContext(UserContext)
  return (
      <div className='container' style={{padding: 0, margin: 0, maxWidth: "1920px"}}>
        <h1 
          className='display-3 text-center' 
          style={{
            width: "100vw", 
            marginTop: '150px'
          }}
        >
          {currentUser ? 
            <PrivateHome /> : 
            <div>
              <p style={{ fontWeight: 300 }}>Bonjour, inscrivez-vous ou connectez-vous</p>
              <img src={Loader} alt='loading' style={{ width: "300px", marginTop: "50px" }}/>
            </div>}
        </h1>
      </div>
  )
}
